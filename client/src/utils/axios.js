import axios from 'axios';

// The API sleeps on Render's free tier and takes about a minute to wake, so a
// first request after an idle period is slow rather than broken. The timeout is
// generous enough to survive that; the UI explains the wait.
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 90000,
});

export default axiosInstance;