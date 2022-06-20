import { BaseQueryFn, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      headers?: AxiosRequestHeaders;
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown,
    {},
    FetchBaseQueryMeta
  > =>
  async ({ url, method = 'get', data, headers, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, headers, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
