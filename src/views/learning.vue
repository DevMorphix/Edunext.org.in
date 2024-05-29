<template>
  <navbar />
  <img src="/assets/learingimg.png" alt="" class="mt-16 w-max w-screen" />

    <div class=" flex font-extrabold text-5xl mb-5 mt-10 ml-2 md:ml-24 md:mt-10">
      The way of <p class="text-blue-950 md:ml-2">Learning</p>
    </div>


  <div class="flex flex-wrap justify-center ml-4 md:ml-10 md:mb-10">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="overflow-hidden  p-1"
    >
      <img :src="image" alt="Image" class="object-cover  " />
    </div>
  </div>


    <div class="flex font-extrabold text-5xl mb-5 mt-10 ml-2 md:ml-24 md:mt-10">
      Why we <p class="text-blue-950 md:ml-2">choose the way</p>
    </div>



<div class="text-justify md:w-10/12 md:ml-32 ml-4 mr-4 mt-3 mb-4">
  <p >Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim. Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim. Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim.Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim.</p>
</div>


  <FooterComponent />
  <ScrollUpButton />
</template>

<script>
import navbar from "@/components/reuse/Navbar.vue";
import FooterComponent from "@/components/reuse/Footer.vue";
import ScrollUpButton from "@/components/Scrollup.vue";
export default {
  components: {
    navbar,
    FooterComponent,
    ScrollUpButton,
  },
  data() {
    return {
      images: [
        "./assets/gallery/Rectangle 68.png",
        "./assets/gallery/Rectangle 68.png",
        "./assets/gallery/Rectangle 68.png",
        "./assets/gallery/Rectangle 68.png",
        "./assets/gallery/Rectangle 68.png",
        "./assets/gallery/Rectangle 68.png",
        "./assets/gallery/Rectangle 68.png",
        "./assets/gallery/Rectangle 68.png",
        "./assets/gallery/Rectangle 68.png",
        "./assets/gallery/Rectangle 68.png",

      ],
    };
  },
};
</script>

<style scoped>
.p-1 {
  padding: 4px; /* Adjust padding to be smaller */
}
</style>
