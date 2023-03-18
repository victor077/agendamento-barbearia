import { HttpResponse } from "../../../protocolosHtpp/http_response";
import { LoginCliente } from "./Models/LoginCliente";

export interface IAuthenticationCliente {
  logarCliente(entrada: LoginCliente): Promise<HttpResponse<void>>
  cadastrarCliente(entrada: LoginCliente): Promise<HttpResponse<void>>
}