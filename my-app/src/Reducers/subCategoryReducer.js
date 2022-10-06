import {
  ADD_SUB_CATEGORY,
  DELETE_SUB_CATEGORY,
  GET_SUBCATEGORY,
  PUT_SUBCATEGORY,
} from "../Actions/actionTypes";

const initialState = [];
function subCategoryReducer(subCategories = initialState, action) {
  console.log(subCategories);
  const { type, payload } = action;
  switch (type) {
    case GET_SUBCATEGORY:
      return payload.data;

      case ADD_SUB_CATEGORY:
        subCategories = [...subCategories, action.payload];
        return subCategories;

    case PUT_SUBCATEGORY:
      return subCategories.map((subCategory) =>{
        if(subCategory.id === payload.id){
            return {
                ...subCategory,
                ...payload
        };}
        else {
            return subCategory
        }
      }) ;

      case DELETE_SUB_CATEGORY:
        return subCategories.filter(({ id }) => id !== payload.id);
        // return [...state,payload];

    default:
      return subCategories;
  }
}
export default subCategoryReducer;
