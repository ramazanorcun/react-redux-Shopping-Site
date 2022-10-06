import {  ADD_PRODUCT, GET_PRODUCT } from "../Actions/actionTypes";

const products = [];
function productReducer(state = products, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
      return payload.data;
      
      case ADD_PRODUCT:
        return[...state,payload]

    default:
      return state;
  }
}
export default productReducer;
