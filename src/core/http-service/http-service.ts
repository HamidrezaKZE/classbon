import { API_URL } from "@/configs/global";
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

import {  ApiError  } from "@/types/http-errors.interface";
import { errorHandler, networkErrorStrategy, unhandledExceptionStrategy } from "./http-error-strategies";

//Error Handling

const httpService = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error?.response) {
      networkErrorStrategy(error?.message);
    }

    const statusCode = error.response.status;
    const errorData: ApiError = error.response.data ?? {};
    const handler = errorHandler[statusCode] ?? unhandledExceptionStrategy;
    handler(errorData);
  },
)



//CRUD
async function apiBase<T>(
  url: string,
  options?: AxiosRequestConfig,
): Promise<T> {
  const response: AxiosResponse = await httpService(url, options);
  return response?.data as T;
}

async function readData<T>(
  url: string,
  headers?: AxiosRequestHeaders,
): Promise<T> {
  const options: AxiosRequestConfig = {
    headers: headers,
    method: "GET",
  };
  return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(
  url: string,
  data?: TModel,
  headers?: AxiosRequestHeaders,
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: "POST",
    headers: headers,
    data: JSON.stringify(data),
  };
  return await apiBase<TResult>(url, options);
}
async function updateData<TModel, TResult>(
  url: string,
  data?: TModel,
  headers?: AxiosRequestHeaders,
): Promise<TResult> {
  const options: AxiosRequestConfig = {
    method: "PUT",
    headers: headers,
    data: JSON.stringify(data),
  };
  return await apiBase<TResult>(url, options);
}
async function deleteData(
  url: string,
  headers?: AxiosRequestHeaders,
): Promise<void> {
  const options: AxiosRequestConfig = {
    method: "DELETE",
    headers: headers,
  };
  return await apiBase(url, options);
}

export { readData, createData, updateData, deleteData };
