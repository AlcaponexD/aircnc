import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:555',
});

export default api;