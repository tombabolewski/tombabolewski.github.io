<template>
  <input class="jCaptcha input is-inline-block" type="text" placeholder="Wynik" required />
</template>

<script>
import jCaptcha from 'js-captcha';

export default {
  data: () => ({
    myCaptcha: null,
  }),
  mounted() {
    this.initCaptcha();
  },
  methods: {
    initCaptcha() {
      this.myCaptcha = new jCaptcha({
        el: ".jCaptcha",
        canvasClass: "jCaptchaCanvas",
        canvasStyle: {
          // required properties for captcha stylings:
          width: 100,
          height: 30,
          textBaseline: "top",
          font: "20px Courier",
          textAlign: "left",
          fillStyle: "#000",
        },
        clearOnSubmit: true,
        requiredValue: '',
        // set callback function for success and error messages:
        // emits events 'success' and 'error'
        callback: (response) => this.$emit(response),
      });
    },
    validate() {
      this.myCaptcha.validate();
    },
  },
};
</script>

<style lang="scss">
  .jCaptchaCanvas {
    display: inline-block;
    background: #eee;
    margin-right: 15px;
  }
</style>
