<template>
  <div class="mt-4 p-3">
    <h2 class="pb-3">Categories</h2>
    <ul class="list-group" v-if="category && category.length">
      <li v-for="cat in category" :key="cat.id">
        {{ capitalizeFirstLetter(cat.name) }}
      </li>
    </ul>
    <div v-else>Loading categories...</div>
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Category
      </button>
    </div>
    <create-category @category-created="addCategory"></create-category>
  </div>
</template>

<script>
import Vue from "vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import CreateCategory from "./create-category.vue";

Vue.use(VueAxios, Axios);

export default {
  data() {
    return {
      category: null,
    };
  },
  components: {
    CreateCategory,
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      this.axios
        .get("http://127.0.0.1:8000/api/view-categories")
        .then((resp) => {
          this.category = resp.data;
        });
    },
    capitalizeFirstLetter(string) {
      if (!string) return string;
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    addCategory(newCategory) {
      this.category.push(newCategory);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  padding: 10px;
}
li:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
