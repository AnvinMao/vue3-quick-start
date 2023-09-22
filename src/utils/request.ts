import axios, {
  type InternalAxiosRequestConfig,
  type AxiosRequestConfig,
  type AxiosInstance,
  type AxiosResponse,
} from 'axios';
import localStore from './storage';

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 30000,
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {

    const token = localStore.getAuthToken();
    if (token != null) {
      config.headers['sessionid'] = token;
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: any) => {
    const res = error.response;
    console.log('API Error', res);
    return Promise.reject(res);
  }
);

export const http = {

  get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<CommonResponse<T>> {
    return service.get(url, config);
  },

  post<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<CommonResponse<T>> {
    return service.post(url, data, config);
  },

  put<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<CommonResponse<T>> {
    return service.put(url, data, config);
  },

  delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<CommonResponse<T>> {
    return service.delete(url, config);
  }
};

export default service;