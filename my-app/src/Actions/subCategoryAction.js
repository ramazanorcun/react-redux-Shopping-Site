import subCategoryServices from "../services/subCategoryService";
import { ADD_SUB_CATEGORY, DELETE_SUB_CATEGORY, GET_SUBCATEGORY, PUT_SUBCATEGORY } from "./actionTypes";


export const getALLSubCategories = ()=> async (dispatch) => {
    try {
        const res = await subCategoryServices.getAll({});
        dispatch({
        type: GET_SUBCATEGORY,
        payload: res.data,
    })
    } catch (err) {
        console.log(err)
    }
}
export const addSubCategory =(category_id,name) =>async (dispatch) =>{
    try {
      const response =await subCategoryServices.addSubCategory(category_id,name)
      dispatch({
        type:ADD_SUB_CATEGORY,
        payload:response.data
      })
      return Promise.resolve(response.data)
      
    } catch (error) {
      return Promise.reject(error)
      
    }
  }
  export const putSubCategory =(sub_category_id,category_id,name) =>async (dispatch) =>{
    try {
      const res =await subCategoryServices.putSubCategory(sub_category_id,category_id,name)
   
      dispatch({
        type:PUT_SUBCATEGORY,
        payload:res.data
        
      })
      return Promise.resolve(res.data)
     
      
    } catch (error) {
      return Promise.reject(error)
      
    }
  }
  export const DeleteSubCategoriesAction =(sub_category_id) =>async (dispatch) =>{
    try {
      const res =await subCategoryServices.DeleteSubCategoryService(sub_category_id)
   
      dispatch({
        type:DELETE_SUB_CATEGORY,
        payload:{sub_category_id}
      })
      return Promise.resolve(res.data)
     
      
    } catch (error) {
      return Promise.reject(error)
      
    }
  }
 