import axios from 'axios';

export const access_key = 'OcYxup70EMV725EY7WkPuqgKZ';

const instance = axios.create({
  baseURL: 'https://fcsapi.com/api-v3/forex/',
});

export default instance;
