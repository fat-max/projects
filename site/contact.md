---
layout: page
head:
  - - script
    - { async: '', defer: '', src: 'https://www.google.com/recaptcha/api.js' }
---

<!-- <script src="" async defer></script> -->

<div class="p-6 max-w-lg">
  <h1 class="text-3xl font-bold">Contact me</h1>
  <form class="mt-8 space-y-5" method="POST" action="https://submit-form.com/v55s8XsXC">
    <div>
      <label class="text-sm font-medium mb-2 block" for="name">Name</label>
      <input type="text" placeholder="Enter Name" id="name" name="name"
        class="w-full py-1.5 px-4 bg-gray-100 border border-gray-200 text-slate-800 focus:border-slate-900 text-sm outline-0 transition-all" />
    </div>
    <div>
      <label class="text-sm font-medium mb-2 block" for="email">Email</label>
      <input type="email" placeholder="Enter Email" id="email" name="email"
        class="w-full py-1.5 px-4 bg-gray-100 border border-gray-200 text-slate-800 focus:border-slate-900 text-sm outline-0 transition-all" />
    </div>
    <div>
      <label class="text-sm font-medium mb-2 block" for="message">Message</label>
      <textarea placeholder="Enter Message" rows="6" id="message"
        name="message"
        required=""
        class="w-full px-4 bg-gray-100 border border-gray-200 text-slate-800 focus:border-slate-900 text-sm pt-3 outline-0 transition-all"></textarea>
    </div>
    <div class="g-recaptcha" data-theme="dark" data-sitekey="6LcrQHQsAAAAANmCwLGAKPjTQkrqUYecH65tk04K"></div>
    <button type="submit"
      class="text-white bg-orange-900 font-medium hover:bg-orange-800 tracking-wide text-sm px-4 py-1.5 w-full border-0 outline-0 cursor-pointer">Send message</button>
  </form>
</div>
