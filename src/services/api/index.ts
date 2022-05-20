import axios, { AxiosError, AxiosRequestHeaders } from 'axios';
import { Platform } from 'react-native';

const IOS = '3';
const ANDROID = '2';
const getPlatform = () => (Platform.OS === 'ios' ? IOS : ANDROID);

const apiVersion = 'v1';
const apiUrl = 'https://dev-api.aao-tech.com/';

const instance = axios.create({
  baseURL: `${apiUrl}${apiVersion}`,
});

export async function post<T>(url: string, data?: unknown, headers?: AxiosRequestHeaders): Promise<T> {
  try {
    data['platform'] = getPlatform();
    const response = await instance.post<T>(url, data, { headers });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err.response?.data;
  }
}

export async function get<T>(url: string, data: unknown, headers?: AxiosRequestHeaders): Promise<T> {
  try {
    const response = await instance.post<T>(url, data, { headers });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw err.response?.data;
  }
}
