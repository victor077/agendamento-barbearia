import { IHttpClient } from "../../../protocolosHtpp/IHttpCliente";
import { HttpResponse } from "../../../protocolosHtpp/http_response";
import { BaseApiService } from "../../BaseApiService";
import { CadastroCliente } from "./Models/CadastroCliente";
import { LoginCliente } from "./Models/LoginCliente";
import { IAuthenticationCliente } from "./type";

export class Authenticationliente extends BaseApiService implements IAuthenticationCliente {

  private static instance: IAuthenticationCliente;

  private constructor(httpClient: IHttpClient<any, any>) {
    super(httpClient);
  }

  static create(httpClient: IHttpClient<any, any>) {
    if (!Authenticationliente.instance) {
      Authenticationliente.instance = new Authenticationliente(httpClient);
    }
    return Authenticationliente.instance;
  }

  async logarCliente(entrada: LoginCliente): Promise<HttpResponse<void>> {
    try {
      var httpResponse = await this.httpClient.post({
        body: entrada,
        url: "/api/v1/auth/register"

      });
      return httpResponse;

    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  async cadastrarCliente(entrada: CadastroCliente): Promise<HttpResponse<void>> {
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

} 