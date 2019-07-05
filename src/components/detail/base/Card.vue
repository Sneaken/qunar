<template>
  <div class="card">
    <div class="card-desc border-bottom">
      <div class="card-left card-item">
        <h3>
          {{ cardInfo.score }}分 <span>{{ cardInfo.desc }}</span>
        </h3>
        <p>
          <span>{{ cardInfo.comment }}条评论</span>
          <span>{{ cardInfo.walkthrough }}条攻略</span>
        </p>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
      <div class="card-right card-item">
        <h4>景点简介</h4>
        <p>开放时间、贴士</p>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </div>
    <p class="card-address ">
      {{ cardInfo.address }} <i class="iconfont icon-jiantouyou"></i>
    </p>
  </div>
</template>

<script>
export default {
  name: "DetailCard",
  props: ["cardInfo"]
};
</script>

<style lang="scss" scoped>
.border-bottom {
  &::before {
    border-color: #ccc;
  }
}
.card {
  padding: 0.2rem 0.2rem 0;
  border-bottom: 0.2rem solid #f5f5f5;

  .card-desc {
    display: flex;

    .card-item {
      position: relative;
      width: 50%;

      h3 {
        color: #ff8300;
        line-height: 0.4rem;
        font-size: 0.32rem;

        span {
          font-size: 0.28rem;
          margin-left: 0.1rem;
        }
      }

      p {
        color: #9e9e9e;
        font-size: 0.24rem;
        line-height: 0.5rem;

        span {
          margin-right: 0.1rem;
        }
      }
      .icon-jiantouyou {
        position: absolute;
        right: 0.2rem;
        bottom: 0;
        top: 0;
        width: 0.3rem;
        height: 0.3rem;
        margin: auto;
        font-size: 0.3rem;
        color: #999;
      }
    }
  }

  .card-address {
    position: relative;
    line-height: 0.8rem;

    .icon-jiantouyou {
      line-height: 1;
      position: absolute;
      right: 0.2rem;
      bottom: 0;
      top: 0;
      width: 0.3rem;
      height: 0.3rem;
      margin: auto;
      font-size: 0.3rem;
      color: #999;
    }
  }
}
</style>
