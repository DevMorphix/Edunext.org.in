<template>
  <div class="pl-12 flex flex-col sm:flex-row justify-center mb-10">
    <div
      v-for="item in dummyData"
      :key="item.id"
      class="w-64 h-48 relative md:-mx-6 my-5 cursor-pointer"
      @click="showDetails(item)"
    >
      <div class="rounded-lg overflow-hidden">
        <img class="object-cover" :src="item.imageUrl" :alt="item.title" />
        <div
          v-if="isMobile && selectedItem === item"
          class="absolute inset-0 bg-black bg-opacity-50 flex -mb-24  rounded-xl items-center justify-center"
        >
          <div class="text-white text-center">
            <p class="text-sm">{{ item.description }}</p>
            <h5 class="mt-10 text-sm font-medium mb-2">{{ item.title }}</h5>
          </div>
        </div>
        <div v-else class="absolute inset-0 flex pl-2 mt-4 w-32">
          <h5 class="text-xs tracking-tight text-white mt-56">{{ item.title }}</h5>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!isMobile && selectedItem" class="md:mt-20 md:ml-6 ">
    <a
      
      class="flex flex-col items-center bg-blue-100 border  rounded-lg border-gray-200 shadow md:flex-row md:max-w-5xl hover:bg-blue-200 dark:border-gray-700 dark:bg-gray-800 "
    >
      <img
        class="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        :src="selectedItem.imageUrl"
        :alt="selectedItem.title"
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <p class=" -mt-9 ml-5 font-normal text-blue-700 font-semibold dark:text-gray-400">
          {{ selectedItem.description }}
        </p>
        <div class="ml-5 mt-10">
          <h3 class=" text-lg font-bold tracking-tight text-gray-900 ">{{ selectedItem.name }}</h3>
          <h5 class=" text-sm font-normal tracking-tight text-gray-900 dark:text-white">
            {{ selectedItem.title }}
          </h5>
        </div>
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
          name: "NikHil T Das",
          imageUrl: '/assets/team/AI.png',
          title: 'Director and policy Maker',
          description: 'Lorem ipsum dolor sit amet consectetur. Odio magna mattis habitant nunc. Quis duis sagittis mi integer diam imperdiet arcu lectus. Tellus feugiat lorem enim vulputate urna. Sed id enim ornare mi mauris. Vel enim mauris lobortis lorem. Sed lorem id arcu nulla ultrices mauris risus integer. Volutpat id enim tortor venenatis sollicitudin amet turpis.',
        },
        {
          id: 2,
          name: "Devika Anil",
          imageUrl: '/assets/team/AI.png',
          title: 'Strategy and curriculum planner',
          description: 'Lorem ipsum dolor sit amet consectetur. Odio magna mattis habitant nunc. Quis duis sagittis mi integer diam imperdiet arcu lectus. Tellus feugiat lorem enim vulputate urna. Sed id enim ornare mi mauris. Vel enim mauris lobortis lorem. Sed lorem id arcu nulla ultrices mauris risus integer. Volutpat id enim tortor venenatis sollicitudin amet turpis.',
        },
        {
          id: 3,
          name: "Badhusha Shaji",
          imageUrl: '/assets/team/AI.png',
          title: 'Public relations and Outreach lead',
          description: 'Lorem ipsum dolor sit amet consectetur. Odio magna mattis habitant nunc. Quis duis sagittis mi integer diam imperdiet arcu lectus. Tellus feugiat lorem enim vulputate urna. Sed id enim ornare mi mauris. Vel enim mauris lobortis lorem. Sed lorem id arcu nulla ultrices mauris risus integer. Volutpat id enim tortor venenatis sollicitudin amet turpis..',
        },
        {
          id: 4,
          name: "Abhishek V Gopal",
          imageUrl: '/assets/team/AI.png',
          title: 'Talent acquisition and operations lead',
          description: 'Lorem ipsum dolor sit amet consectetur. Odio magna mattis habitant nunc. Quis duis sagittis mi integer diam imperdiet arcu lectus. Tellus feugiat lorem enim vulputate urna. Sed id enim ornare mi mauris. Vel enim mauris lobortis lorem. Sed lorem id arcu nulla ultrices mauris risus integer. Volutpat id enim tortor venenatis sollicitudin amet turpis.',
        },
        {
          id: 5,
          name: "Arjun A Acharry",
          imageUrl: '/assets/team/AI.png',
          title: 'Design and Community management lead',
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