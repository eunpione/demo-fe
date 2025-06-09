import { STORAGE_KEYS } from "./constants";


export const saveUser = (loginuser) =>
    localStorage.setItem(STORAGE_KEYS.LOGINUSER, JSON.stringify(loginuser));


export const getUser = () => {
    const loginuser = localStorage.getItem(STORAGE_KEYS.LOGINUSER);
    return loginuser ? JSON.parse(loginuser) : null;
};

export const removeUser =()=>
    localStorage.removeItem(STORAGE_KEYS.LOGINUSER);
    
