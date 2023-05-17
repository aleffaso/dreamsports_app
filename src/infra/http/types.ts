export type HttpDefaultHeaders = 'JSON' | 'DATA' | 'TEXT_PLAIN';

export type HttpHeaders = {
  [x: string]: string | number | boolean;
};

export type HttpRequestTypes = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type HttpResponse<T = unknown | unknown[]> = {
  codeSuccess?: number;
  data: T;
  error: boolean;
  messageError?: string;
};

export type StandardResponse<T = unknown | unknown[]> = {
  status: {
    code: number;
    responseType: string;
    message: string;
  };
  result: T;
};

export type HttpParamsRequest<T = unknown, S = unknown> = {
  data?: T;
  config?: S;
  host: string;
  path: string;
  headers?: HttpHeaders;
  defaultHeaders?: HttpDefaultHeaders;
  validations?: {
    messageError?: string;
    codeSuccess?: number;
    paramMessageError?: string;
    others?: (status: number, data: unknown) => void;
  };
};
