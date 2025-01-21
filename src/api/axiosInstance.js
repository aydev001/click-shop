import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://yayraserver-production.up.railway.app/api",
    headers: {
        "Content-Type": "aplicatoion/json"
    }
})

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem("authToken")

    if (['post', 'put', 'delete'].includes(config.method) && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, error => {
    return Promise.reject(error);
})

export default axiosInstance