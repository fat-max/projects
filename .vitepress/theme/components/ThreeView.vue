<script lang="ts" setup>
import { ref, onMounted, onUpdated } from 'vue'
import type { geometry } from '@types/three'
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Vector3,
    BoxGeometry,
    MeshBasicMaterial,
    Matrix4,
    Mesh,
    MeshPhongMaterial,
    HemisphereLight
} from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const props = defineProps(['item'])
const canvas = ref(null);

const loadModule = () => {
    const renderer = new WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true });
    const camera = new PerspectiveCamera(70, canvas.value.clientWidth / canvas.value.clientHeight, 1, 1000);
    renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight);
    // renderer.setClearColor(0xff00ff, 1);

    window.addEventListener('resize', function () {
        renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight);
        camera.aspect = canvas.value.clientWidth / canvas.value.clientHeight;
        camera.updateProjectionMatrix();
    }, false);

    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 50, 100);
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
        camera.position.z = largestDimension * 1.5;


        const animate = function () {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();
    });
}

onUpdated(() => loadModule())
onMounted(() => loadModule())
</script>

<template>
    <a :href="item.src" target="_blank"
        class="absolute px-2 py-1 text-sm bg-orange-800 !text-white !no-underline rounded right-0">Download</a>
    <canvas class="h-80" ref="canvas" :key="item.src" />
</template>
