import axios from "axios";

const api = axios.create({
    baseURL: "https://medvision-backend-ejgo.onrender.com/",
});

export default api;