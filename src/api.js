import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = (limit = 10, skip = 0) => 
  axios.get(`${API_URL}?limit=${limit}&skip=${skip}`);

export const fetchProductDetails = (productId) => 
  axios.get(`${API_URL}/${productId}`);
