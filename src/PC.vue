<template>
  <div>
    <p>该项目仅在移动端显示,请用手机访问</p>
  </div>
</template>

<script>
export default {
  name: "PC",
  mounted() {
    if (this._isMobile()) {
      this.$router.replace("/");
    }
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  }
};
</script>
<style scoped>
div {
  width: 360px;
  height: 100px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
p {
  font-size: 20px;
}
</style>
