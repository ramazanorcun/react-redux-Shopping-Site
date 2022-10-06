import {
  ADD_PARENT_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORY,
  PUT_CATEGORY,
} from "../Actions/actionTypes";

const initialState = [];
function categoryReducer(categories = initialState, action) {

  const { type, payload } = action;
  console.log(categories);
  switch (type) {
    case GET_CATEGORY:
      return payload.data;
      case ADD_PARENT_CATEGORY:
        categories = [...categories, action.payload];
        return categories;

    // case ADD_PARENT_CATEGORY:
    //   return [...categories, payload];
      
    case PUT_CATEGORY:
      console.log(payload);
      return [...categories,payload];
      // return categories.map((category) => {
      //   if(category.id === payload.id){
      //     return{
      //       ...category,
      //       ...payload
      //     };
      //   }else{
      //     return category;
      //   }
      // });

    case DELETE_CATEGORY:
      return categories.filter(({ id }) => id !== payload.id);
      // return [...state,payload];

    default:
      return categories;
  }
}
export default categoryReducer;
