<template>
  <div class="halftone">
    <div class="layer2 gradient" id="layer2"></div>
    <div class="layer3 gradient invisible" id="layer3"></div>
    <div class="layer4">
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
                Ożywiamy Twoje pomysły
              </h1>
              <p class="has-text-justified mb-4">
                Cześć! Jesteśmy Twoją agencją kreatywną!
              </p>
              <p class="has-text-justified mb-4">
                Jesteśmy Twoim partnerem w tworzeniu i doskonaleniu
                <strong>aplikacji webowych</strong>,
                <strong>stron internetowych</strong>,
                <strong>sklepów internetowych</strong>,
                oraz
                <strong>interaktywnych doświadczeń</strong>, które pozostawiają trwałe wrażenie
              </p>
              <p class="has-text-justified mb-4">
                Dołącz do nas w podróży tam, gdzie innowacja spotyka wyobraźnię!
              </p>
              <button
                class="button is-medium is-black mt-4"
                @click="$refs.fullpage.api.moveTo(4)"
              >
                Skontaktujmy się!
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
                Od początku do końca... i jeszcze dalej!
              </h2>
              <p class="has-text-justified mb-4">
                Zdradź nam swoje marzenia, a my zajmiemy się resztą<br />
                Nasi eksperci dostostosują się do Twoich wymagań i zaproponują najlepsze rozwiązania
              </p>
              <p class="has-text-justified mb-4">
                <span class="has-text-weight-bold">Potrzebny design?</span> No problem.<br />
                <span class="has-text-weight-bold">Back-end?</span> Mamy to obcykane!<br />
                <span class="has-text-weight-bold">Front-end?</span> Pewnie.<br />
                <span class="has-text-weight-bold">Hosting, Dev-ops, Support?</span> Chętnie pomożemy!
              </p>
            </div>
          </div>
          <div
            class="column is-flex is-align-items-center px-6 has-text-white is-half is-size-2"
          >
            <div>
              <div>
                <strong class="has-background-black has-text-white has-text-weight-normal">Aplikacje webowe</strong>
              </div>
              <div>
                <strong class="has-background-black has-text-white has-text-weight-normal">Sklepy internetowe</strong>
              </div>
              <div>
                <strong class="has-background-black has-text-white has-text-weight-normal">Integracje</strong>
              </div>
              <div>
                <strong class="has-background-black has-text-white has-text-weight-normal">Design</strong>
              </div>
              <div>
                <span class="has-background-black">>... i nie tylko!</span>
              </div>
            </div>
          </div>
        </fp-section>
        <fp-section id="section3">
          <div class="container">
            <div class="columns">
              <div class="column">
                <h2 class="is-inline-block has-background-black is-size-2 mb-6">Stwórzmy dla Ciebie plan!</h2>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="has-background-white has-text-black px-4 py-4">
                  <div class="mb-3">
                    <span class="numblock has-background-black has-text-white is-size-1 has-text-weight-bold mr-3">1</span>
                    <span class="is-size-4 is-family-secondary">Zbadamy Twoje potrzeby</span>
                  </div>
                  <div class="mb-3">
                    <span class="numblock has-background-black has-text-white is-size-1 has-text-weight-bold mr-3">2</span>
                    <span class="is-size-4 is-family-secondary">Zaplanujemy wspólnie etapy projektu</span>
                  </div>
                  <div class="mb-3">
                    <span class="numblock has-background-black has-text-white is-size-1 has-text-weight-bold mr-3">3</span>
                    <span class="is-size-4 is-family-secondary">Przygotujemy projekt graficzny</span>
                  </div>
                  <div class="mb-3">
                    <span class="numblock has-background-black has-text-white is-size-1 has-text-weight-bold mr-3">4</span>
                    <span class="is-size-4 is-family-secondary">Napiszemy kod Twojej nowej aplikacji</span>
                  </div>
                  <div class="mb-3">
                    <span class="numblock has-background-black has-text-white is-size-1 has-text-weight-bold mr-3">5</span>
                    <span class="is-size-4 is-family-secondary">Zajmiemy się wdrożeniem</span>
                  </div>
                  <div>
                    <span class="numblock has-background-black has-text-white is-size-1 has-text-weight-bold mr-3">6</span>
                    <span class="is-size-4 is-family-secondary">Będziemy do Twoich usług tak długo, jak chcesz!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fp-section>
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

const randGradient = () => {
  const randomColorValue = Math.random() * 360;
  const invisible = document.querySelector(".gradient.invisible");
  const visible = document.querySelector(".gradient:not(.invisible)");
  invisible.style.backgroundImage = `radial-gradient(circle at center, hsl(${randomColorValue}, 76.2%, 62.2%), hsl(0, 0%, 25%))`;
  invisible.classList.remove("invisible");
  visible.classList.add("invisible");
};

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
      onLeave: (origin, dest) => {
        randGradient();
        const classes = document.querySelector("#bg-block").classList;
        classes.remove("left", "full", "none");
        switch (dest.index) {
          case 1:
            classes.add("left");
            break;
          case 2:
            classes.add("none");
            break;
          case 3:
            classes.add("full");
            break;
          default:
            break;
        }
      },
    },
  }),
  mounted() {
    randGradient();
    setInterval(randGradient, 8000);
  },
};
</script>

<style lang="scss">
body {
  font-size: 16px;
  background: #e10d0d;
  color: #fff;
}
.fp-watermark {
  display: none !important;
}
#app {
  position: relative;
  z-index: 10;
}
#bg-block {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 50vw;
  left: 50%;
  background: #ffffff;
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

.gradient {
  position: absolute;
  top: -50%;
  left: -50%;
  bottom: -50%;
  right: -50%;
  background-image: radial-gradient(
    circle at center,
    hsl(168.6, 76.2%, 62.2%),
    hsl(0, 0%, 25%)
  );
  background-size: auto;
  background-size: 4px 4px;
  transform: rotate(20deg);
  transition: opacity 1.3s ease-out;
}

.invisible {
  opacity: 0;
}

.layer4 {
  // filter: grayscale(1) brightness(95%) contrast(100%);
  mix-blend-mode: hard-light;
}

.numblock {
  display: inline-block;
  width: 70px;
  height: 70px;
  text-align: center;
  line-height: 1;
  vertical-align: sub;
}
</style>
