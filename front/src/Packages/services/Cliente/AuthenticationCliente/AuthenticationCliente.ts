import { IHttpClient } from "../../../protocolosHtpp/IHttpCliente";
import { HttpResponse } from "../../../protocolosHtpp/http_response";
import { BaseApiService } from "../../BaseApiService";
import { AuthResponse } from "./Models/AuthResponse";
import { CadastroCliente } from "./Models/CadastroCliente";
import { LoginCliente } from "./Models/LoginCliente";
import { IAuthenticationCliente } from "./type";

export class Authenticationcliente extends BaseApiService implements IAuthenticationCliente {

  private static instance: IAuthenticationCliente;

  private constructor(httpClient: IHttpClient<any, any>) {
    super(httpClient);
  }

  static create(httpClient: IHttpClient<any, any>) {
    if (!Authenticationcliente.instance) {
      Authenticationcliente.instance = new Authenticationcliente(httpClient);
    }
    return Authenticationcliente.instance;
  }

  async logarCliente(entrada: LoginCliente): Promise<HttpResponse<AuthResponse>> {
    try {
      var httpResponse = await this.httpClient.post({
        body: entrada,
        url: "/api/v1/auth/authenticate"

      });
      return httpResponse;

    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  async cadastrarCliente(entrada: CadastroCliente): Promise<HttpResponse<AuthResponse>> {
    try {
      var httpResponse = await this.httpClient.post({
        body: entrada,
        url: "/api/v1/auth/users"
      });

      return httpResponse;

    } catch (error) {
      throw this.handleApiError(error);
    }
  }

} 