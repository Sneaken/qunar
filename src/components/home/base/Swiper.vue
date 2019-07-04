<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!--    slides-->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>

      <!--    Optional controls-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: ["swiperList"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true //无缝轮播
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper /deep/ .swiper-pagination-bullet-active {
  background-color: #fff;
}
.swiper {
  height: 2.19rem;
  .swiper-img {
    width: 100%;
  }
}
</style>
