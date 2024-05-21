<template>
  <div class="bg-white">
    <header class="bg-blue-900 text-white py-4 px-8 flex justify-between items-center">
      <div class="logo">
        <img src="" alt="Eduneact Community" class="h-8" />
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:text-blue-300">We</a></li>
          <li><a href="#" class="hover:text-blue-300">Redefine</a></li>
          <li><a href="#" class="hover:text-blue-300">Learning</a></li>
          <li><a href="#" class="hover:text-blue-300">Experiences</a></li>
          <li>
            <a href="#" class="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-300 hover:text-white">Support Us</a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="px-8 py-16">
      <section class="hero mb-16">
        <h1 class="text-4xl font-bold mb-4">Lorem ipsum dolor sit amet</h1>
        <p class="text-gray-600 mb-4">consectetur. Ullamcorper sed auctor est mi libero.</p>
        <p class="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur, dolor rius neque dicta eras conisre cognita an assumendum nemus tn in
          unisque quis rustum volupat.
        </p>
        <div class="flex justify-center space-x-8">
          <div class="text-center">
            <h2 class="text-4xl font-bold">100+</h2>
            <p class="text-gray-600">students engage with us in multu-state programs</p>
          </div>
          <div class="text-center">
            <h2 class="text-4xl font-bold">2+</h2>
            <p class="text-gray-600">Multu-state programs we are currently running</p>
          </div>
          <div class="text-center">
            <h2 class="text-4xl font-bold">50+</h2>
            <p class="text-gray-600">New schools jointed to our network (curriculum reach out)</p>
          </div>
        </div>
      </section>

      <section class="mission mb-16 flex">
        <div class="w-1/2 pr-8">
          <h2 class="text-2xl font-bold mb-2">Our Mission</h2>
          <h3 class="text-xl font-bold mb-4">Lorem ipsum dolor</h3>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Esi lmperduet amet porao ac. Magna eget est lectus umar, thaemantum
            erat ean molesue ipsum supienaiise scenisque lectu, trim nal vulculine samper aliengci.
          </p>
        </div>
        <div class="w-1/2">
          <img src="" alt="Our Mission" class="w-full" />
        </div>
      </section>

      <section class="methodology mb-16">
        <h2 class="text-2xl font-bold mb-8">Our Methodology</h2>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Lorem Ipsum</h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Eit lmperduet amet porao ac. Magna eget est lectus turpis.
              thaemantum erat ean molesue ipsum supienaiise scenisque lectu, trim nal vulculine samper aliengci.
            </p>
          </div>
          <!-- Add more methodology steps here -->
        </div>
      </section>

      <section class="testimonials mb-16">
        <h2 class="text-2xl font-bold mb-8">From The Students</h2>
        <div class="grid grid-cols-2 gap-8">
          <div class="bg-gray-100 p-8 rounded-md">
            <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur. Eit lmperduet amet porao ac.</p>
            <div class="text-right">Avinr P</div>
          </div>
          <div class="bg-gray-100 p-8 rounded-md">
            <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur. Eit lmperduet amet porao ac.</p>
            <div class="text-right">Karthika C</div>
          </div>
          <!-- Add more testimonials here -->
        </div>
      </section>
    </main>

    <footer class="bg-blue-900 text-white py-16 px-8">
      <div class="flex justify-between mb-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Our Supporters</h3>
          <div class="flex space-x-4">
            <img src="" alt="Novus Labs IEDC" class="h-8" />
            <img src="" alt="DEV.X" class="h-8" />
          </div>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Get Monthly News Letter</h3>
          <form class="flex">
            <input
              type="email"
              placeholder="Enter your email"
              class="px-4 py-2 rounded-l-md bg-white text-gray-800 focus:outline-none"
            />
            <button type="submit" class="bg-white text-blue-900 px-4 py-2 rounded-r-md hover:bg-blue-300 hover:text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div class="flex justify-between">
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-blue-300">We</a></li>
            <li><a href="#" class="hover:text-blue-300">Redefine</a></li>
            <li><a href="#" class="hover:text-blue-300">Learning</a></li>
            <li><a href="#" class="hover:text-blue-300">Experiences</a></li>
          </ul>
        </nav>
        <div class="text-sm">
          <a href="#" class="hover:text-blue-300">Terms and Condition</a>
          <span class="mx-2">|</span>
          <a href="#" class="hover:text-blue-300">Privacy Policy</a>
        </div>
        <div class="text-sm">eduneactcommunity@gmail.com</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  // Add any necessary data and methods here
}
</script>