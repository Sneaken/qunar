<template>
  <div>
    <div>
      <home-header></home-header>
      <div ref="wrapper" class="container">
        <div>
          <home-swiper :swiperList="swiperList"></home-swiper>
          <home-nav :iconList="iconList"></home-nav>
          <home-favourite :recommendList="recommendList"></home-favourite>
          <home-weekend :weekendList="weekendList"></home-weekend>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHome } from "@/api/index";
import BScroll from "better-scroll";

import HomeHeader from "components/home/base/Header";
import HomeSwiper from "components/home/base/Swiper";
import HomeNav from "components/home/base/Nav";
import HomeFavourite from "components/home/base/Favourite";
import HomeWeekend from "components/home/base/Weekend";

export default {
  name: "Home",
  data() {
    return {
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeFavourite,
    HomeWeekend
  },
  created() {
    this.getData();
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    });
  },
  methods: {
    async getData() {
      const {
        iconList,
        recommendList,
        swiperList,
        weekendList
      } = await getHome();
      this.iconList = iconList;
      this.recommendList = recommendList;
      this.swiperList = swiperList;
      this.weekendList = weekendList;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0.88rem;
}
</style>
