<template>
  <div class="comment">
    <h3 class="border-bottom">用户评论</h3>
    <div
      class="comment-container border-bottom"
      v-for="(comment, index) in commentInfo"
      :key="index"
    >
      <p class="comment-desc">{{ comment.desc }}</p>
      <div class="comment-item" @click="handleClick(comment)">
        <img
          :src="item"
          class="comment-img"
          v-for="(item, index) in comment.imgs"
          :key="index"
          v-if="index < 6"
        />
        <span class="img-amount" v-if="comment.imgs.length > 6"
          >共{{ comment.imgs.length }}张</span
        >
      </div>

      <common-gallary
        v-if="comment.isShow"
        :gallaryImgs="comment.imgs"
        @close="handleClose(comment)"
      ></common-gallary>
    </div>
  </div>
</template>

<script>
import CommonGallary from "@/common/Gallary";
export default {
  name: "DetailComment",
  props: ["commentInfo"],
  components: {
    CommonGallary
  },
  methods: {
    handleClick(comment) {
      comment.isShow = true;
    },
    handleClose(comment) {
      comment.isShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.border-bottom::before {
  border-color: #ccc;
}
h3 {
  line-height: 0.8rem;
  padding-left: 0.3rem;
  font-size: 0.3rem;
}
.comment-container {
  padding: 0 0.2rem 0.4rem;
  line-height: 0.42rem;
  font-size: 0.26rem;
  color: #616161;
  .comment-desc {
    overflow: auto;
    height: 2rem;
    padding: 0.2rem 0;
  }
  .comment-item {
    position: relative;
    overflow: hidden;

    .comment-img {
      float: left;
      width: 32%;
      margin-right: 1.2%;
      margin-bottom: 1.2%;
    }

    .img-amount {
      position: absolute;
      right: 0.1rem;
      bottom: 0.3rem;
      padding: 0 0.05rem;
      font-size: 0.28rem;
      color: #fff;
      border-radius: 0.2rem 0 0 0.2rem;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
