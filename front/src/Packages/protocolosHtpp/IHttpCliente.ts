import { HttpResponse } from './http_response';

export type HttpPostParams<T> = {
  url: string;
  body: T;
};

export type HttpGetParams = {
  url: string;
};

export type HttpPutParams<T> = {
  url: string;
  body: T;
};

export type HttpDeleteParams = {
  url: string;
};
export interface IHttpClient<T, R> {
  post: (httpPostParams: HttpPostParams<T>) => Promise<HttpResponse<R>>;
  get: (httpGetParams: HttpGetParams) => Promise<HttpResponse<R>>;
  put: (httpPutParams: HttpPutParams<T>) => Promise<HttpResponse<R>>;
  delete: (httpDeleteParams: HttpDeleteParams) => Promise<HttpResponse<R>>;
};