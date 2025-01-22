import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data.products;
};

export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data.users;
};

export const updateProduct = async (id, data) => {
  const response = await axios.put(`${API_URL}/products/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/products/${id}`);
  return response.data;
};

