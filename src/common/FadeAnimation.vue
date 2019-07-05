<template>
  <div>
    <transition name="heaven">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FadeAnimation"
};
</script>

<style lang="scss" scoped>
.heaven-enter,
.heaven-leave-to {
  opacity: 0;
}
.heaven-enter-active,
.heaven-leave-active {
  transition: opacity 0.5s;
}
</style>
