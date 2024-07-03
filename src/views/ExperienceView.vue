<template>
  <div>
    <navbar />
    <section>
      <div class="px-12 mt-20">
        <div class="flex flex-wrap justify-center ml-4 ">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden p-1"
        data-aos="fade-up"
      >
        <img :src="image" alt="Image" class="object-cover h-72 w-72 " />
      </div>
    </div>
        <section class="bg-white dark:bg-gray-900 antialiased mt-8 md:mt-0 lg:mt-0 xl:mt-0" data-aos="fade-up" data-aos-delay="400">
          <div class="max-w-screen-xl mx-auto">
            <h2 class="flex font-extrabold text-5xl mb-5 mt-10  md:mt-10">
              The <p class="text-blue-950 ml-2">Experiences</p>
            </h2>
            <p class="mt-4 text-justify text-sm text-black sm:text-lg dark:text-gray-400">
              The lessons we’ve learned throughout the journey was mind blowing from the past years. It taught us to understand the challenges and problems of students from diversified background. The team we had has a wonderful ability to tackle real life problem and bring solutions for the problem wheather it’s a domain specific or a general problem. We understand every children is different in nature and they had their own talents and skill set. Each child's journey is unique and deserves to be evaluated accordingly.
            </p>
          </div>
        </section>
        <div class="item-center flex justify-center py-10" data-aos="fade-up" data-aos-delay="500">
          <!-- <img src="/assets/Experience/Vector 10.png" alt="" class="w-10/12 h-32" /> -->
          <wave />
        </div>
        <div></div>
      </div>
    </section>
    <testimonial data-aos="fade-up" />
    <Footer data-aos="fade-up" />
    <scroll data-aos="fade-up" />
    </div>
  </template>
  
  <script>
  import navbar from '@/components/reuse/Navbar.vue';
  import Footer from '@/components/reuse/Footer.vue';
  import testimonial from '@/components/testimonial.vue';
  import AOS from 'aos';
  import scroll from '@/components/Scrollup.vue';

  import 'aos/dist/aos.css';
  
  export default {
    name: 'ExperienceView',
    components: {
      navbar,
      Footer,
      testimonial,
      scroll
    },
    data() {
    return {
      images: [
        "./assets/gallery/IHRD.jpg",
        "./assets/gallery/SB (2).jpg",
        "./assets/gallery/RS.jpg",
        "./assets/gallery/IHRD (2).jpg",
      ],
    };
  },
    mounted() {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Animate only once
        mirror: false, // Disable mirroring animation
        // ... (Add more options as needed)
      });
    }
  };
  </script>
  
  <style>
  .csl {
    width: 315px;
  }
  </style>
