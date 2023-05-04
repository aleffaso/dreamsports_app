import { AxiosRequestHeaders } from 'axios';
import { HttpDefaultHeaders, HttpResponse } from '../http/types';

export const CUSTOM_HEADERS: { [Properties in HttpDefaultHeaders]: AxiosRequestHeaders } = {
  JSON: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  DATA: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data'
  },
  TEXT_PLAIN: {
    Accept: '*/*',
    'Content-Type': 'text/plain'
  }
};

export const result: HttpResponse = {
  code: 0,
  data: {},
  error: false,
  messageError: ''
};
