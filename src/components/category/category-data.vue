<template>
    <div>
      <ul v-if="category && category.length">
        <li v-for="cat in category" :key="cat.id">
          {{ cat.name }}
        </li>
      </ul>
      <div v-else>
        Loading categories...
      </div>
    </div>
  </template>
  <script>
  import Vue from "vue";
  import Axios from "axios";
  import VueAxios from "vue-axios";
  
  Vue.use(VueAxios, Axios);
  
  export default {
    data() {
      return {
        category: null,
      };
    },
    mounted() {
      this.axios.get("http://127.0.0.1:8000/api/view-categories").then((resp) => {
        this.category = resp.data;
      });
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  