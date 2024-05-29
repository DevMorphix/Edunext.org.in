<template>
    <Navbar class="mb-10" />

    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Roles and Responsibilities</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">Edunext community is an non-profit initiative by a team of young passionate students to bridge the educational gap between students in India. Here are the key roles and responsibilities of team members for the smooth functioning of the community. We firmly believe that one day we will attain educational equity. 
            <p class="text-gray-500 sm:text-xl dark:text-gray-400 pt-1">As we mentioned before this is an NGO, We’re not aiming to attain large profit figtures. Our motto is to bring educational equity among students to dream big and to pursue that dream.</p>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400 pt-1">The following are the roles and responsibilities of various positions:</p>
          </p>
      </div>
      <!-- Card want to be added -->
  </div>
</section>

    <Footer />

</template>

<script>
import Navbar from '@/components/reuse/Navbar.vue';
import Footer from '@/components/reuse/Footer.vue';



export default {
    name: 'Roles',
    components: {
        Navbar,
        Footer
    }
}
</script>