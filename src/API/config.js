import Axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://ec2-18-190-25-82.us-east-2.compute.amazonaws.com";
Axios.defaults.baseURL = `${API_BASE_URL}/api/v1`;

/**
 * Axios public instance
 */
const axios = Axios.create({
    headers: {
        Accept: "application/json",
    },
});


// Set the AUTH token for any request
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});

export  default axios;
