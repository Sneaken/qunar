<template>
  <div class="alphabet">
    <ul>
      <li
        v-for="(city, key) in cities"
        :key="city.id"
        @click.stop="handleClick(key)"
      >
        {{ key }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: ["cities"],
  methods: {
    handleClick(letter) {
      this.$store.commit("changeLetter", letter);
    }
  }
};
</script>

<style lang="scss" scoped>
.alphabet {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 0;
  top: 0;
  bottom: 0;
  width: 0.4rem;

  li {
    line-height: 0.5rem;
    text-align: center;
    color: #00bcd4;
    font-weight: 600;
  }
}
</style>
