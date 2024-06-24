<template>
  <div class="d-flex">
    <div class="sidebar">
      <categoryData />
    </div>
    <div class="content d-flex flex-wrap">
      <div
        v-for="product in products"
        :key="product.id"
        class="card"
        style="width: 18rem; margin: 1rem"
      >
        <img
          :src="getProductImageUrl(product)"
          class="card-img-top"
          alt="product-Images"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <p class="card-text">${{ product.price }}</p>
          <div class="btn-group">
            <button class="btn btn-info">View</button>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProducts } from "../../services/productService";
import categoryData from "../category/category-data.vue";

export default {
  name: "productData",
  components: {
    categoryData,
  },

  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProductImageUrl(product) {
      return product.productimages[0].url;
    },
  },

  mounted() {
    getProducts()
      .then((products) => {
        this.products = products;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

</script>

<style scoped>
.d-flex {
  display: flex;
}

.sidebar {
  width: 250px;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  background-color: #1e232f;
  color: white;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  padding: 10px 15px;
  text-decoration: none;
  color: white;
  display: block;
}

.sidebar li:hover {
  background-color: #575757;
}

.content {
  margin-left: 250px;
  padding: 20px;
  flex-grow: 1;
}

.card {
  margin: 1rem;
  position: relative;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-body {
  position: relative;
}

.btn-group {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.card-body .btn-group {
  display: none;
}

.card:hover .btn-group {
  display: flex;
}
</style>
