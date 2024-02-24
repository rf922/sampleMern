import axios from "axios";

const customAxios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
});

/**
 * use this custom axios object to make requests to the server
 * EX: customAxios.post('/user/login') == axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {}, {withCredentials: true})
 */

export default customAxios;
