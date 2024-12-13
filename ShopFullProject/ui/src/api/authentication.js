import axios from "axios";
import { API_BASE_URL } from "./constant"


export const loginAPI = async (body)=>{
    const url = API_BASE_URL + '/auth/login';
    try{
        const response = await axios(url,{
            method:"POST",
            data:body
        });
        return response?.data;
    }
    catch(err){
        throw new Error(err);
    }
}

export const registerAPI = async (body)=>{
    const url = API_BASE_URL + '/auth/register';
    try{
        const response = await axios(url,{
            method:"POST",
            data:body
        });
        return response?.data;
    }
    catch(err){
        throw new Error(err);
    }
}

export const verifyAPI = async (body)=>{
    const url = API_BASE_URL + '/auth/verify';
    try{
        const response = await axios(url,{
            method:"POST",
            data:body
        });
        return response?.data;
    }
    catch(err){
        throw new Error(err);
    }
}