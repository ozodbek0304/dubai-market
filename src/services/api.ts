import axios from 'axios';
export const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/`;
export const api = axios.create({
    baseURL: baseURL,
    timeout: 30000,
});

api.interceptors.request.use(
    (config:any)  => {
        const storedToken = localStorage.getItem('user');
        if (storedToken) {
            try {
                const token = JSON.parse(storedToken).access;
                if (token) {
                    config.headers = {
                        ...config.headers,
                        Authorization: `Bearer ${token}`,
                    };
                }
            } catch (error) {
                console.error("Error parsing stored token:", error);
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

