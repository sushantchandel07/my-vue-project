import axios from "axios";
const API_URL = "http://127.0.0.1:8000/api/";

export const getcategories = () => {
  return axios
    .get(`${API_URL}view-categories`)
    .then((response) => response.data.product.data)
    .catch((error) => {
      console.error("There is an error fetching the category:", error);
      throw error;
    });
};
