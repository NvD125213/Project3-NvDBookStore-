import axios from "axios";
export const fetchCategories = async (page, pageSize) => {
    try {
      await axios.get('/sanctum/csrf-cookie');
      const response = await axios.get(`/api/categories/getAllWithPaginate?page=${page}&pageSize=${pageSize}`);
      return response.data;

    } catch (error) {
      console.error("Error fetching categories", error);
      return [];
    }
  };