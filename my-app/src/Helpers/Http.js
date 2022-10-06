import axios from 'axios';

export default axios.create ({
    baseURL :"https://projectone.proxolab.com/api",
    headers:{
        "Content-type":"application.json",
        "Authorization":"Bearer"+ localStorage.getItem("token") 
    }
})