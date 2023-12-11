<template>
  <main>
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
              <h1 class="is-size-1 is-family-secondary mb-5">
                Ożywiamy Twoje pomysły
              </h1>
              <p class="mb-4">Cześć! Jesteśmy Twoją agencją kreatywną! 👋</p>
              <p class="mb-4">
                Jesteśmy Twoim partnerem w tworzeniu i doskonaleniu
                <strong>aplikacji webowych</strong>,
                <strong>stron internetowych</strong>,
                <strong>sklepów internetowych</strong>, oraz
                <strong>interaktywnych doświadczeń</strong>, które pozostawiają
                trwałe wrażenie
              </p>
              <p class="mb-4">
                Dołącz do nas w podróży tam, gdzie innowacja spotyka wyobraźnię!
                ⛵️
              </p>
              <button
                class="button is-medium is-dark mt-4"
                @click="$refs.fullpage.api.moveTo(4)"
              >
                Poznajmy się!
              </button>
            </div>
          </div>
        </fp-section>
        <fp-section id="section2">
          <div
            class="column is-flex is-align-items-center px-6 has-text-black is-half"
          >
            <div class="content">
              <h2 class="is-size-3 is-family-secondary mb-5">
                Od początku do końca... i jeszcze dalej!
              </h2>
              <p class="mb-4">
                Zdradź nam swoje marzenia, a my zajmiemy się resztą<br />
                Nasi eksperci dostostosują się do Twoich wymagań i zaproponują
                najlepsze rozwiązania
              </p>
              <p class="mb-4">
                <span class="has-text-weight-bold">Potrzebny design?</span> No
                problem. 👩‍🎨<br />
                <span class="has-text-weight-bold">Back-end?</span> Mamy to
                obcykane! 💪<br />
                <span class="has-text-weight-bold">Front-end?</span> Pewnie.
                😎<br />
                <span class="has-text-weight-bold"
                  >Hosting, Dev-ops, Support?</span
                >
                Chętnie pomożemy! 🙌
              </p>
            </div>
          </div>
          <div
            class="column is-flex is-align-items-center px-6 has-text-white is-half is-size-2"
          >
            <div>
              <div>
                <strong
                  class="has-background-black has-text-white has-text-weight-normal"
                  >Aplikacje webowe</strong
                >
              </div>
              <div>
                <strong
                  class="has-background-black has-text-white has-text-weight-normal"
                  >Sklepy internetowe</strong
                >
              </div>
              <div>
                <strong
                  class="has-background-black has-text-white has-text-weight-normal"
                  >Integracje</strong
                >
              </div>
              <div>
                <strong
                  class="has-background-black has-text-white has-text-weight-normal"
                  >Design</strong
                >
              </div>
              <div>
                <span class="has-background-black">&gt;... i nie tylko!</span>
              </div>
            </div>
          </div>
        </fp-section>
        <fp-section id="section3">
          <div class="container">
            <div class="columns">
              <div class="column">
                <h2 class="is-inline-block has-background-black is-size-2 mb-6">
                  Stwórzmy dla Ciebie plan!
                </h2>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div
                  class="has-background-white is-relative has-text-black px-4 py-4"
                >
                  <div
                    :class="{
                      'tab-trigger': true,
                      'mb-3': true,
                      'is-active': tab === 1,
                    }"
                  >
                    <span class="numblock is-size-1 has-text-weight-bold mr-3"
                      >1</span
                    >
                    <span class="is-size-4 is-family-secondary"
                      >Zbadamy Twoje potrzeby</span
                    >
                  </div>
                  <div
                    :class="{
                      'tab-trigger': true,
                      'mb-3': true,
                      'is-active': tab === 2,
                    }"
                  >
                    <span class="numblock is-size-1 has-text-weight-bold mr-3"
                      >2</span
                    >
                    <span class="is-size-4 is-family-secondary"
                      >Zaplanujemy wspólnie etapy projektu</span
                    >
                  </div>
                  <div
                    :class="{
                      'tab-trigger': true,
                      'mb-3': true,
                      'is-active': tab === 3,
                    }"
                  >
                    <span class="numblock is-size-1 has-text-weight-bold mr-3"
                      >3</span
                    >
                    <span class="is-size-4 is-family-secondary"
                      >Przygotujemy projekt graficzny</span
                    >
                  </div>
                  <div
                    :class="{
                      'tab-trigger': true,
                      'mb-3': true,
                      'is-active': tab === 4,
                    }"
                  >
                    <span class="numblock is-size-1 has-text-weight-bold mr-3"
                      >4</span
                    >
                    <span class="is-size-4 is-family-secondary"
                      >Napiszemy kod Twojej nowej aplikacji</span
                    >
                  </div>
                  <div
                    :class="{
                      'tab-trigger': true,
                      'mb-3': true,
                      'is-active': tab === 5,
                    }"
                  >
                    <span class="numblock is-size-1 has-text-weight-bold mr-3"
                      >5</span
                    >
                    <span class="is-size-4 is-family-secondary"
                      >Zajmiemy się wdrożeniem</span
                    >
                  </div>
                  <div :class="{ 'tab-trigger': true, 'is-active': tab === 6 }">
                    <span class="numblock is-size-1 has-text-weight-bold mr-3"
                      >6</span
                    >
                    <span class="is-size-4 is-family-secondary"
                      >Jesteśmy do usług tak długo, jak chcesz!</span
                    >
                  </div>
                </div>
              </div>
              <div class="column">
                <div
                  class="has-background-white is-relative has-text-black px-4 py-4"
                >
                  <div v-show="tab === 1" class="tab">
                    <div class="mb-4">
                      <div class="has-text-weight-bold">
                        Masz już <strong>aplikację</strong>,
                        <strong>stronę</strong> lub
                        <strong>sklep internetowy</strong>? 🧑‍💻
                      </div>
                      <div>Daj nam znać, jak możemy go ulepszyć!</div>
                    </div>
                    <div class="mb-4">
                      <div class="has-text-weight-bold">
                        Chcesz rozpocząć nową podróż od zera? 🚀
                      </div>
                      <div>
                        Świetnie trafiłeś! Przedstaw nam swój koncept i pozwól
                        nam działać!
                      </div>
                    </div>
                    <p class="mb-4">
                      Pierwszym krokiem jest dogłębne
                      <strong>zrozumienie Twoich potrzeb</strong>. Rozmawiamy z
                      Tobą, poznajemy Twoje <strong>cele biznesowe</strong> i
                      <strong>analizujemy konkretne wymagania</strong>.
                    </p>
                    <p class="mb-4">
                      Twoje pomysły są naszym punktem wyjścia, a
                      <strong
                        >naszym celem jest dostarczyć Ci dokładnie to, czego
                        potrzebujesz</strong
                      >.
                    </p>
                    <p>
                      <strong>Twój sukces jest dla nas priorytetem</strong>,
                      dlatego chcemy w pełni zaspokoić Twoje oczekiwania!
                    </p>
                  </div>
                  <div v-show="tab === 2" class="tab">
                    <p></p>
                  </div>
                  <div v-show="tab === 3" class="tab">
                    <p></p>
                  </div>
                  <div v-show="tab === 4" class="tab">
                    <p></p>
                  </div>
                  <div v-show="tab === 5" class="tab">
                    <p></p>
                  </div>
                  <div v-show="tab === 6" class="tab">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fp-section>
        <fp-section id="section4">
          <div class="container has-text-black">
            <div class="columns">
              <div class="column">
                <h2 class="is-size-1 is-family-secondary has-text-weight-bold">
                  Czekamy na Ciebie!
                </h2>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <form
                  action="mailto:recipient@example.com"
                  method="get"
                  enctype="text/plain"
                  @submit.prevent="$refs.captcha.validate()"
                >
                  <div class="field">
                    <label class="label">Imię i nazwisko lub firma</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Imię i nazwisko lub firma"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">E-mail</label>
                    <div class="control as-icons-right">
                      <input class="input" type="email" placeholder="Email" />
                      <span class="icon is-small is-right" v-if="invalidEmail">
                        <i class="fas fa-exclamation-triangle"></i>
                      </span>
                    </div>
                    <p class="help is-danger" v-if="invalidEmail">
                      Nieprawidłowy adres e-mail
                    </p>
                  </div>
                  <div class="field">
                    <label class="label">Jak możemy Ci pomóc?</label>
                    <div class="control">
                      <textarea
                        class="textarea"
                        placeholder="Wiadomość"
                      ></textarea>
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <label class="checkbox">
                        <input type="checkbox" />
                        Wyrażam zgodę na przetwarzanie moich danych zgodnie z
                        <a class="is-underlined" href="#"
                          >polityką prywatności</a
                        >
                      </label>
                    </div>
                  </div>
                  <label class="label">Podaj wynik działania</label>
                  <div class="field has-addons">
                    <captcha
                      ref="captcha"
                      @success="handleCaptchaSuccess"
                      @error="handleCaptchaError"
                    />
                  </div>
                  <div class="field">
                    <div class="control">
                      <button class="button is-dark">Wyślij</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </fp-section>
      </full-page>
      <div id="bg-block"></div>
    </div>
  </main>
</template>

<script>
import AnimatedBackground from "./components/AnimatedBackground.vue";
import VideoOverlay from "./components/VideoOverlay.vue";
import Logo from "./components/Logo.vue";
import FpSection from "./components/FpSection.vue";
import CaptchaConf from "@config/captcha.yml";
import Captcha from "./components/Captcha.vue";

const randGradient = () => {
  const randomColorValue = Math.random() * 360;
  const invisible = document.querySelector(".gradient.invisible");
  const visible = document.querySelector(".gradient:not(.invisible)");
  invisible.style.backgroundImage = `radial-gradient(circle at center, hsl(${randomColorValue}, 76.2%, 62.2%), hsl(0, 0%, 25%))`;
  invisible.classList.remove("invisible");
  visible.classList.add("invisible");
};

export default {
  components: { AnimatedBackground, VideoOverlay, Logo, FpSection, Captcha },
  data: () => ({
    tab: 1,
    invalidEmail: false,
    options: {
      licenseKey: "KEY",
      autoScrolling: true,
      scrollOverflow: false,
      loopBottom: false,
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
    this.$refs.fullpage.api.moveTo(0);
    randGradient();
  },
};
</script>

<style scoped lang="scss">
@import "./assets/style/app.scss";
</style>
