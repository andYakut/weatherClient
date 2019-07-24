import axioslib from 'axios';

const axios =  axioslib.create({
  baseURL: 'http://localhost:3001',
});

axios.interceptors.request.use(
  config => {
    config.headers['Token'] = localStorage.getItem("token");
    return config;
  },
  error => Promise.reject(error)
);

export default axios;