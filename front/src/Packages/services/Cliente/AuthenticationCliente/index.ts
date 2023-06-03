import { httpClient } from "../../../axiosHttpClient";
import { Authenticationcliente } from "./AuthenticationCliente";

export const AuthenticationClienteServe = Authenticationcliente.create(
  httpClient
)