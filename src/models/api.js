import axios from "axios";
import StorageService from '../helpers/StorageService';

const api = axios.create({
    baseURL: "https://petadopt-ejkh.onrender.com",
    timeout: 60000, 
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    async (config) => {
        try {
          
            const token = await StorageService.getToken(); 
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        } catch (error) {
            return Promise.reject(error);            
        }
    },
    (error) => {
        return Promise.reject(error); 
    }
);
export const userAPI = {
  login: (data) => api.post("/api/user/login", data),
  register: (data) => api.post("/api/user/register", data),
};
export const ENDPOINTS = {
        register: "/api/user/register",
        login: "/api/user/login",
};
export default api;