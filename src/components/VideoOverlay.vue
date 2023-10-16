<template>
  <div id="video_overlay">
    <video autoplay loop controls="false" muted disablepictureinpicture preload>
      <!-- TODO: add poster -->
      <source src="@assets/video/bg.webm" />
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoOverlay",
  mounted: () => {
    document
      .querySelector("#video_overlay")
      .addEventListener("click", (e) => e.preventDefault());
  },
};
</script>

<style scoped lang="scss">
#video_overlay {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 99;
  pointer-events: none;
  opacity: 0.5;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(127, 127, 127, 0.3);
    background-image: radial-gradient(rgb(37, 20, 10) 20%, transparent 23%);
    background-size: 5px 5px;
    opacity: 0.8;
  }

  & > video {
    display: block;
    width: 100%;
  }
}
</style>
