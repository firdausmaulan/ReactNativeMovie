import axios from 'axios';
import ApiConfig from '../api/ApiConfig';
import {getToken} from '../storage/AppStorage';

const apiClient = axios.create({
  baseURL: ApiConfig.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const getRequest = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, {params});
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};

export const postRequest = async (endpoint, data = {}) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

export default apiClient;
