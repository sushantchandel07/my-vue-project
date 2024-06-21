import Vue from "vue";
import Router from "vue-router";
import productData from "@/components/products/product-data.vue";
// use router
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: productData,
    },
  ],
});
