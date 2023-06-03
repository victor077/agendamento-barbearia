import { HttpResponse } from "../../../protocolosHtpp/http_response";
import { BarbeariaResponse } from "./models/BarbeariasResponse";

export interface IBarbearia {
    getBarbearias(): Promise<HttpResponse<BarbeariaResponse[]>>
}