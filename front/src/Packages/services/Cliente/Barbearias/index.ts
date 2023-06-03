import { httpClient } from "../../../axiosHttpClient";
import { BarbeariasCliente } from "./Barbearia";

export const BarbeariaClienteServe = BarbeariasCliente.create(
  httpClient
)