<template>
    <div class="container px-5 md:px-28">
      <div class="video-wrapper flex justify-center mb-8">
        <div class="">
          <div class="aspect-w-16 aspect-h-9">
            <video controls class="object-cover rounded-lg">
              <source src="/assets/dummy.mp4" type="video/mp4" />
            </video>
          </div>
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
        <ol class="relative border-s border-gray-200 dark:border-gray-700">
          <li class="mb-10 ms-6">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3
              class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Flowbite Application UI v2.0.0
              <span
                class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3"
                >Latest</span
              >
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >Released on January 13th, 2022</time
            >
            <p
              class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
            >
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing pages.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              ><svg
                class="w-3.5 h-3.5 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"
                />
                <path
                  d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                />
              </svg>
              Download ZIP</a
            >
          </li>
          <li class="mb-10 ms-6">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Figma v1.3.0
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >Released on December 7th, 2021</time
            >
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li class="ms-6">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Flowbite Library v1.2.2
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >Released on December 2nd, 2021</time
            >
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </div>
      <div v-if="deviceName === 'desktop'" class="" >
        <img src="/assets/TimeLine.svg" alt="Desktop Image" class=" mt-10 mx-auto rounded-lg" />
      </div>
      <p class="text-lightblack font-semibold px-0 py-10 md:px-0 mx-auto text-justify">
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
  