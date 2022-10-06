import ProductService from "../services/productService";

import { ADD_PRODUCT, GET_PRODUCT } from "./actionTypes";
export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await ProductService.getAll();
    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
    
  } catch (err) {
    console.log(err);
  }
};
export const addProduct =(name,sub_category_id,price,file) =>async (dispatch) =>{
  try {
    const res =await ProductService.addProduct(name,sub_category_id,price,file)
    dispatch({
      type:ADD_PRODUCT,
      payload:res.data
      
    })
    return Promise.resolve(res.data)
   
    
  } catch (error) {
    return Promise.reject(error)
    
  }
}
