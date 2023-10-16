<template>
  <div class="section">
    <div class="section__content columns is-align-items-stretch">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "FpSection",
};
</script>

<style scoped lang="scss">
.section {
  &__content {
    height: 100vh;
  }
}
</style>
