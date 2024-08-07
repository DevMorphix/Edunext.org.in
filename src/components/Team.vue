<template>
  <div>
    <TeamMobile v-if="isMobile" :dummyData="dummyData" />
    <div v-else>
      <!-- Existing desktop code goes here -->
      <div class="pl-12 flex flex-col sm:flex-row justify-center mb-10">
        <div
          v-for="(item, index) in dummyData"
          :key="item.id"
          :style="{ 'margin-bottom': getMarginBottom(index) }"
          class="w-64 h-48 relative md:-mx-6 md:my-10 my-32 cursor-pointer"
          
          @mouseover="showDetails(item)"
        >
          <div class="rounded-lg overflow-hidden">
            <div
              :class="[
                'img-container',
                expandedImageId === item.id ? 'expanded' : '',
                expandedImageId === item.id ? 'animate-expand' : 'animate-shrink',
              ]"
            >
              <img class="object-cover" :src="item.imageUrl" :alt="item.title" />
            </div>
            <div
              v-if="isMobile && expandedItems.includes(item.id)"
              class="bg-white px-4 py-2 animate-slide-down"
            >
              <p class="text-sm">{{ item.description }}</p>
              <h5 class="mt-2 text-sm font-medium">{{ item.title }}</h5>
            </div>
            <div v-else class="absolute inset-0 flex pl-2 mt-4 w-32">
              <h5 class="text-xs tracking-tight text-white mt-56">{{ item.title }}</h5>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selectedItem" class="md:mt-20 md:ml-6 animate-slide-up">
        <a
          class="flex flex-col items-center bg-blue-100 border rounded-lg border-gray-200 shadow md:flex-row md:max-w-5xl hover:bg-blue-200 dark:border-gray-700 dark:bg-gray-800"
        >
          <img
            class="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            :src="selectedItem.imageUrl"
            :alt="selectedItem.title"
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <p class="-mt-9 ml-5 font-normal text-blue-700 font-semibold dark:text-gray-400">
              {{ selectedItem.description }}
            </p>
            <div class="ml-5 mt-10">
              <h3 class="text-lg font-bold tracking-tight text-gray-900">{{ selectedItem.name }}</h3>
              <h5 class="text-sm font-normal tracking-tight text-gray-900 dark:text-white">
                {{ selectedItem.title }}
              </h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TeamMobile from '@/components/TeamMobile.vue';

export default {
  components: {
    TeamMobile
  },
  data() {
    return {
      dummyData: [
        {
          id: 1,
          name: "Nikhil T Das",
          imageUrl: "/assets/team/AI.png",
          title: "Director and policy Maker",
          description: "We launched our community in 2022 as a program where our volunteer conduct interactive sessions for school children, emphasizing experiential learning and application oriented learning activities. When kids shows interest in astronomy? What should we do. Definitely give them a telescope not a thick book of general relativity.",
        },
        {
          id: 2,
          name: "Devika Anil",
          imageUrl: "/assets/team/AI.png",
          title: "Strategy and curriculum planner",
          description: "It’s clear for us to adopt practical learning methodologies during the initial phases of this community. We set a barrier for designing the curriculum and follow the steps of experiential learning. It is not the environment or society by itself that pulls these kids down, another factor is the inexplicably low expectations that most of us have from them.",
        },
        {
          id: 3,
          name: "Badhusha Shaji",
          imageUrl: "/assets/team/AI.png",
          title: "Public relations and Outreach lead",
          description: "The social cause we’re belonging for the children of India is to create an equitable world. It’s our mission is to create a equitable world where every can dream and believe in that dream. Through innovative programs, partnerships, and advocacy efforts, we strive to create a world where every child has the tools they need to thrive and succeed. ",
        },
        {
          id: 4,
          name: "Abhishek V Gopal",
          imageUrl: "/assets/team/AI.png",
          title: "Talent acquisition and operations lead",
          description: "Our mission is clear, to provide equitable and inclusive education opportunities to all, especially those marginalized and underserved. Through innovative programs, partnerships, and advocacy efforts, we strive to create a world where every child has the tools they need to thrive and succeed. Every child deserves access to quality education, regardless of their background or circumstances.",
        },
        {
          id: 5,
          name: "Arjun A Acharry",
          imageUrl: "/assets/team/AI.png",
          title: "Design and Community management lead",
          description: "In India, millions of children still face barriers to education due to poverty, gender discrimination, and lack of resources. Our mission is to break down these barriers and create a more equitable and inclusive educational landscape. Through our various programs, we strive to provide not only academic support but also holistic development for the children we serve.",
        },
      ],
      selectedItem: null,
      isMobile: false,
      expandedItems: [],
      dropdownHeight: 0,
      expandedImageId: null,
    };
  },
  methods: {
    toggleDetails(item) {
      this.selectedItem = this.selectedItem === item ? null : item;
      if (this.isMobile) {
        const itemIndex = this.expandedItems.indexOf(item.id);
        if (itemIndex === -1) {
          this.expandedItems.push(item.id);
          this.dropdownHeight = 70;
        } else {
          this.expandedItems.splice(itemIndex, 1);
          this.dropdownHeight = 100;
        }
      }
    },
    showDetails(item) {
      this.selectedItem = item;
    },
    hideDetails() {
      this.selectedItem = null;
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768;
    },
    getMarginBottom(index) {
      if (this.isMobile) {
        const openIndex = this.expandedItems.indexOf(this.dummyData[index].id);
        if (openIndex === -1) {
          return `${this.dropdownHeight * (openIndex + 1)}px`;
        } else {
          return `${this.dropdownHeight * openIndex}px`;
        }
      }
      return '100px';
    },
    toggleImageExpansion(itemId)
    {
 this.expandedImageId = this.expandedImageId === itemId ? null : itemId;
},
},
mounted() {
 this.checkScreenSize();
 window.addEventListener("resize", this.checkScreenSize);
},
beforeUnmount() {
 window.removeEventListener("resize", this.checkScreenSize);
},
};
</script>

<style scoped>
.img-container {
 transition: all 0.3s ease;
}

.expanded {
 width: 100%;
 height: 100%;
 position: fixed;
 top: 0;
 left: 0;
 z-index: 999;
 background-color: rgba(0, 0, 0, 0.8);
 display: flex;
 justify-content: center;
 align-items: center;
}

.expanded img {
 max-width: 90%;
 max-height: 90%;
 object-fit: contain;
}

.animate-expand {
 animation: expand 0.3s ease-out;
}

.animate-shrink {
 animation: shrink 0.3s ease-out;
}

.animate-slide-up {
 animation: slide-up 0.3s ease-out;
}

.animate-slide-down {
 animation: slide-down 0.3s ease-out;
}

@keyframes expand {
 0% {
   transform: scale(1);
 }
 100% {
   transform: scale(1.2);
 }
}

@keyframes shrink {
 0% {
   transform: scale(1.2);
 }
 100% {
   transform: scale(1);
 }
}

@keyframes slide-up {
 0% {
   transform: translateY(100%);
   opacity: 0;
 }
 100% {
   transform: translateY(0);
   opacity: 1;
 }
}

@keyframes slide-down {
 0% {
   transform: translateY(-100%);
   opacity: 0;
 }
 100% {
   transform: translateY(0);
   opacity: 1;
 }
}
</style>