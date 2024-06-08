<template>
    <navbar />
    <div class="container mx-auto p-4 ">
      <div class="bg-white rounded-lg shadow-md p-6 max-w-screen-lg	" >
        <Bar :data="chartData" :options="chartOptions" />
      </div>
    </div>
    <FooterComponent />
  </template>


<script>
import navbar from "@/components/reuse/Navbar.vue";
import FooterComponent from "@/components/reuse/Footer.vue";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'MyChart',
  components: {
    Bar,
    navbar,
    FooterComponent,
  },
  data() {
  return {
    chartData: {
      labels: ['Skill Acquisition', 'Networking', 'Personal Growth', 'Cultural Awareness', 'Creativity and Innovation'],
      datasets: [
        {
          label: 'My Data',
          data: [12.2, 23.5, 32.5, 43.3, 55.5],
          backgroundColor: ['orange', 'pink', 'violet', 'purple', 'purple'],
        }
      ]
    },
    chartOptions: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
}
}
</script>