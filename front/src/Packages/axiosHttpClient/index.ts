import { AxiosHttpClient } from "./AxiosErrorHttpCliente";

const httpClient = AxiosHttpClient.create({
  baseUrl: "http://localhost:5555",
  headers: [
    {
      Authorization: () =>
        `Bearer ${JSON.parse(localStorage.getItem("sessionToken") ?? "")}`,
    },
  ],
});

export { httpClient };
