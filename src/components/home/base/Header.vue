<template>
  <div class="header">
    <i class="iconfont icon-fanhui header-back"></i>
    <div class="header-input">
      <i class="iconfont icon-sousuo"></i>
      <label>
        <input type="text" placeholder="请输入城市/景点/游玩主题" />
      </label>
    </div>
    <div class="header-right">
      <router-link to="/city">
        <span>{{ $store.state.currentCity }}</span
        ><i class="iconfont icon-jiantou"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  date() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  height: 0.88rem;
  background-color: #00bcd4;
  line-height: 0.88rem;
  color: #fff;
  .header-back {
    width: 0.88rem;
    text-align: center;
    font-size: 0.48rem;
  }
  .header-input {
    flex: 1;
    background-color: #fff;
    line-height: 0.64rem;
    height: 0.64rem;
    padding-left: 0.1rem;
    margin-top: 0.12rem;
    border-radius: 0.1rem;

    .icon-sousuo {
      color: #ccc;
      vertical-align: middle;
    }
    input {
      width: 80%;
      vertical-align: middle;
      font-size: 0.28rem;
    }
  }
  .header-right {
    padding: 0 0.15rem;
    span {
      vertical-align: top;
      .icon-jiantou {
        font-size: 0.24rem;
        vertical-align: top;
      }
    }
  }
}
</style>
