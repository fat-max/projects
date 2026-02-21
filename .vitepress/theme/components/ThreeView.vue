<script lang="ts" setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'
import type { geometry } from '@types/three'
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Vector3,
    Mesh,
    MeshPhongMaterial,
    HemisphereLight
} from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const props = defineProps(['item'])
const canvas = ref(null);
const container = ref(null);
const renderer = ref(null);
const camera = ref(null);

const reSize = () => {
    renderer.value.setSize(container.value.clientWidth, container.value.clientHeight);
    camera.value.aspect = container.value.clientWidth / container.value.clientHeight;
    camera.value.updateProjectionMatrix();
}

const loadModule = () => {
    window.removeEventListener('resize', reSize)
    renderer.value = new WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true });
    camera.value = new PerspectiveCamera(70, container.value.clientWidth / container.value.clientHeight, 1, 1000);
    renderer.value.setSize(container.value.clientWidth, container.value.clientHeight);
    // renderer.setClearColor(0xff00ff, 1);

    window.addEventListener('resize', reSize, false);

    const controls = new OrbitControls(camera.value, renderer.value.domElement);
    camera.value.position.set(0, 50, 100);
    controls.enableDamping = true;
    controls.rotateSpeed = 0.5;
    controls.dampingFactor = 0.1;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = .75;

    const scene = new Scene();

    scene.add(new HemisphereLight(0xffffff, 0x080820, 1.5));
    (new STLLoader()).load(props.item.src, function (geometry: geometry) {
        const material = new MeshPhongMaterial({ color: 0xff00ff, specular: 100, shininess: 100 });
        const mesh = new Mesh(geometry, material);
        scene.add(mesh);

        // Compute the middle
        const middle = new Vector3();
        geometry.computeBoundingBox();
        geometry.boundingBox.getCenter(middle);

        // Center it
        mesh.position.x = -1 * middle.x;
        mesh.position.y = -1 * middle.y;
        mesh.position.z = -1 * middle.z;

        // Pull the camera away as needed
        const largestDimension = Math.max(geometry.boundingBox.max.x,
            geometry.boundingBox.max.y, geometry.boundingBox.max.z)
        camera.value.position.z = largestDimension * 1.5;


        const animate = function () {
            requestAnimationFrame(animate);
            controls.update();
            renderer.value.render(scene, camera.value);
        };
        animate();
    });
}

onUpdated(() => loadModule())
onMounted(() => loadModule())
onUnmounted(() => window.removeEventListener('resize', reSize))
</script>

<template>
    <div class="h-full w-full" ref="container">
        <a :href="item.src" target="_blank"
            class="absolute px-2 py-1 text-sm bg-orange-800 !text-white !no-underline rounded right-0">Download</a>
        <canvas class="w-full h-full" ref="canvas" :key="item.src" />
    </div>
</template>
