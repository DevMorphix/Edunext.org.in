<template>
  <Navbar />
  <div class="relative mt-10 py-8">
    <div class="flex justify-between items-center mx-auto max-w-2xl">
      <div
        class="absolute top-12 mt-1 left-0 right-0 z-0"
        :style="{ left: `${buttonDiameter / 2}px`, right: `${buttonDiameter / 2}px` }"
      >
        <div class="w-full h-0.5 bg-gray-300 mt-4"></div>
      </div>
      <div
        v-for="(item, index) in timeline"
        :key="index"
        class="flex-1 flex flex-col items-center relative"
      >
        <span class="text-xs font-semibold mb-2">{{ item.title }}</span>
        <div
          class="bg-white border-2 border-blue-500 rounded-full flex items-center justify-center w-6 h-6 relative z-10 cursor-pointer transition-all duration-300 transform hover:scale-110"
          :class="{ 'bg-blue-500 text-white': selectedIndex === index }"
          @click="toggleSelection(index)"
        ></div>
      </div>
    </div>
    <div v-if="selectedIndex !== null" class="mt-8 flex justify-center">
      <div v-if="selectedIndex === 0">
        <aboutus/>
      </div>
      <div v-else-if="selectedIndex === 1">
        <team/>
      </div>
      <div v-else-if="selectedIndex === 2">
        <support/>
      </div>
    </div>
  </div>
  <FooterComponent/>
  <scroll/>
</template>

<script>
import Navbar from '@/components/reuse/Navbar.vue';
import FooterComponent from '@/components/reuse/Footer.vue';
import aboutus from '@/components/Aboutus.vue';
import team from '@/components/Team.vue';
import support from '@/components/Support.vue';
import scroll from '@/components/Scrollup.vue';

export default {
  components: {
    Navbar,
    aboutus,
    FooterComponent,
    scroll,
    team,
    support
  }
  ,
  data() {
    return {
      timeline: [
        { title: 'About Us' },
        { title: 'Our Team' },
        { title: 'Supporters' },
      ],
      selectedIndex: 0,
      buttonDiameter: 24,
    };
  },
  methods: {
    toggleSelection(index) {
      this.selectedIndex = this.selectedIndex === index ? null : index;
    },
  },
};
</script>

<style>
/* Style for the connecting line */
.w-full {
  background-color: #cbd5e0;
  height: 0.125rem; /* 2px */
}
.bg-blue-500 {
  background-color: #4299e1;
}
.bg-gray-300 {
  background-color: #e2e8f0;
}
.bg-white {
  background-color: #ffffff;
}
.z-10 {
  z-index: 10;
}
/* Circle Button Styles */
.bg-white {
  background-color: #ffffff;
}
.border-blue-500 {
  border-color: #4299e1;
}
.bg-blue-500 {
  background-color: #4299e1;
}
.text-white {
  color: #ffffff;
}
/* Hover and transition effects */
.cursor-pointer {
  cursor: pointer;
}
.transition-all {
  transition: all 0.3s ease-in-out;
}
.transform {
  transform: scale(1);
}
.hover\:scale-110:hover {
  transform: scale(1.1);
}
/* Description Section */
.mt-8 {
  margin-top: 2rem;
}
.flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.max-w-md {
  max-width: 28rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.bg-gray-100 {
  background-color: #f7fafc;
}
.rounded {
  border-radius: 0.25rem;
}
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>