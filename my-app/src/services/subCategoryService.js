
import axios from "axios";
import http from "../Helpers/Http";

const getAll = () => {
  return http.get("/subCategories");
}
const addSubCategory = (category_id,name) => {
  let token = localStorage.getItem('token')
  return axios
    .post('https://projectone.proxolab.com/api/subCategory', {category_id,name},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
 
}
const putSubCategory = (sub_category_id,category_id,name) => {
  let token = localStorage.getItem('token')
  return axios
    .put('https://projectone.proxolab.com/api/subCategory', {sub_category_id,category_id,name},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
 
}
const DeleteSubCategoryService = (sub_category_id) => {
  let token = localStorage.getItem('token')
  return axios
    .delete('https://projectone.proxolab.com/api/subCategory', {sub_category_id},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
 
}



const subCategoryServices ={
    getAll,
    addSubCategory,
    putSubCategory,
    DeleteSubCategoryService

}

export default subCategoryServices;