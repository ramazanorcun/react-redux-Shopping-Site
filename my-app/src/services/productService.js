import axios from "axios";
import http from "../Helpers/Http";

const getAll = () => {
  return http.get("/products");
}
export const cartItems=[]
const addProduct = (name,sub_category_id,price,file) => {
  let token = localStorage.getItem('token')
  return axios
    .post('https://projectone.proxolab.com/api/product', {name,sub_category_id,price,file},{
      headers: { Authorization: `Bearer ${token}`,
      ContentType: "multipart/form-data", }
      
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
  });
 
}


const ProductService ={
    getAll,
    addProduct
    
}

export default ProductService;