import axios from 'axios';
import { setAuthorazitionToken } from '../Helpers/SetAuthorationToken';

const login = (email, password ) => {
    const user ={email:email, password:password}
    return axios.post('https://projectone.proxolab.com/api/auth/login', user)
    .then(respose=> {
        if (respose.data.status === 'success') {
            const {token} =respose.data.authorization.token;
            localStorage.setItem("token",token);
            let user = {}
            user =respose.data.user;
            localStorage.setItem("userName",user.name);
            setAuthorazitionToken(token);
        }
        return respose.data.user;
    })
    .catch(err => console.log(err));
}
const logout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("userName")
    setAuthorazitionToken(false);
}
const auth ={
    login,logout
}

export default auth;