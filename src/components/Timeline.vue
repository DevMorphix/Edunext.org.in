<template>
  <ol class="relative border-s border-dashed border-blue-800 dark:border-blue-600 p-4">
    <li class="mb-4 ms-6 -ml-1" data-aos="fade-up" v-for="(event, index) in events" :key="index">
      <span class="-ml-2 mt-2 absolute flex items-center justify-center w-4 h-4 bg-[#1D2E5C] rounded-full -start-3 ring-4 ring-white dark:ring-gray-900">
        <svg class="text-mainblue" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="10" />
        </svg>
      </span>
      <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white" data-aos="fade-up">
        {{ event.year }}
      </h3>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400" data-aos="fade-up">
        {{ event.description }}
      </p>
    </li>
  </ol>
</template>

<script>
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
};
</script>

<style scoped>
/* Add any necessary styles */
</style>
