import axioslib from 'axios';

const axios =  axioslib.create({
  baseURL: 'http://localhost:3001',
});

export default axios;