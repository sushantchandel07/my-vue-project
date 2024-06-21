<template>
  <div>
    <div></div>
    <div class="d-flex flex-wrap">
      <div
        v-for="product in products"
        :key="product.id"
        class="card"
        style="width: 18rem; margin: 1rem"
      >
        <img
          :src="getProductImageUrl(product)"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <p class="card-text">${{ product.price }}</p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProducts } from "../../services/productService";

export default {
  name: "productData",
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
.card {
  margin: 1rem;
}
</style>
