import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("components/home/Home")
    },
    {
      path: "/city",
      name: "city",
      component: () => import("components/city/City")
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("components/detail/Detail")
    },
    {
      path: "/week/:id",
      name: "week",
      component: () => import("components/week/Week")
    },
    {
      path: "/PC",
      name: "PC",
      component: () => import("../PC.vue")
    }
  ]
});
