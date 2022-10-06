
import axios from "axios";
import http from "../Helpers/Http";

const getAll = () => {
  return http.get("/categories");
}
const addParentCategory = (name) => {
  let token = localStorage.getItem('token')
  return axios
    .post('https://projectone.proxolab.com/api/category', {name},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
 
}
const putCategory = (category_id,name) => {
  let token = localStorage.getItem('token')
  
  return axios
    .put('https://projectone.proxolab.com/api/category', {category_id,name},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
 
}
const deleteCategoryService = (category_id) => {
  let token = localStorage.getItem('token')
  return axios
    .delete('https://projectone.proxolab.com/api/category', {category_id},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
 
}



const CategoryServices ={
    getAll,
    addParentCategory,
    putCategory,
    deleteCategoryService

}

export default CategoryServices;