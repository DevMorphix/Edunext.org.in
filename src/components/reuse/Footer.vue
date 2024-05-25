<template>
  <footer class="bg-gray-800 text-white">
    <div class="container mx-auto px-4 py-8">
      <img src="/assets/Copy Claim.png" alt="Desktop Image" class="mb-5" />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-15">
        <div>
          <div class="flex space-x-8">
            <h4 class="text-lg text-gray-500 font-semibold mb-2 hover:text-white">We</h4>
            <h4 class="text-lg text-gray-500 font-semibold mb-2 hover:text-white">Redefine</h4>
            <h4 class="text-lg text-gray-500 font-semibold mb-2 hover:text-white">Learning</h4>
            <h4 class="text-lg text-gray-500 font-semibold mb-2 hover:text-white">Experiences</h4>
          </div>
        </div>
        <div class="flex justify-end items-center">
          <div class="flex space-x-2">
            <!-- LinkedIn SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" class="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 5.43 3.43 7 1.5 7 0.67 7 0 6.33 0 5.5S0.67 4 1.5 4C2.33 4 3 4.67 3 5.5c0 .19-.03.38-.09.56.25.02.49.06.72.12.09-.28.15-.57.15-.88C3.78 3.59 3.22 3 2.5 3S1.22 3.59 1.22 4.5 1.78 6 2.5 6C3.22 6 3.78 5.41 3.78 4.5c0-.33-.07-.65-.19-.94C4.18 3.32 4.58 3.5 4.98 3.5zM3.75 8H1.25V19H3.75V8zM18.5 8h-2.5v5.18c0 1.17-.42 2.07-1.58 2.07s-1.83-.91-1.83-2.08V8H10V19H12.5V14.33c0-.98.36-1.83 1.22-1.83.86 0 1.03.68 1.03 1.77V19H17.5V13.67C17.5 10.81 16.06 8 13.5 8z"/>
            </svg>

            <!-- Instagram SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.2c3.22 0 3.6.012 4.865.07 1.17.056 1.805.246 2.225.418.545.212.935.46 1.352.877.416.416.665.807.877 1.352.172.42.362 1.055.418 2.225.058 1.265.07 1.645.07 4.865s-.012 3.6-.07 4.865c-.056 1.17-.246 1.805-.418 2.225a4.111 4.111 0 0 1-.877 1.352c-.416.416-.807.665-1.352.877-.42.172-1.055.362-2.225.418-1.265.058-1.645.07-4.865.07s-3.6-.012-4.865-.07c-1.17-.056-1.805-.246-2.225-.418a4.111 4.111 0 0 1-1.352-.877c-.416-.416-.665-.807-.877-1.352-.172-.42-.362-1.055-.418-2.225C2.212 15.6 2.2 15.22 2.2 12s.012-3.6.07-4.865c.056-1.17.246-1.805.418-2.225a4.111 4.111 0 0 1 .877-1.352c.416-.416.807-.665 1.352-.877.42-.172 1.055-.362 2.225-.418C8.4 2.212 8.78 2.2 12 2.2m0-2.2C8.64 0 8.223.015 7.025.073 5.817.13 4.962.317 4.187.667c-.755.328-1.37.768-1.985 1.383a7.923 7.923 0 0 0-1.383 1.985c-.35.775-.537 1.63-.594 2.838C0 8.223 0 8.64 0 12s.015 3.777.073 4.975c.057 1.208.244 2.063.594 2.838.328.755.768 1.37 1.383 1.985a7.923 7.923 0 0 0 1.985 1.383c.775.35 1.63.537 2.838.594C8.223 24 8.64 24 12 24s3.777-.015 4.975-.073c1.208-.057 2.063-.244 2.838-.594.755-.328 1.37-.768 1.985-1.383a7.923 7.923 0 0 0 1.383-1.985c.35-.775.537-1.63.594-2.838.058-1.198.073-1.615.073-4.975s-.015-3.777-.073-4.975c-.057-1.208-.244-2.063-.594-2.838a7.923 7.923 0 0 0-1.383-1.985A7.923 7.923 0 0 0 19.838.667c-.775-.35-1.63-.537-2.838-.594C15.777.015 15.36 0 12 0zm0 5.8a6.2 6.2 0 1 0 6.2 6.2A6.208 6.208 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 4-4 4.004 4.004 0 0 1-4 4zm6.406-10.5a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z"/>
            </svg>

            <!-- YouTube SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" class="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.2c-.3-1.2-1.3-2.2-2.5-2.5C18.9 3.3 12 3.3 12 3.3s-6.9 0-8.9.4c-1.2.3-2.2 1.3-2.5 2.5C0 8.2 0 12 0 12s0 3.8.6 5.8c.3 1.2 1.3 2.2 2.5 2.5 2 1 8.9.4 8.9.4s6.9 0 8.9-.4c1.2-.3 2.2-1.3 2.5-2.5.6-2 .6-5.8.6-5.8s0-3.8-.6-5.8zM9.6 15.3v-6l6.2 3-6.2 3z"/>
            </svg>

            <!-- X (Twitter) SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" class="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.643 4.937c-.835.37-1.732.617-2.675.729a4.73 4.73 0 0 0 2.082-2.59 9.367 9.367 0 0 1-2.984 1.13 4.719 4.719 0 0 0-8.034 4.29 13.383 13.383 0 0 1-9.728-4.93 4.719 4.719 0 0 0 1.46 6.29A4.684 4.684 0 0 1 2 9.72v.06a4.717 4.717 0 0 0 3.779 4.62c-.413.112-.847.171-1.294.171-.317 0-.626-.03-.927-.088a4.721 4.721 0 0 0 4.407 3.275A9.464 9.464 0 0 1 0 19.54a13.348 13.348 0 0 0 7.24 2.123c8.69 0 13.444-7.2 13.444-13.444 0-.206-.004-.412-.013-.617A9.565 9.565 0 0 0 24 4.557a9.316 9.316 0 0 1-2.357.63z"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="flex ">
        <h4 class="text-lg mr-8 text-gray-500 font-semibold mb-2 hover:text-white">Terms and Condition </h4>
        <h4 class="text-lg mr-8 text-gray-500 font-semibold mb-2 hover:text-white">Privacy Policy </h4>
        <h4 class="text-lg text-gray-500 font-semibold mb-2 hover:text-white">Roles & Responsibilities </h4>
      </div>
      <hr class="border-gray-500 mb-2 mt-4" />
      <div class=" text-semibold" >
      <p class="end-0 ">{{ contactEmail }}</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      companyName: '',
      companyDescription: 'A brief description of your company goes here.',
      contactEmail: 'edunextcommunity@gmail.com'
    }
  }
}
</script>