import categoryServices from "../services/categoryService";

import { ADD_PARENT_CATEGORY,  DELETE_CATEGORY,  GET_CATEGORY, PUT_CATEGORY} from "./actionTypes";

export const getAllCategories = () => async (dispatch) => {
  try {
    const res = await categoryServices.getAll();
    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    });
    
  } catch (err) {
    // console.log(err);
  }
};

export const addParentCategoryAction =(name) =>async (dispatch) =>{
  try {
    const res =await categoryServices.addParentCategory(name)

    dispatch({
      type:ADD_PARENT_CATEGORY,
      payload:res.data
      
    })
    return Promise.resolve(res.data)
   
    
  } catch (error) {
    return Promise.reject(error)
    
  }
}

export const putCategoryAction =(category_id,name) =>async (dispatch) =>{
  try {
    const res =await categoryServices.putCategory(category_id,name)

    dispatch({
      type:PUT_CATEGORY,
      payload:category_id,name
      
    })
    return Promise.resolve(res.data)
   
    
  } catch (error) {
    return Promise.reject(error)
    
  }
}
export const deleteCategoryAction =(category_id) =>async (dispatch) =>{
  try {
    const res =await categoryServices.deleteCategoryService(category_id)

    dispatch({
      type:DELETE_CATEGORY,
      payload:{category_id}
      
    })
    return Promise.resolve(res.data)
   
    
  } catch (error) {
    return Promise.reject(error)
    
  }
}
