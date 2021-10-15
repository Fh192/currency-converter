import axios from 'axios';

export const apiKey = 'OcYxup70EMV725EY7WkPuqgKZ';

export const instance = axios.create({
  baseURL: 'https://fcsapi.com/api-v3/forex/',
});
