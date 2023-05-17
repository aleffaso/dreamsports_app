import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { HttpDefaultHeaders, HttpParamsRequest } from '../http/types';
import { CUSTOM_HEADERS } from './constants';
import { destroyCookie, parseCookies } from 'nookies';
import { KEYS } from '../../constants';
import { createJWTCookie } from '../../utils';
import { HttpResponse } from '../http/types';
import { authServices } from '../../contexts/auth/services';

export const client = (
  baseUrl: string,
  defaultHeader: HttpDefaultHeaders = 'JSON',
  headers?: AxiosRequestHeaders
) => {
  const unitedHeaders = {
    ...CUSTOM_HEADERS[defaultHeader],
    ...(headers || {})
  };
  const configRequest: AxiosRequestConfig = {
    baseURL: baseUrl,
    timeout: 300000,
    headers: unitedHeaders
  };
  const instance = axios.create(configRequest);

  instance.interceptors.request.use(
    async (config) => {
      const token = parseCookies()[KEYS.STORAGE.USER.TOKEN];
      if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(undefined, async (err) => {
    if (err.response) {
      if (err.response.status === 401 && !err.config._retry) {
        err.config._retry = true;
        try {
          const refresh = parseCookies()[KEYS.STORAGE.USER.REFRESH_TOKEN];
          const { data, error } = await authServices.revalidateToken(refresh);
          if (!error) {
            createJWTCookie(data.token, KEYS.STORAGE.USER.TOKEN);
            createJWTCookie(data.refreshToken, KEYS.STORAGE.USER.REFRESH_TOKEN);
            return instance(err.config);
          }
          destroyCookie(null, KEYS.STORAGE.USER.TOKEN, { path: '/' });
          destroyCookie(null, KEYS.STORAGE.USER.REFRESH_TOKEN, { path: '/' });
        } catch (error) {
          return Promise.reject(error);
        }
      }
      return err.response;
    }
    return false;
  });
  return instance;
};

export const core = async <T>(
  params: HttpParamsRequest,
  method: () => Promise<AxiosResponse<T>>
) => {
  let response: AxiosResponse<T> = {} as AxiosResponse<T>;
  const result: HttpResponse = { codeSuccess: 0, data: {}, error: false, messageError: '' };
  const validations = params.validations;

  try {
    response = await method();
    if (typeof response === 'boolean') {
      throw new Error('Error while connecting to API server');
    }
    if (validations?.others) {
      validations.others(response.status, response.data);
    }
    if (!!validations?.codeSuccess && response.status !== validations?.codeSuccess) {
      throw new Error(
        (response.data as any)[validations.paramMessageError || 'Error'] || validations.messageError
      );
    }
    result.data = response.data;
  } catch (error) {
    result.error = true;
    result.codeSuccess = response?.status || 500;
    result.messageError = (error as Error).message ?? validations?.messageError;
  }
  return {
    response,
    result: result as HttpResponse<T>
  };
};
