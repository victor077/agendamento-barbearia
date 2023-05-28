import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";
import { HttpDeleteParams, HttpGetParams, HttpPostParams, HttpPutParams, IHttpClient } from "../protocolosHtpp/IHttpCliente";
import { HttpResponse } from "../protocolosHtpp/http_response";
import { AxiosErrorHttpClient } from "./AxiosHttpClient";
import { HttpConfig } from "./Types";

export class AxiosHttpClient implements IHttpClient<any, any> {
  private instance: AxiosInstance;
  private httpConfig: HttpConfig;
  private static instanceClient: IHttpClient<any, any>;

  protected constructor(httpConfig: HttpConfig) {
    this.instance = axios.create({ baseURL: httpConfig.baseUrl });
    this.httpConfig = httpConfig;
  }

  static create(httpConfig: HttpConfig) {
    if (!AxiosHttpClient.instanceClient) {
      AxiosHttpClient.instanceClient = new AxiosHttpClient(httpConfig);
    }

    return AxiosHttpClient.instanceClient;
  }

  private getHeaders(): AxiosRequestHeaders {
    let headers = {};

    this.httpConfig.headers?.forEach((header) => {
      const headerName = Object.keys(header)[0];
      const headerValue = Object.values(header)[0];

      headers = { ...headers, [headerName]: headerValue() };
    });

    return headers as AxiosRequestHeaders;
  }

  async get(httpGetParams: HttpGetParams): Promise<HttpResponse<any>> {
    try {
      const headers = this.getHeaders();

      const httpResult = await this.instance.get(httpGetParams.url, {
        headers: { ...headers },
      });

      return {
        body: httpResult.data,
        statusCode: httpResult.status,
      };
    } catch (error) {
      const err = error as AxiosErrorHttpClient;
      throw err;
    }
  }

  async post(httpPostParams: HttpPostParams<any>): Promise<HttpResponse<any>> {
    try {
      const headers = this.getHeaders();

      const httpResult = await this.instance.post(
        httpPostParams.url,
        httpPostParams.body,
        {
          headers: { ...headers },
        }
      );

      return {
        body: httpResult.data,
        statusCode: httpResult.status,
      };
    } catch (error) {
      const err = error as AxiosErrorHttpClient;

      throw err;
    }
  }

  async put(httpPutParams: HttpPutParams<any>): Promise<HttpResponse<any>> {
    try {
      const headers = this.getHeaders();

      const httpResult = await this.instance.put(
        httpPutParams.url,
        httpPutParams.body,
        {
          headers: { ...headers },
        }
      );

      return {
        body: httpResult.data,
        statusCode: httpResult.status,
      };
    } catch (error) {
      const err = error as AxiosErrorHttpClient;

      throw err;
    }
  }

  async delete(httpDeleteParams: HttpDeleteParams): Promise<HttpResponse<any>> {
    try {
      const headers = this.getHeaders();

      const httpResult = await this.instance.delete(
        httpDeleteParams.url,
        {
          headers: { ...headers },
        }
      );

      return {
        body: httpResult.data,
        statusCode: httpResult.status,
      };
    } catch (error) {
      const err = error as AxiosErrorHttpClient;

      throw err;
    }
  }
}
