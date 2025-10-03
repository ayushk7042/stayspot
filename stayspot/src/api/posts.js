import axios from "axios";

export async function publishArticle(postData, token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post("http://localhost:4000/api/posts", postData, config);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export async function fetchPostsByCategory(categorySlug) {
  try {
    const response = await axios.get(`http://localhost:4000/api/posts?category=${categorySlug}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}
