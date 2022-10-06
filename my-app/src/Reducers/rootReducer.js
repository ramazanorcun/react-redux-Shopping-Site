import { combineReducers } from "redux";
import authReducer from "./autReducer";
import productReducer    from './productReducer'
import categoryReducer from './categoryReducer'
import subCategoryReducer from './subCategoryReducer'
import cartReducer from './cartReducer'


let rootReducer = combineReducers ({
    authReducer,
    productReducer,
    categoryReducer,
    subCategoryReducer,
    cartReducer,
    
    
})

export default rootReducer;