import axios from "axios";

export const getProduct = async () => {
    try {
      const response = await axios.get(`/api/product/getAll`);
      return response.data; 
    } catch (error) {
      console.error('Error fetching products:', error);
      return []; 
    }
};

export const getProductWithPaginate = async (page, pageSize) => {
  try {
    const response = await axios.get(`/api/product/paginate?page=${page}&pageSize=${pageSize}`)
    return response.data;

    } catch (error) {
      console.error("Error fetching categories", error);
      return [];
    }
}

export const getCartProduct = async (list) => {
  try {
    const res = await axios.get('/api/product/getProductCart', {
      params: { list: JSON.stringify(list) }
    });
    return res.data.products;
  } catch (error) {
    console.error("Lỗi", error);
    return [];
  }
}