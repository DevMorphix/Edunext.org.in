<template>
    <div class="container">
      <div v-observe-visibility="visibilityChanged">
        <svg :width="width" :height="height" viewBox="0 0 800 600">
          <g transform="translate(400, 300)">
            <!-- Path segments -->
            <path
              v-for="(segment, index) in pathSegments"
              :key="index"
              :d="segment.path"
              fill="none"
              stroke="navy"
              stroke-width="6"
              stroke-dasharray="10 20"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <animate
                attributeName="stroke-dashoffset"
                :values="`${segment.length};0`"
                :dur="`${animationDuration}s`"
                :begin="`${index * animationDelay}s`"
                repeatCount="indefinite"
              />
            </path>
            <!-- Circles beside each point -->
            <circle
              v-for="(dot, index) in dots"
              :key="`dot-${index}`"
              :cx="dot.x"
              :cy="dot.y"
              r="15"
              fill="navy"
              data-aos="fade-right"
              :data-aos-delay="index * 200"
              data-aos-duration="1000"
            />
            <!-- White circles beside each point with larger black border -->
            <circle
              v-for="(dot, index) in dots"
              :key="`black-${index}`"
              :cx="dot.x + (dot.x > 0 ? 100 : -100)"
              :cy="dot.y"
              r="50"
              fill="white"
              stroke="black"
              stroke-width="5"
              :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
              :data-aos-delay="index * 200"
              data-aos-duration="1000"
            />
            <!-- Larger black text inside circles -->
            <text
              v-for="(dot, index) in dots"
              :key="`text-${index}`"
              :x="dot.x + (dot.x > 0 ? 100 : -100)"
              :y="dot.y + 15"
              fill="black"
              text-anchor="middle"
              font-size="35"
              font-family="Arial, sans-serif"
              :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
              :data-aos-delay="index * 200"
              data-aos-duration="1000"
            >
              {{ 2020 + index }}
            </text>
            <!-- Additional separate text below each circle -->
            <foreignObject
              v-for="(dot, index) in dots"
              :key="`label-${index}`"
              :x="dot.x + (dot.x > 0 ? 0 : -200)"
              :y="dot.y + 70"
              width="200"
              height="200"
            >
              <div
                class="text-lg font-semibold text-blue-500 text-center"
                :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
                :data-aos-delay="index * 200"
                data-aos-duration="1000"
              >
                {{ dot.label }}
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>
    </div>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import ObserveVisibility from 'vue-observe-visibility';
  
  export default {
    name: 'VerticalSShape',
    directives: {
      'observe-visibility': ObserveVisibility,
    },
    props: {
      width: { type: Number, default: 800 },
      height: { type: Number, default: 1500 },
      animationDuration: { type: Number, default: 10 },
      animationDelay: { type: Number, default: 0.1 },
    },
    computed: {
      pathSegments() {
        const segments = [];
        const points = [
          { x: -200, y: -200 },
          { x: 200, y: -50 },
          { x: -200, y: 200 },
          { x: 200, y: 450 },
        ];
        for (let i = 0; i < points.length - 1; i++) {
          const startX = points[i].x;
          const startY = points[i].y;
          const endX = points[i + 1].x;
          const endY = points[i + 1].y;
          const controlX1 = startX;
          const controlY1 = startY + (endY - startY) / 2;
          const controlX2 = endX;
          const controlY2 = startY + (endY - startY) / 2;
          const path = `M${startX},${startY} C${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`;
          const length = this.getPathLength(path);
          segments.push({ path, length });
        }
        return segments;
      },
      dots() {
        const points = [
          {
            x: -200,
            y: -200,
            label: 'Initial discussions to build teaching community among college students to use the potential of human resource',
          },
          { x: 200, y: -50, label: 'Launched as a teaching community' },
          { x: -200, y: 200, label: 'Completed 50+ workshops in various schools' },
          { x: 200, y: 450, label: 'Associated with various schools as a student community' },
        ];
        return points;
      },
    },
    methods: {
      getPathLength(pathString) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathString);
        return path.getTotalLength();
      },
      visibilityChanged(isVisible) {
        if (isVisible) {
          AOS.refreshHard();
        }
      },
    },
    mounted() {
      AOS.init({
        once: true, // Trigger animations only once
        offset: 200, // Adjust offset to trigger animations earlier or later
      });
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  </style>
  