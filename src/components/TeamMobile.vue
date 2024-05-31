<template>
    <div class="mobile-team-container" data-aos="fade-up">
      <div
        v-for="item in dummyData"
        :key="item.id"
        class="mobile-team-item"
        @click="selectItem(item)"
        data-aos="fade-up"
      >
        <div class="mobile-team-item-image" data-aos="fade-up">
          <img
            :src="item.imageUrl"
            :alt="item.title"
            :class="{ 'image-expanded': selectedItem === item }"
            data-aos="fade-up"
          />
          <div v-if="selectedItem !== item" class="mobile-team-item-info" data-aos="fade-up">
            <p class="mobile-team-item-title">{{ item.title }}</p>
          </div>
        </div>
        <div
          v-if="selectedItem === item"
          class="mobile-team-item-details"
          data-aos="fade-up"
        >
          <h5 class="mobile-team-item-title">{{ item.name }}</h5>
          <h5 class="mobile-team-item-title">{{ item.title }}</h5>
          <p class="mobile-team-item-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  export default {
    props: {
      dummyData: Array
    },
    data() {
      return {
        selectedItem: null
      };
    },
    methods: {
      selectItem(item) {
        this.selectedItem = this.selectedItem === item ? null : item;
      }
    },
    mounted() {
      AOS.init({
        duration: 1000, // duration of the animations in milliseconds
      });
    },
    updated() {
      AOS.refresh();
    }
  };
  </script>
  
  <style scoped>
  .mobile-team-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  
  .mobile-team-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;
  }
  
  .mobile-team-item-image {
    position: relative;
  }
  
  .mobile-team-item-image img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, width 0.3s, height 0.3s;
  }
  
  .mobile-team-item-image img.image-expanded {
    width: 150px;
    height: 150px;
  }
  
  .mobile-team-item-info {
    position: absolute;
    bottom: 8px;
    left: 8px;
    background: rgba(67, 66, 66, 0.6);
    color: rgb(244, 244, 244);
    padding: 4px 8px;
    border-radius: 4px;
    text-align: left;
  }
  
  .mobile-team-item-title {
    font-size: 14px;
    margin: 0;
  }
  
  .mobile-team-item-details {
    text-align: center;
    margin-top: 8px;
    animation: fade-in 0.3s ease-in-out;
  }
  
  .mobile-team-item-title {
    font-size: 16px;
    font-weight: bold;
  }
  
  .mobile-team-item-description {
    font-size: 14px;
    color: #555;
    text-align: justify;
    width:90%;
    margin-left: 20px;
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  