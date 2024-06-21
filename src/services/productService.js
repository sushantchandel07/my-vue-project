import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

export const getProducts = () => {
  return axios
    .get(`${API_URL}view-products`)
    .then((response) => response.data.product.data)
    .catch((error) => {
      console.error("There is an error fetching the products:", error);
      throw error;
    });
};
