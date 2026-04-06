import axios from "axios";
import StorageService from '../helpers/StorageService';

const api = axios.create({
    baseURL: "https://petadopt-ejkh.onrender.com",
    timeout: 15000, // Aumentado a 15s porque Render (free tier) tarda en despertar
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

export default api;