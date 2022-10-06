import { ADD_TO_CART } from "../Actions/cartAction";
import { cartItems } from "../services/productService";


const initialState={
    cartItems:cartItems
}
    


function cartReducer(state=initialState,{type,payload}) {
    switch (type) {
        case ADD_TO_CART:
          let product = state.cartItems.find(c => c.product.id === payload.id);
          if (product) {
            product.quantity++;
            return {
              ...state,
            };
          } else {
            return {
              ...state,
              cartItems: [...state.cartItems, { quantity: 1, product: payload }],
            };
          }
    
        default:
            return state;
    }
}
export default cartReducer