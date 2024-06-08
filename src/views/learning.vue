<template>
  <div>
    <navbar />
    <img src="/assets/learingimg.png" alt="" class="mt-16 w-max w-screen" data-aos="fade-up" />

    <div class="flex font-extrabold text-5xl mb-5 mt-10 ml-2 md:ml-24 md:mt-10" data-aos="fade-up">
      The way of <p class="text-blue-950 md:ml-3">Learning</p>
    </div>

    <div class="flex flex-wrap justify-center ml-4 ">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden p-1"
        data-aos="fade-up"
      >
        <img :src="image" alt="Image" class="object-cover" />
      </div>
    </div>

    <div class="flex font-extrabold text-5xl mb-5 mt-10 md:mt14 ml-2 md:ml-24 md:mt-10" data-aos="fade-up">
      Why we <p class="text-blue-950 md:ml-3">choose the way</p>
    </div>

    <div class="text-justify md:w-10/12 md:ml-32 ml-4 mr-4 mt-3 mb-4 md:mb-14" data-aos="fade-up">
      <p>Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim. Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim. Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim.Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim.</p>
    </div>

    <FooterComponent />
    <ScrollUpButton />
  </div>
</template>


<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  mounted() {
    AOS.init({
      duration: 800,
      once: true,
    });
  },
};
</script>


<style scoped>
.p-1 {
  padding: 4px; /* Adjust padding to be smaller */
}
</style>
