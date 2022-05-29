import axios from "axios"
import { API_TOKEN } from '../consts/index'

axios.interceptors.request.use(function (config) {
    config.headers.authorization = API_TOKEN
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});