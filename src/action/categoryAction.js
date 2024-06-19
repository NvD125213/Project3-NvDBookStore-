import axios from "axios";
import {useState, useEffect} from "react";
import swal from "sweetalert";

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


export const fetchSubcategories = async (parentId) => {
  try {
    const response = await axios.get(`/api/categories/getSubCategories/${parentId}`);
    return response.data
  } 
  catch(error) {
    throw error
  }
};



export const fetchCategoriesUser = async () => {
  try {
    const response = await axios.get(`/api/categories/getParent`);
    return response.data
  } 
  catch(error) {
    throw error
  }
}
export const useCategoryParentID = () => {
  const [parentName, setParentName] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
      axios.get(`/api/categories/getAll`)
          .then(response => {
            setParentName(response.data);
          })
          .catch(error => {
              console.error('There was an error fetching the categories!', error);
          });
  }, []);

  return {
    parentName,
      selectedCategory,
      setSelectedCategory,
  };
};
export const addCategory = async ({ name, parentID }) => {
  try {
      const response = await axios.post(`/api/categories/create`, {
          name: name,
          parentID: parentID
      });
      if (response.data.status === 200) {
        swal("Success", response.data.message, "success");
      }
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const updateCategory = async (id, name, parentID) => {
  try {
    const response = await axios.put(`/api/categories/update/${id}`, {
      name,
      parentID
    });
    if(response.data.status === 200) {
      swal("Success", response.data.message, "success");
    }
    return response.data;

  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`/api/categories/delete/${id}`)
    return response.data
  }catch(error) {
    throw error
  }
}