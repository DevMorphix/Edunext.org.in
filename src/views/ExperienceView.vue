<template>
    <navbar />
    <section>
      <div class="px-12 mt-20" data-aos="fade-up">
        <div class="grid grid-cols-4 px-7 flex md:ml-10" data-aos="fade-up">
          <div class="md:mr-2 justify-center items-center">
            <img src="/assets/Experience/Rectangle 76.png" alt="" class="csl" data-aos="fade-up" />
          </div>
          <div class="md:mr-2 justify-center items-center">
            <img src="/assets/Experience/Rectangle 79.png" alt="" class="csl" data-aos="fade-up" />
          </div>
          <div class="md:mr-2 justify-center items-center">
            <img src="/assets/Experience/Rectangle 77.png" alt="" class="csl" data-aos="fade-up" />
          </div>
          <div class="md:mr-2 justify-center items-center">
            <img src="/assets/Experience/Rectangle 77.png" alt="" class="csl " data-aos="fade-up" />
          </div>
        </div>
        <section class="bg-white dark:bg-gray-900 antialiased mt-8 md:mt-0 lg:mt-0 xl:mt-0" data-aos="fade-up">
          <div class="max-w-screen-xl mx-auto">
            <h2 class="text-3xl font-semibold leading-tight tracking-tight text-sky-950 sm:text-4xl dark:text-white" data-aos="fade-up">
              The Experiences.
            </h2>
            <p class="mt-4 text-justify font-normal text-black sm:text-xl dark:text-gray-400" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim. Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim. Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim.Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat enim.
            </p>
          </div>
        </section>
        <div class="item-center flex justify-center py-10" data-aos="fade-up">
          <img src="/assets/Experience/Vector 10.png" alt="" class="w-10/12 h-32" data-aos="fade-up" />
        </div>
        <div data-aos="fade-up"></div>
      </div>
    </section>
    <testimonial data-aos="fade-up" />
    <Footer data-aos="fade-up" />
    <scroll data-aos="fade-up" />

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