import axios from "axios";

const service = axios.create({
    timeout: 10 * 1000
});

service.interceptors.request.use((config) => {
    return config;
}, error => {
    return Promise.reject(error);
})

service.interceptors.response.use((response) => {
    return response.data;
}, error => {
    return {
        address: null,
        ip: null,
        type: null,
        version: null
    };
})

export default service;