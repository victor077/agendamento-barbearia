; import { AxiosError, AxiosResponse } from 'axios';

export class AxiosErrorHttpClient extends AxiosError { }

export interface AxiosErrorResponse extends AxiosResponse { }