<template>
    <Navbar />
    <div class="px-12">
        <div class="grid grid-cols-4 px-7">
            <div class="flex justify-center items-center"><img src="/assets/Experience/Rectangle 76.png" alt=""></div>
            <div class="flex justify-center items-center"><img src="/assets/Experience/Rectangle 77.png" alt=""></div>
            <div class="flex justify-center items-center"><img src="/assets/Experience/Rectangle 78.png" alt=""></div>
            <div class="flex justify-center items-center"><img src="/assets/Experience/Rectangle 79.png" alt=""></div>
        </div>
        <section class="bg-white dark:bg-gray-900 antialiased mt-8 md:mt-0 lg:mt-0 xl:mt-0">
            <div class="max-w-screen-xl mx-auto ">
                <h2
                    class="text-3xl font-semibold leading-tight tracking-tight text-sky-950	 sm:text-4xl dark:text-white">
                    The Experiences.
                </h2>
                <p class="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices
                    mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim
                    lobortis pretium erat enim. Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat
                    condimentum curabitur. Eu ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo
                    amet duis. Proin est euismod enim lobortis pretium erat enim. Lorem ipsum dolor sit amet
                    consectetur. Eget vulputate volutpat condimentum curabitur. Eu ultrices mattis sagittis scelerisque
                    sit viverra. Nullam est mi commodo amet duis. Proin est euismod enim lobortis pretium erat
                    enim.Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur. Eu
                    ultrices mattis sagittis scelerisque sit viverra. Nullam est mi commodo amet duis. Proin est euismod
                    enim lobortis pretium erat enim.
                </p>
            </div>
        </section>
        
    </div>
    <Footer />
</template>
<script>
import Navbar from '@/components/reuse/Navbar.vue';
import Footer from '@/components/reuse/Footer.vue';


export default {
  name: 'ExperienceView',
  components: {
    Navbar,
    Footer,
  }
};
</script>
