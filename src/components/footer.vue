<template>
 <footer class="bg-blue-900 text-white py-16 px-8">
      <div class="flex justify-between mb-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Our Supporters</h3>
          <div class="flex space-x-4">
            <img src="" alt="Novus Labs IEDC" class="h-8" />
            <img src="" alt="DEV.X" class="h-8" />
          </div>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Get Monthly News Letter</h3>
          <form class="flex">
            <input
              type="email"
              placeholder="Enter your email"
              class="px-4 py-2 rounded-l-md bg-white text-gray-800 focus:outline-none"
            />
            <button type="submit" class="bg-white text-blue-900 px-4 py-2 rounded-r-md hover:bg-blue-300 hover:text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div class="flex justify-between">
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-blue-300">We</a></li>
            <li><a href="#" class="hover:text-blue-300">Redefine</a></li>
            <li><a href="#" class="hover:text-blue-300">Learning</a></li>
            <li><a href="#" class="hover:text-blue-300">Experiences</a></li>
          </ul>
        </nav>
        <div class="text-sm">
          <a href="#" class="hover:text-blue-300">Terms and Condition</a>
          <span class="mx-2">|</span>
          <a href="#" class="hover:text-blue-300">Privacy Policy</a>
        </div>
        <div class="text-sm">eduneactcommunity@gmail.com</div>
      </div>
    </footer>

</template>
<script>
export default{
    name: 'footer',
}
</script>