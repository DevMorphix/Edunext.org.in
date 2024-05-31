<template>
  <ol class="relative border-l-4 border-dashed border-blue-800 dark:border-blue-600 p-4 animate-line">
    <li
      class="mb-4 ml-6"
      v-for="(event, index) in events"
      :key="index"
      data-aos="fade-up"
      :data-aos-delay="index * 200"
    >
      <span
        class="line -ml-9 mt-2 absolute flex items-center justify-center w-4 h-4 bg-[#1D2E5C] rounded-full -start-3 ring-4 ring-white dark:ring-gray-900"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="line-animation"></div>
      </span>
      <div data-aos="fade-right" data-aos-delay="400">
        <h3 class="flex items-center mb-1 -ml-4 text-lg font-semibold text-gray-900 dark:text-white">
          {{ event.year }}
        </h3>
        <p class="event-description text-base -ml-4 font-normal text-gray-500 dark:text-gray-400">
          {{ event.description }}
        </p>
      </div>
    </li>
  </ol>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'Timeline',
  data() {
    return {
      events: [
        {
          year: '2021',
          description: 'Initial discussions to build teaching community among college students to use the potential of human resource',
        },
        {
          year: '2022',
          description: 'Launched as a teaching community',
        },
        {
          year: '2023',
          description: 'Completed 50+ workshops in various schools',
        },
        {
          year: '2024',
          description: 'Associated with various schools as a student community',
        },
      ],
    };
  },
  mounted() {
    AOS.init({
      once: false,
    });
  },
};
</script>

<style scoped>
.aos-animate {
  transition-property: transform, opacity;
  transition-duration: 1s;
  transition-timing-function: ease;
}

@media (prefers-reduced-motion) {
  .aos-animate {
    transition: none;
  }
}

.aos-init .line {
  opacity: 0;
  transform: translateY(100%);
}

.aos-animate .line {
  opacity: 1;
  transform: translateY(0);
}

.aos-init div {
  opacity: 0;
  transform: translateX(100%);
}

.aos-animate div {
  opacity: 1;
  transform: translateX(0);
}

.line-animation {
  width: 20px;
  height: 2px;
  background-color: #1D2E5C;
  position: relative;
  animation: lineAnimation 2s infinite;
}

@keyframes lineAnimation {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-line {
  position: relative;
}

.animate-line::before {
  content: '';
  position: absolute;
  left: -4px;
  top: 0;
  width: 4px;
  height: 100%;
  background-image: linear-gradient(to bottom, transparent 50%, #2563eb 50%);
  background-size: 100% 20px;
  animation: moveLineDown 4s infinite linear;
}

@keyframes moveLineDown {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 calc(100% + 20px);
  }
}
</style>