<template>
  <div class="favourite">
    <div class="title">
      <img
        class="title-img"
        src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt="猜你喜欢"
      /><span>猜你喜欢</span>
    </div>
    <ul>
      <!--      <router-link :to="">-->
      <li
        class="fav-item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <img class="fav-img" :src="item.imgUrl" :alt="item.info" />
        <div class="fav_info">
          <div class="fav_info_title">{{ item.title }}</div>
          <div class="fav_info_comment_num">
            <p class="item-fav-text">
              <i class="iconfont icon-star" v-for="index in 5" :key="index"></i>
              <span class="fav_info_star" :style="item.score | star">
                <i
                  class="iconfont icon-star"
                  v-for="index in 5"
                  :key="index"
                ></i>
              </span>
            </p>
            <span>{{ item.comment }}条评论</span>
          </div>
          <div class="price_and_address">
            <span class="fav_info_price">
              ￥<em class="fav_info_price_num">{{ item.price }}</em> </span
            >起
            <span class="fav_info_address">{{ item.title }}</span>
          </div>
        </div>
      </li>
      <!--      </router-link>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Favourite",
  props: ["recommendList"],
  data() {
    return {};
  },
  filters: {
    star(score) {
      return `width:${(score * 100) / 5}%`;
    }
  }
};
</script>

<style lang="scss" scoped>
.favourite {
  padding-left: 0.26rem;
  .title {
    padding: 0.24rem 0;
    .title-img {
      width: 0.3rem;
      height: 0.3rem;
    }
    span {
      font-size: 0.32rem;
    }
  }
  .fav-item {
    padding: 0.2rem 0;
    height: 2rem;
    display: flex;
    .fav-img {
      width: 2rem;
      height: 2rem;
    }
    .fav_info {
      padding-left: 0.2rem;
      width: 100%;
      .fav_info_title {
        font-size: 0.32rem;
        line-height: 0.44rem;
        margin-top: 0.26rem;
      }
      .fav_info_comment_num {
        color: #616161;
        font-size: 0.24rem;
        line-height: 0.44rem;
        margin-top: 0.14rem;
        .item-fav-text {
          position: relative;
          float: left;
          color: #ccc;
          margin-right: 0.5rem;
          .fav_info_star {
            overflow: hidden;
            position: absolute;
            left: 0;
            color: #ffb436;
          }
        }
      }
      .price_and_address {
        margin-top: 0.22rem;
        color: #616161;
        .fav_info_price {
          color: #ff8300;
          .fav_info_price_num {
            font-size: 0.4rem;
          }
        }
        .fav_info_address {
          position: absolute;
          right: 0.2rem;
        }
      }
    }
  }
}
</style>
