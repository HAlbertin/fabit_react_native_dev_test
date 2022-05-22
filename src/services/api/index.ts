import axios, { AxiosError, AxiosRequestHeaders } from 'axios';
import FormatUtils from '../../utils/format';
import PlatformUtils from '../../utils/platform';

const apiVersion = 'v1';
const apiUrl = 'https://dev-api.aao-tech.com/';

const instance = axios.create({
  baseURL: `${apiUrl}${apiVersion}`,
});

const post = async <T>(url: string, data?: unknown, headers?: AxiosRequestHeaders): Promise<T> => {
  try {
    data['platform'] = PlatformUtils.getPlatform();
    const response = await instance.post(url, data, { headers });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err.response?.data;
  }
};

const get = async <T>(url: string, params?: string[], headers?: AxiosRequestHeaders): Promise<T> => {
  try {
    const response = await instance.get(FormatUtils.formatUrl(url, params), { headers });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err.response?.data;
  }
};

const ApiService = {
  post,
  get,
};

export default ApiService;
