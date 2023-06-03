import { AxiosHttpClient } from "./AxiosErrorHttpCliente";

const httpClient = AxiosHttpClient.create({
  baseUrl: "http://34.206.241.189:8080/",
  // headers: [
  //   {
  //     Authorization: () =>
  //       `Bearer ${JSON.parse(localStorage.getItem("sessionToken") ?? "")}`,
  //   },
  // ],
});

export { httpClient };
