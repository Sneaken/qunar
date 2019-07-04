import Vue from "vue";

//引入css文件
import "style/reset.css";
import "style/border.css";
import "./assets/style/iconfont.css";

import App from "./App.vue";
import router from "./router/router";
import store from "./store";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
