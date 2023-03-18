import { httpClient } from "../../../axiosHttpClient";
import { Authenticationliente } from "./AuthenticationCliente";

export const AuthenticationClienteServe = Authenticationliente.create(
  httpClient
)