import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:7215',
});

export default instance;