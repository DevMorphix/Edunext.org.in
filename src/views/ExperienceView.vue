<template>
  <div>
    <navbar />
    <section>
      <div class="px-12 mt-20">
        <div class="grid grid-cols-4 px-7 flex md:ml-10">
          <div class="md:mr-2 justify-center items-center" data-aos="fade-up">
            <img src="/assets/Experience/Rectangle 76.png" alt="" class="csl" />
          </div>
          <div class="md:mr-2 justify-center items-center" data-aos="fade-up" data-aos-delay="100">
            <img src="/assets/Experience/Rectangle 79.png" alt="" class="csl" />
          </div>
          <div class="md:mr-2 justify-center items-center" data-aos="fade-up" data-aos-delay="200">
            <img src="/assets/Experience/Rectangle 77.png" alt="" class="csl" />
          </div>
          <div class="md:mr-2 justify-center items-center" data-aos="fade-up" data-aos-delay="300">
            <img src="/assets/Experience/Rectangle 77.png" alt="" class="csl " />
          </div>
        </div>
        <section class="bg-white dark:bg-gray-900 antialiased mt-8 md:mt-0 lg:mt-0 xl:mt-0" data-aos="fade-up" data-aos-delay="400">
          <div class="max-w-screen-xl mx-auto">
            <h2 class="flex font-extrabold text-5xl mb-5 mt-10  md:mt-10">
              The <p class="text-blue-950 ml-2">Experiences</p>
            </h2>
            <p class="mt-4 text-justify text-sm text-black sm:text-lg dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis
              sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium
              erat enim. Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices
              mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis
              pretium erat enim. Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu
              ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim
              lobortis pretium erat enim.Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum
              curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est
              euismod enim lobortis pretium erat enim.
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
