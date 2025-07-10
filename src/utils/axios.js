/**
 * axios setup to use mock service
 */

import axios from 'axios';

const axiosServices = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3500/'
});

// request interceptor to add auth token
axiosServices.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('serviceToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// interceptor for http
axiosServices.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Axios error:', error);
        // If it's a 401 error, it might be an authentication issue
        if (error.response && error.response.status === 401) {
            console.warn('Authentication error detected');
        }
        return Promise.reject((error.response && error.response.data) || 'Wrong Services');
    }
);

// ==============================|| STATIC PAGES API ||============================== //
export const staticPagesApi = {
    getPageByType: (type) => axiosServices.get(`/api/pages/${type}`),
    createPage: (data) => axiosServices.post('/api/pages', data),
    updatePageByType: (type, data) => axiosServices.put(`/api/pages/${type}`, data),
    deletePageByType: (type) => axiosServices.delete(`/api/pages/${type}`)
};

export default axiosServices;
