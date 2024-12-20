import { getToken } from "../utils/jwt-helper";
export const API_URLS = {
    GET_PRODUCTS:'/products',
    GET_PRODUCT: (id) => `/products/${id}`,
    GET_CATEGORIES:`/categories`,
    GET_CATEGORY: (id) => `/categories/${id}`,
}

export const API_BASE_URL = 'http://localhost:8080';

export const getHeaders = ()=>{
    return {
        'Authorization':`Bearer ${getToken()}`
    }
}