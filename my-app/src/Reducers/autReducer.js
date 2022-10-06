import { Navigate } from 'react-router-dom';
import * as actionTypes from '../Actions/actionTypes'

const autState =  {
    user:{email:"", id:0, name:""},
    isAuthenticated:false,
    error:false,
    errorMessage:""
}
const authReducer =(state=autState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            console.log(action.type);
            return {
                ...state ,
                user:action.user,
                isAuthenticated:true,
                error:false,
                errorMessage:""
            };
    
            case actionTypes.LOGIN_ERROR:
            
            return {
                ...state ,
                user:"",
                isAuthenticated:false,
                error:true,
                errorMessage:alert(
                    "hatalı giriş yaptınız "
                ).LOGIN_ERROR =
                Navigate("/")
            };
            
            case actionTypes.LOGOUT:
                return {
                    user:"",
                }
        default:
            return state;
    }
}

export default authReducer;