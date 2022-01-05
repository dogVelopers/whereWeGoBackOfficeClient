import axios, { AxiosError, AxiosResponse } from 'axios';

const instance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const responseInterceptorFulfilled = (res: AxiosResponse) => {
  if (200 <= res.status && res.status < 300) return res.data;

  return Promise.reject(res.data);
};

const responseInterceptorRejected = (error: AxiosError) => {
  return new Error(error.response?.data ?? error);
};

instance.interceptors.response.use(
  responseInterceptorFulfilled,
  responseInterceptorRejected
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}
