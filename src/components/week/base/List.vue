<template>
  <div class="list" ref="wrapper">
    <ul>
      <li v-for="(item,index) in weekInfo" :key="index">
        <img :src="item.imgUrl" alt="" />
        <div class="list-info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <span>¥{{ item.price }}起</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "WeekList",
  props: ["weekInfo"],
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  }
};
</script>
<style lang="scss" scoped>
.list {
  position: fixed;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0.86rem;
  bottom: 0;

  .list-info {
    position: relative;
    padding: 0.1rem 0.2rem;
    border-bottom: 0.2rem solid #f5f5f5;

    h3 {
      line-height: 0.4rem;
      font-size: 0.3rem;
    }

    p {
      padding: 0.2rem 0;
    }

    span {
      position: absolute;
      right: 0.3rem;
      top: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 0.4rem;
      color: #ff8300;

      &::first-letter {
        font-size: 0.24rem;
      }
    }
  }
}
img {
  width: 100%;
  height: 200px;
}
</style>
