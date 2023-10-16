<template>
  <div class="halftone">
    <div class="layer2"></div>
    <div class="layer3">
      <full-page ref="fullpage" :options="options">
        <fp-section id="section1">
          <div class="column is-flex is-align-items-center px-6 is-half">
            <logo class="mb-6" />
          </div>
          <div
            class="column is-flex is-align-items-center px-6 has-text-black is-half"
          >
            <div class="content">
              <h1 class="is-size-2 is-family-secondary mb-4">
                Bringing ideas to life<br />in pixels and code
              </h1>
              <p class="has-text-justified mb-4">
                Hello! We are a digital creative agency!<br />
                We are your partner in crafting
                <strong>stunning visuals</strong>
                and
                <strong>interactive experiences</strong>
                that leave a lasting impression.
              </p>
              <p class="has-text-justified mb-4">
                Join us on a journey where innovation meets imagination!
              </p>
              <button
                class="button is-medium is-black mt-4"
                @click="$refs.fullpage.api.moveTo(4)"
              >
                Contact us!
              </button>
            </div>
          </div>
        </fp-section>
        <fp-section id="section2">
          <div
            class="column is-flex is-align-items-center px-6 has-text-black is-half"
          >
            <div class="content">
              <h2 class="is-size-3 is-family-secondary mb-4">
                From before start to after finish...
              </h2>
              <p class="has-text-justified mb-4">
                Tell us your dreams and we will take care of the rest. <br />
                Our experts will tailor your new web application to your needs.
              </p>
              <p class="has-text-justified mb-4">
                Need a design? No problem.<br />
                Back-end? Say no more<br />
                Front-end? Sure.<br />
                Hosting, Dev-ops, Support? We're here to help!
              </p>
            </div>
          </div>
          <div
            class="column is-flex is-align-items-center px-6 has-text-white is-half is-size-2"
          >
            <div>
              <div>
                <span class="has-background-black">Web applications</span>
              </div>
              <div><span class="has-background-black">E-shops</span></div>
              <div><span class="has-background-black">Integrations</span></div>
              <div><span class="has-background-black">Design</span></div>
              <div>
                <span class="has-background-black">>... and more!</span>
              </div>
            </div>
          </div>
        </fp-section>
        <fp-section id="section3"> </fp-section>
        <fp-section id="section4"> </fp-section>
      </full-page>
      <div id="bg-block"></div>
    </div>
  </div>
</template>

<script>
import AnimatedBackground from "./components/AnimatedBackground.vue";
import VideoOverlay from "./components/VideoOverlay.vue";
import Logo from "./components/Logo.vue";
import FpSection from "./components/FpSection.vue";

export default {
  components: { AnimatedBackground, VideoOverlay, Logo, FpSection },
  data: () => ({
    options: {
      licenseKey: "KEY",
      autoScrolling: true,
      scrollOverflow: false,
      loopBottom: true,
      easingcss3: "ease-in",
      credits: { enabled: false },
      onLeave: function (origin, dest) {
        const classes = document.querySelector("#bg-block").classList;
        classes.remove("left", "full", "none");
        switch (dest.index) {
          case 1:
            classes.add("left");
            break;
          case 2:
            classes.add("full");
            break;
          case 3:
            classes.add("none");
            break;
          default:
            break;
        }
      },
    },
  }),
};
</script>

<style lang="scss">
body {
  font-size: 16px;
  background: #000;
  color: #fff;
}
.fp-watermark {
  display: none !important;
}
#app {
  position: relativee;
  z-index: 10;
}
#bg-block {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 50vw;
  left: 50%;
  background: #fff;
  z-index: -1;
  transition: 0.3s ease-in;

  &.left {
    left: 0;
  }

  &.full {
    left: 0;
    width: 100vw;
  }

  &.none {
    left: 100%;
    width: 0;
  }
}

.halftone {
  filter: contrast(2000%);
}

.layer2 {
  position: absolute;
  top: -50%;
  left: -50%;
  bottom: -50%;
  right: -50%;
  background: radial-gradient(
    circle at center,
    hsl(0, 0%, 1%),
    hsl(0, 0%, 100%)
  );
  background-size: auto;
  background-size: 4px 4px;
  transform: rotate(20deg);
}

.layer3 {
  filter: grayscale(1) brightness(95%) contrast(100%);
  mix-blend-mode: hard-light;
}
</style>
