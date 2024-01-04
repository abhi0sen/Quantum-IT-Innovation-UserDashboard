import cookie from "js-cookie"
import axios from "axios"

export const setCookie = (key, value) => {
    cookie.set(key, value, {expires: 1});
}
export const getCookie = (key) => {
    return cookie.get(key);
};
export const removeCookie = (key) => {
    cookie.remove(key);
    };

export const setAuthentication = (token) => {
    setCookie("token", token);
}
export const logOut = () => {
    removeCookie("token")
    removeCookie("userId")
}
export const isLogin = async () =>  {
    const token = getCookie("token")
    if(token){
        const res = await axios.post(`http://localhost:5000/api/auth/`, {token})
        console.log("Result", res)
        return res;
    }
    else{
        return false;
    }
}