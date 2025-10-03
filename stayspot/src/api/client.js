


import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000/api";

export const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// ---------- Public API calls ----------

export const getHomeFeed = () =>
  api.get("/posts/home").then((res) => res.data);

export const getCategories = () =>
  api.get("/categories").then((res) => res.data);

export const getCategoryFeed = (slug, page = 1, limit = 12) => {
  return fetch(`${API_BASE}/posts/category/${slug}?page=${page}&limit=${limit}`)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to load category posts");
      return res.json();
    })
    .then((data) => ({ data }))
    .catch((error) => {
      throw error;
    });
};

export const getArticle = (slug) =>
  api.get(`/posts/${slug}`).then((res) => res.data);

export const getRelated = (slug) =>
  api.get(`/posts/${slug}/related`).then((res) => res.data);

export const searchPosts = (q, page = 1, limit = 12) =>
  api.get("/search", { params: { q, page, limit } }).then((res) => res.data);

export const listAllPosts = (page = 1, limit = 12) =>
  api.get("/posts", { params: { page, limit } }).then((res) => res.data);

// ---------- Authentication API ----------

export const login = (email, password) =>
  api.post("/auth/login", { email, password }).then((res) => res.data);

// ---------- Admin Protected API calls ----------
// Include JWT token in Authorization header

// Categories
export const createCategory = (token, categoryData) =>
  api
    .post("/admin/categories", categoryData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const updateCategory = (token, categoryId, categoryData) =>
  api
    .put(`/admin/categories/${categoryId}`, categoryData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const deleteCategory = (token, categoryId) =>
  api
    .delete(`/admin/categories/${categoryId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

// Posts
export const fetchAllPostsAdmin = (token, page = 1, limit = 12) =>
  api
    .get("/admin/posts", {
      params: { page, limit },
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const createPostAdmin = (token, postData) =>
  api
    .post("/admin/posts", postData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const updatePostAdmin = (token, postId, postData) =>
  api
    .put(`/admin/posts/${postId}`, postData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const deletePostAdmin = (token, postId) =>
  api
    .delete(`/admin/posts/${postId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

// Users
export const getUsers = (token) =>
  api
    .get("/admin/users", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const updateUser = (token, userId, userData) =>
  api
    .patch(`/admin/users/${userId}`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

// Upload image file to your backend, returns URL string of uploaded image
export const uploadImageAPI = (token, file) => {
  const formData = new FormData();
  formData.append("file", file);

  return api
    .post("/admin/upload", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data.url); // Adjust according to your backend response
};
