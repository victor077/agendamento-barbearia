import { IHttpClient } from "../../../protocolosHtpp/IHttpCliente";
import { HttpResponse } from "../../../protocolosHtpp/http_response";
import { BaseApiService } from "../../BaseApiService";
import { BarbeariaResponse } from "./models/BarbeariasResponse";
import { IBarbearia } from "./types";

export class BarbeariasCliente extends BaseApiService implements IBarbearia {

    private static instance: IBarbearia;

    private constructor(httpClient: IHttpClient<any, any>) {
        super(httpClient);
    }

    static create(httpClient: IHttpClient<any, any>) {
        if (!BarbeariasCliente.instance) {
            BarbeariasCliente.instance = new BarbeariasCliente(httpClient);
        }
        return BarbeariasCliente.instance;
    }


    async getBarbearias(): Promise<HttpResponse<BarbeariaResponse[]>> {
        try {
            var httpResponse = await this.httpClient.get({
                url: "/api/v1/auth/users/barbers"
            });

            return httpResponse;

        } catch (error) {
            throw this.handleApiError(error);
        }
    }

} 