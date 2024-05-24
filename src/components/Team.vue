<template>
    <div class="pl-12 flex flex-col sm:flex-row justify-center mb-10">
      <div
        v-for="item in dummyData"
        :key="item.id"
        class="w-64 h-48 relative md:-mx-6 my-14 cursor-pointer"
        @click="showDetails(item)"
      >
        <div class="rounded-lg overflow-hidden">
          <img class="object-cover" :src="item.imageUrl" :alt="item.title" />
          <div
            v-if="isMobile && selectedItem === item"
            class="absolute inset-0 bg-black bg-opacity-50 flex -mb-24 mb-2 rounded-xl items-center justify-center"
          >
            <div class="text-white text-center">
              <h5 class="text-lg font-bold mb-2">{{ item.title }}</h5>
              <p class="text-sm">{{ item.description }}</p>
            </div>
          </div>
          <div v-else class="absolute inset-0 flex pl-2 mt-4 w-32">
            <h5 class="text-xs tracking-tight text-white mt-56">{{ item.title }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isMobile && selectedItem" class="md:mt-32 md:ml-6">
      <a
        href="#"
        class="flex flex-col items-center bg-white border rounded-lg border-gray-200 shadow md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          :src="selectedItem.imageUrl"
          :alt="selectedItem.title"
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ selectedItem.title }}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ selectedItem.description }}
          </p>
        </div>
      </a>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        dummyData: [
          {
            id: 1,
            imageUrl: '/assets/team/AI.png',
            title: 'Noteworthy technology acquisitions 2021',
            description: 'Details about noteworthy technology acquisitions in 2021.',
          },
          {
            id: 2,
            imageUrl: '/assets/team/AI.png',
            title: 'Top AI breakthroughs in 2021',
            description: 'Details about top AI breakthroughs in 2021.',
          },
          {
            id: 3,
            imageUrl: '/assets/team/AI.png',
            title: 'Emerging tech trends in 2021',
            description: 'Lorem ipsum dolor sit amet consectetur. Odio magna mattis habitant nunc. Quis duis sagittis mi integer diam imperdiet arcu lectus. Tellus feugiat lorem enim vulputate urna. Sed id enim ornare mi mauris. Vel enim mauris lobortis lorem. Sed lorem id arcu nulla ultrices mauris risus integer. Volutpat id enim tortor venenatis sollicitudin amet turpis..',
          },
          {
            id: 4,
            imageUrl: '/assets/team/AI.png',
            title: 'AI and healthcare in 2021',
            description: 'Details about the impact of AI on healthcare in 2021.',
          },
          {
            id: 5,
            imageUrl: '/assets/team/AI.png',
            title: 'AI in finance and banking in 2021',
            description: 'Details about the use of AI in finance and banking in 2021.',
          },
        ],
        selectedItem: null,
        isMobile: false,
      };
    },
    methods: {
      showDetails(item) {
        this.selectedItem = item;
      },
      closeDetails() {
        this.selectedItem = null;
      },
      checkScreenSize() {
        this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
      },
    },
    mounted() {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkScreenSize);
    },
  };
  </script>