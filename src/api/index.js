import { create } from "apisauce";

// eslint-disable-next-line no-unused-vars
const dev = "http://localhost:3004";
const prod = "https://my-json-server.typicode.com/cArlitXs/monpla";

const api = create({
  baseURL: prod,
});

const products = {
  getProducts: () => api.get("/products"),
  getProduct: (id) => api.get(`/products/${id}`),
  getProductsByCategory: (id) => api.get(`/category/${id}/products`),
};

const orders = {
  getOrders: () => api.get("/orders"),
  getOrder: (id) => api.get(`/orders/${id}`),
  postOrder: (order) => api.post(`/orders`, order),
};

const categories = {
  getCategories: () => api.get("/category"),
  getCategory: (id) => api.get(`/category/${id}`),
};

const API = {
  products,
  orders,
  categories,
};

export default API;
