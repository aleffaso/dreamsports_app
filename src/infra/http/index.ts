import { AxiosRequestConfig } from 'axios';
import { client, core } from '../axios';
import { HttpParamsRequest, HttpRequestTypes } from './types';

export const HttpClient = <T = unknown, D = unknown, S = unknown>(
  method: HttpRequestTypes,
  { ...params }: HttpParamsRequest<D, S>
) => {
  console.log('aqui ', params);
  const api = client(params.host, params.defaultHeaders, params.headers);
  const config = params.config as AxiosRequestConfig<unknown> | undefined;
  const methods = {
    GET: () => api.get(params.path, config),
    POST: () => api.post(params.path, params.data, config),
    PUT: () => api.put(params.path, params.data, config),
    PATCH: () => api.patch(params.path, params.data, config),
    DELETE: () => api.delete(params.path, config)
  };
  return core<T>(params, methods[method]);
};
