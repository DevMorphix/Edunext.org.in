<template>
    <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
      <path
        :d="pathData"
        stroke="black"
        fill="transparent"
        stroke-dasharray="5,5"
      />
    </svg>
  </template>
  
  <script>
  export default {
    name: 'SineWave',
    data() {
      return {
        width: window.innerWidth,
        height: 200,
        amplitude: 20,
        wavelength: 800,
        phase: 0,
      };
    },
    computed: {
      pathData() {
        const { width, height, amplitude, wavelength, phase } = this;
        let path = '';
        for (let x = 0; x <= width; x++) {
          const y = amplitude * Math.sin((2 * Math.PI * x) / wavelength + phase) + height / 2;
          path += `${x === 0 ? 'M' : 'L'}${x},${y} `;
        }
        return path.trim();
      },
    },
    mounted() {
      this.animate();
      window.addEventListener('resize', this.updateDimensions);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateDimensions);
    },
    methods: {
      animate() {
        setInterval(() => {
          this.phase += 0.1;
        }, 50);
      },
      updateDimensions() {
        this.width = window.innerWidth;
        // this.height = window.innerHeight;
      },
    },
  };
  </script>
  
  <style scoped>
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  </style>
  