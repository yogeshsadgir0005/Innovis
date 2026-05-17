import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://innovis-y105.onrender.com/api',
    headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;