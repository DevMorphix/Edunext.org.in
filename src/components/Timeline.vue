<template>
    <div class="relative">
      <div class="flex justify-between items-start">
        <div v-for="(item, index) in timeline" :key="index" class="flex-1">
          <div class="flex flex-col items-center">
            <span class="text-lg font-bold mb-2">{{ item.year }}</span>
            <div
              class="bg-white border-2 border-blue-500 py-1 px-3 rounded-full flex items-center justify-center w-8 h-8 relative z-10 cursor-pointer"
              @click="toggleSelection(index)"
            >
              <transition name="scale">
                <div
                  v-if="selectedIndex === index"
                  class="bg-blue-500 w-full h-full rounded-full animate-pulse"
                ></div>
              </transition>
            </div>
            <div
              v-if="index !== timeline.length - 1"
              class="h-px w-full bg-blue-500 absolute top-1/2 translate-y-1/2 left-0 right-0 z-0 transition-all duration-300"
              :class="{ 'animate-line': selectedIndex === index }"
            ></div>
          </div>
          <p class="text-center mt-4">{{ item.text }}</p>
        </div>
      </div>
      <div v-if="selectedIndex !== null" class="mt-8 flex justify-between">

      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        timeline: [
          {
            year: '2021',
            text: 'Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur.',
          },
          {
            year: '2022',
            text: 'Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur.',
          },
          {
            year: '2023',
            text: 'Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur.',
          },
        ],
        selectedIndex: null,
      };
    },
    methods: {
      toggleSelection(index) {
        if (this.selectedIndex === index) {
          this.selectedIndex = null;
        } else {
          this.selectedIndex = index;
        }
      },
    },
  };
  </script>
  
  <style>
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.3s ease;
  }
  .scale-enter,
  .scale-leave-to {
    transform: scale(0);
  }
  .animate-pulse {
    animation: pulse 1s infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  .animate-line {
    animation: line-animation 0.5s ease-in-out infinite;
  }
  @keyframes line-animation {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
  </style>