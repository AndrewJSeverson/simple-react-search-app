import axios from 'axios';

export const responseInterceptor = (response) => response.data;
export const requestInterceptor = (defaultConfig) => {
  const config = defaultConfig;
  // config.headers.authorization = `Bearer ${TOKEN_HERE}`;
  return config;
};

export default class HttpService {
  constructor({ baseURL = '/api' } = {}) {
    this.baseURL = baseURL;
    this.http = axios.create({
      baseURL,
      headers: { 'content-type': 'application/json' },
    });

    this.http.interceptors.request.use(requestInterceptor);
    this.http.interceptors.response.use(responseInterceptor, (error) => Promise.reject(error.response));
  }

  get(url) {
    return this.http.get(encodeURI(url));
  }

  post(url, body) {
    return this.http.post(encodeURI(url), body);
  }

  put(url, body) {
    return this.http.put(encodeURI(url), body);
  }

  patch(url, body) {
    return this.http.patch(encodeURI(url), body);
  }

  delete(url) {
    return this.http.delete(encodeURI(url));
  }
}
