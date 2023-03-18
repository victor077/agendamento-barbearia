import { AxiosErrorHttpClient } from "../axiosHttpClient/AxiosHttpClient";
import { IHttpClient } from "../protocolosHtpp/IHttpCliente";

export abstract class BaseApiService {
  protected httpClient: IHttpClient<any, any>;

  constructor(httpClient: IHttpClient<any, any>) {
    this.httpClient = httpClient;
  }

  protected handleApiError(error: unknown): Error {
    const httpError = error as AxiosErrorHttpClient;

    return httpError;
  }
} 