module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      mainwhite: '#FDFDFE',
      mainblack: '#0E0E0E',
      mainblue: '#1D2E5C',
      lighblack: '#202020',
      lightblue: '#EDF2FE',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}