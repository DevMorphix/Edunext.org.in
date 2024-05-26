<template>
    <div class="container px-5 md:px-28">
      <div class="video-wrapper flex justify-center mb-8">
        <div class="">
         
          <div class="aspect-w-16 aspect-h-9">
  <iframe
    class="object-cover rounded-lg"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/iptmAM2k7PQ"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>


          <!-- <div class="aspect-w-16 aspect-h-9">
            <video controls class="object-cover rounded-lg">
              <source src="https://www.youtube.com/watch?v=iptmAM2k7PQ" type="video/mp4" />
            </video>
          </div> -->
        </div>
      </div>
      <p class="text-lightblack font-semibold px-0 py-10 md:px-0 mx-auto text-justify">
        In 2022, we started our journey as a teaching community we do have a
        vision of empowering underprivileged kids to the mainstream forum and make
        them possible to aspire their dream and make them to believe in that
        dream. It was not an easy journey as it is described. <br />
        Along the way, we encountered numerous challenges and setbacks, but each
        obstacle only strengthened our resolve to press forward. We learned to
        adapt and innovate, finding creative solutions to address the unique needs
        of each school and its students. And as we navigated the ups and downs of
        our journey, we forged deep bonds with the communities we served, earning
        their trust and gratitude through our unwavering commitment to their
        children's futures.
      </p>
      <div v-if="deviceName === 'phone'">
        <ol class="relative border-s border-dashed border-blue-800 dark:border-blue-600">
          <li class="mb-10 ms-6">
            <span
              class="ml-1 mt-1 absolute flex items-center justify-center w-4 h-4 bg-[#1D2E5C] rounded-full -start-3 ring-4 ring-white dark:ring-gray-900"
            >
              <svg
                class="text-mainblue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <circle cx="10" cy="10" r="10" />
              </svg>
            </span>
            <h3
              class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              2021
            </h3>
        
        <p
          class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
        >
        Initial discussions to build teaching community among college students to use the potential of human resource
        </p>

      </li>
      <li class="mb-10 ms-6">
        <span
          class="ml-1 mt-1 absolute flex items-center justify-center w-4 h-4 bg-[#1D2E5C] rounded-full -start-3 ring-4 ring-white dark:ring-gray-900"
        >
          <svg
            class="text-mainblue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="10" />
          </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          2022
        </h3>
       
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Launched as a teaching community
        </p>
      </li>
      <li class="mb-10 ms-6">
        <span
          class="ml-1 mt-1 absolute flex items-center justify-center w-4 h-4 bg-[#1D2E5C] rounded-full -start-3 ring-4 ring-white dark:ring-gray-900"
        >
          <svg
            class="text-mainblue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="10" />
          </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          2023
        </h3>
       
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Completed 50+ workshops in various schools
        </p>
      </li>
      <li class="ms-6">
        <span
          class="ml-1 mt-1 absolute flex items-center justify-center w-4 h-4 bg-[#1D2E5C] rounded-full -start-3 ring-4 ring-white dark:ring-gray-900"
        >
          <svg
            class="text-mainblue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="10" />
          </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          2024
        </h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Associated with various schools as a student community
        </p>
      </li>
    </ol>
      </div>
      <div v-if="deviceName === 'desktop'" class="" >
        <img src="/assets/TimeLine.svg" alt="Desktop Image" class=" mt-10 mx-auto rounded-lg" />
      </div>
      <p class="  text-lightblack font-semibold px-0 py-10 md:px-0 mx-auto text-justify">
        We saw once-shy students blossom into confident leaders, eager to make their mark on the world. We watched as academic performance improved, dropout rates declined, and aspirations soared to new heights. And while the road ahead remains challenging, we take pride in knowing that we have made a tangible difference in the lives of many children, as well as many families, empowering them to break free from the cycle of poverty and reach for their dreams with unwavering determination.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutUs",
    data() {
      return {
        deviceName: '',
      };
    },
    mounted() {
      this.checkDevice();
    },
    methods: {
      checkDevice() {
        const userAgent = navigator.userAgent || navigator.vendor;
        const isPhone = /iPhone|iPad|iPod|Android/i.test(userAgent);
        const isTablet = /iPad/i.test(userAgent);
        this.deviceName = isPhone ? "phone" : isTablet ? "tablet" : "desktop";
        console.log(`You are using a ${this.deviceName}`);
      },
    },
  };
  </script>
  