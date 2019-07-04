<template>
  <div class="nav">
    <swiper :options="swiperOption">
      <!--    slides-->
      <swiper-slide v-for="(page, index) in ImgInfo" :key="index">
        <div class="item" v-for="item in page" :key="item.id">
          <div>
            <img class="item-img" :src="item.imgUrl" alt="" />
          </div>
          <span class="item_desc">{{ item.desc }}</span>
        </div>
      </swiper-slide>
      <!--    Optional controls-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: ["iconList"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    ImgInfo() {
      let view = [];
      this.iconList.forEach((item, index) => {
        let page = ~~(index / 8);
        if (!view[page]) {
          view[page] = [];
        }
        view[page].push(item);
      });
      return view;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  .swiper-slide {
    display: flex;
    height: 3.7rem;
    flex-wrap: wrap;
    background-color: white;
    .item {
      width: 25%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .item-img {
        width: 1.1rem;
      }
    }
  }
}
</style>
