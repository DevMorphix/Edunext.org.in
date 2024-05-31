<template>
  <div class="container px-5 md:px-28">
    <div class="video-wrapper flex justify-center mb-8" data-aos="fade-up">
      <div>
        <div class="aspect-w-16 aspect-h-9">
          <video controls class="object-cover rounded-lg">
            <source src="/assets/dummy.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    
    <p class="text-lightblack font-semibold px-0 py-10 md:px-0 mx-auto text-justify" data-aos="fade-up">
      In 2022, we started our journey as a teaching community we do have a vision of empowering underprivileged kids to the mainstream forum and make them possible to aspire their dream and make them to believe in that dream. It was not an easy journey as it is described. <br />
      Along the way, we encountered numerous challenges and setbacks, but each obstacle only strengthened our resolve to press forward. We learned to adapt and innovate, finding creative solutions to address the unique needs of each school and its students. And as we navigated the ups and downs of our journey, we forged deep bonds with the communities we served, earning their trust and gratitude through our unwavering commitment to their children's futures.
    </p>
    
    <p class="text-lightblack font-semibold md:mb-10 px-0 py-10 md:px-0 mx-auto text-justify" data-aos="fade-up">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>

    <div v-if="deviceName === 'phone'" data-aos="fade-up">
      <Timeline />
    </div>
    <div v-if="deviceName === 'desktop'" class="">
      <VerticalSShape />
      <testi />
    </div>
    
    <p class="md:mt-96 pt-32 text-lightblack font-semibold px-0 py-10 md:px-0 mx-auto text-justify" data-aos="fade-up">
      We saw once-shy students blossom into confident leaders, eager to make their mark on the world. We watched as academic performance improved, dropout rates declined, and aspirations soared to new heights. And while the road ahead remains challenging, we take pride in knowing that we have made a tangible difference in the lives of many children, as well as many families, empowering them to break free from the cycle of poverty and reach for their dreams with unwavering determination.
    </p>
  </div>
</template>

<script>
import testi from '@/components/testi.vue';
import Timeline from '@/components/Timeline.vue';
import VerticalSShape from '@/components/VerticalSShape.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: "AboutUs",
  components: {
    testi,
    Timeline,
    VerticalSShape,
  },
  data() {
    return {
      deviceName: '',
    };
  },
  mounted() {
    this.checkDevice();
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

    window.addEventListener('resize', this.checkDevice);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkDevice);
  },
  methods: {
    checkDevice() {
      const width = window.innerWidth;
      this.deviceName = width >= 1024 ? 'desktop' : 'phone';
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles */
</style>
