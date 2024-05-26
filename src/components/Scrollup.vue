<template>
    <div id="scrollUpButton" class="fixed bottom-4 right-4 z-50" :class="{ hidden: !showButton }">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full animate-sight"
        @click="scrollToTop"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.showButton = window.pageYOffset > 200;
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }
  </script>
  
  <style scoped>
  #scrollUpButton button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  
  #scrollUpButton button:hover {
    transform: scale(1.1);
  }
  
  #scrollUpButton button svg {
    animation: moveUpDown 1s infinite alternate;
  }
  
  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  
  .animate-sight {
    animation: sight 1s infinite alternate;
  }
  
  @keyframes sight {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
  </style>