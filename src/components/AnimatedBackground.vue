<template>
  <div class="background-container">
    <div class="background-overlay"></div>
    <div class="background-elements">
      <div v-for="blob in blobs" class="background-blob">
        <svg
          v-key="'blob' + i"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path style="transform(scale(0));" d="" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  name: "AnimatedBackground",
  data: () => ({
    blobs: [
      {
        d: "M62.9,-46.7C75.9,-33.9,76.9,-8,70.7,14.9C64.5,37.9,51,58,32.5,66.6C13.9,75.2,-9.8,72.3,-28.7,62.2C-47.6,52.1,-61.7,34.7,-67.8,13.9C-73.8,-7,-71.7,-31.2,-59.1,-44C-46.4,-56.7,-23.2,-58,0.9,-58.7C24.9,-59.3,49.9,-59.5,62.9,-46.7Z",
      },
      {
        d: "M53.8,-39.8C66.8,-26.5,72.5,-4.3,68,15.5C63.4,35.4,48.7,52.9,31.4,58.7C14.2,64.6,-5.6,58.6,-21.9,49.3C-38.1,40,-50.9,27.2,-55.8,11.2C-60.6,-4.8,-57.6,-24.2,-47,-37C-36.4,-49.7,-18.2,-55.8,1.1,-56.7C20.4,-57.5,40.7,-53.1,53.8,-39.8Z",
      },
      {
        d: "M62.9,-46.7C75.9,-33.9,76.9,-8,70.7,14.9C64.5,37.9,51,58,32.5,66.6C13.9,75.2,-9.8,72.3,-28.7,62.2C-47.6,52.1,-61.7,34.7,-67.8,13.9C-73.8,-7,-71.7,-31.2,-59.1,-44C-46.4,-56.7,-23.2,-58,0.9,-58.7C24.9,-59.3,49.9,-59.5,62.9,-46.7Z",
      },
    ],
    palette: ["#08BDBA", "#F1C21B", "#8A3FFC", "#FF0066"],
  }),
  mounted() {
    this.initBlobs();
  },
  methods: {
    initBlobs() {
      this.blobs.forEach((blob) => {
        const x =
          Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
        const y =
          Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
        anime({
          targets: [".background-blob svg path"],
          d: blob.d,
          baseFrequency: 0,
          scale: 1,
          loop: false,
          direction: "alternate",
          easing: "easeInOutExpo",
          translateX: x,
          translateY: y,
          duration: 800,
        });
        blob.fill = this.getRandomColor();
      });
    },
    getRandomColor() {
      return this.palette[
        Math.floor(Math.random() * 100) % this.palette.length
      ];
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.background-container {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -999;
  width: 100vw;
  height: 100vh;
  background: #000;
}
.background-elements {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}
.background-blob {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
}
</style>
