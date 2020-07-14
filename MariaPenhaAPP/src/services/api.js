import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.100:3000/api/v1'
    // baseURL: 'http://172.20.10.14:3000/api/v1'
});

export default api;