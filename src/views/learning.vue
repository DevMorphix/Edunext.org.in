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
        <img :src="image" alt="Image" class="object-cover h-60 w-60 " />
      </div>
    </div>

    <div class="flex font-extrabold text-5xl mb-5 mt-10 md:mt14 ml-2 md:ml-24 md:mt-10" data-aos="fade-up">
      Why do we <p class="text-blue-950 md:ml-3">choose the way</p>
    </div>

    <div class="text-justify md:w-10/12 md:ml-32 ml-4 mr-4 mt-3 mb-4 md:mb-14" data-aos="fade-up">
      <p>The journey from 2022 as a community of teaching volunteers has reached out us to many schools and educational institutions. The facts that we understood from interacting with the children is they’re capabilities are limitless. The system is limiting them from doing the things they want. We acknowledged the fact that when students have the permission and support to think differently, there’s no limit to what they can achieve. 
      </p>
      <p>Slowly but steadily, Seeds of Knowledge began to take root. They organized community outreach programs, set up makeshift classrooms in vacant spaces, and conducted digital literacy drives in remote villages. Every small victory fueled our determination to do more, to reach farther, to touch the lives of those who needed it most. With unwavering determination, we set out to make our vision a reality. We reached out to local communities, established partnerships with schools and businesses, and mobilized volunteers who shared their passion for education. Together, we created a network of support for disadvantaged children, offering them access to quality education, mentorship programs, and extracurricular activities.
      </p>
      <p>We usually started with workshops in electronics, IOT and programing, organizing debate workshops and writing competitions at the infant stage of the community. It’s a huge gratitude for us to know that has helped lot of students to realize their passion and interest in programing and computer hardware fields to pitch their career. But we’re still aware of the fact that they’ve to impart the necessary life skills along with the curriculum which our system usually lacks to do.  We imparted learning lessons of basic skills into our curriculum like sewing a button, rectifying small errors in a circuit  and etc.. This was our first step towards a change and creating a social impact model.
      </p>
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
        "./assets/gallery/IHRD.jpg",
        "./assets/gallery/IHRD (2).jpg",
        "./assets/gallery/IHRD (3).jpg",
        "./assets/gallery/IHRD (8).jpg",
        "./assets/gallery/IHRD (5).jpg",
        "./assets/gallery/IHRD (6).jpg",
        "./assets/gallery/IHRD (7).jpg",
        "./assets/gallery/RS.jpg",
        "./assets/gallery/SB.jpg",
        "./assets/gallery/SB (2).jpg",
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
