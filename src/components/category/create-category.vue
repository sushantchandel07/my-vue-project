<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit="createCategory" method="post">
              <input
                class="form-control"
                placeholder="Add Category"
                v-model="categories.category"
              />
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, Axios);

export default {
  name: "CreateCategory",
  data() {
    return {
      categories: {
        category: "",
      },
    };
  },
  methods: {
    createCategory(e) {
      e.preventDefault();
      const data = {
        name: this.categories.category,
      };
      this.axios.post("http://127.0.0.1:8000/api/categories", data)
        .then((response) => {
          console.log(response);
          this.$emit('category-created', response.data);  
          this.categories.category = "";  
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style scoped></style>
