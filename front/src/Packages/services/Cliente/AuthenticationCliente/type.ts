import { HttpResponse } from "../../../protocolosHtpp/http_response";
import { AuthResponse } from "./Models/AuthResponse";
import { CadastroCliente } from "./Models/CadastroCliente";
import { LoginCliente } from "./Models/LoginCliente";

export interface IAuthenticationCliente {
  logarCliente(entrada: LoginCliente): Promise<HttpResponse<AuthResponse>>
  cadastrarCliente(entrada: CadastroCliente): Promise<HttpResponse<AuthResponse>>
}