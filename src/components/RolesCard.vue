<template>
  <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.name }}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400" :class="{ 'truncate': !isExpanded }">{{ item.description }} <br><br></p>
    <ul v-if="isExpanded">
      <template v-for="x in item.responsability">
        <li>{{ x }}</li>
      </template>
      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white">{{ item.sesecondheading }}</h5>
      <template v-for="y in item.secondresponsability">
        <li>{{ y }}</li>
      </template>
    </ul>
    <button
      v-if="!isExpanded && item.description.length > 100"
      @click="isExpanded = true"
      class="mt-2 text-blue-600 hover:text-blue-800 font-medium"
    >
      Read More
    </button>
    <button
      v-else-if="isExpanded"
      @click="isExpanded = false"
      class="mt-2 text-blue-600 hover:text-blue-800 font-medium"
    >
      Read Less
    </button>
  </a>
</template>

<script>
export default {
  name: 'RolesCard',
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isExpanded: false
    }
  }
}
</script>