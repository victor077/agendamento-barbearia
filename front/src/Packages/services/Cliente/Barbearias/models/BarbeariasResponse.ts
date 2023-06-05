import { Role } from "../../../roles/Roles";
import { AddressRequest } from "./AddresRequest";

export type BarbeariaResponse = {
  id: number;
  name: String;
  phone: String;
  email: String;
  password: String;
  address: AddressRequest;
  role: Role;
};
