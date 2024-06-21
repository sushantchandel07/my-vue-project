<template>
  <div id="app">
    <commonHeader></commonHeader>
    <!-- <userSignup message = "this is my first message "></userSignup> -->
    <productData></productData>
    <categoryData></categoryData>
    <commonFooter></commonFooter>
   
  </div>
</template>
<script>
import commonFooter from "./components/common/common-footer.vue";
import commonHeader from "./components/common/common-header.vue";
// import userSignup from "./components/user/user-signup.vue";
import productData from "./components/products/product-data.vue";
import categoryData from "./components/category/category-data.vue";
export default {
  name: "App",
  components: {
    commonFooter,
    commonHeader,
    categoryData,
    productData
  },
};
</script>
