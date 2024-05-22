<template>
  <div class="flex flex-col min-h-screen">
 

    <main class="flex-grow container mx-auto px-6 py-8">
      <div class="flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 mb-8 lg:mb-0">
          <div class="aspect-w-16 aspect-h-9">
            <video controls class="w-full h-full object-cover rounded-lg">
              <!-- <source src="path/to/video.mp4" type="video/mp4"> -->
            </video>
          </div>
        </div>
        <div class="lg:w-1/2 lg:ml-8">
          <p class="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis
            scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim.Lorem
            ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis
            scalerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim.
          </p>
          <!-- Add the timeline component here -->
          <timeline/>
        </div>
      </div>

      <div class="mt-8">
        <p class="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis
          scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim. Lorem
          ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis
          scalerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim.Lorem
          ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis
          scalerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim.
        </p>
      </div>
    </main>

    <footer class="bg-blue-500 text-white py-4 px-6">
      <div class="container mx-auto flex justify-between items-center">
        <div class="logo">
          <h1 class="text-2xl font-bold">EDUNECT</h1>
        </div>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-blue-300">We</a></li>
            <li><a href="#" class="hover:text-blue-300">Redefine</a></li>
            <li><a href="#" class="hover:text-blue-300">Learning</a></li>
            <li><a href="#" class="hover:text-blue-300">Experiences.</a></li>
          </ul>
        </nav>
        <div class="social-icons flex space-x-4">
          <a href="#" class="hover:text-blue-300">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#" class="hover:text-blue-300">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="hover:text-blue-300">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="hover:text-blue-300">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div class="container mx-auto mt-4">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-sm">Terms and Condition</p>
            <p class="text-sm">Privacy Policy</p>
          </div>
          <p class="text-sm">edunextcommunity@gmail.com</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import timeline from '@/components/Timeline.vue'
export default{
  name: 'aboud',
  components: {
    timeline
  }
}
</script>