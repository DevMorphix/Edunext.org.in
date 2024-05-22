<template>
    <div class="relative">
      <div class="flex justify-between items-start">
        <div v-for="(item, index) in timeline" :key="index" class="flex-1">
          <div class="flex items-center justify-center relative">
            <div
              class="bg-blue-500 text-white py-2 px-4 rounded-full flex items-center justify-center w-12 h-12 relative z-10"
            >
              <span class="text-lg font-bold">{{ item.year }}</span>
            </div>
            <div
              v-if="index !== timeline.length - 1"
              class="h-px w-full bg-blue-500 absolute top-1/2 left-0 -translate-y-1/2"
            ></div>
            <div
              v-if="index !== 0"
              class="h-px w-full bg-blue-500 absolute top-1/2 right-0 -translate-y-1/2"
            ></div>
          </div>
          <p class="text-center mt-4">{{ item.text }}</p>
        </div>
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
          {
            year: '2024',
            text: 'Lorem ipsum dolor sit amet consectetur. Eget vulputate volutpat condimentum curabitur.',
          },
        ],
      }
    },
  }
  </script>