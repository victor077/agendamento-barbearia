import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormValuesLoginCliente,
  validationSchema,
} from "../../Cliente/LoginCliente/FormLoginCliente/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { LoginCliente } from "../../../Packages/services/Cliente/AuthenticationCliente/Models/LoginCliente";
import { AuthenticationClienteServe } from "../../../Packages/services/Cliente/AuthenticationCliente";
import { useNavigate } from "react-router-dom";

export function useBarbeiro<T>(item: string) {
  const navigate = useNavigate();
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("item") ?? "")
  );

  const handleNavigationCliente = () => {
    navigate("../cliente/barbearias");
  };

  const handleNavigateBarbeiro = () => {
    navigate("../corta-ai/home");
  };

  const atualizarLocalStorage = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };
  const formCadastroCliente = useForm<FormValuesLoginCliente>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  const { mutate } = useMutation(
    (entrada: LoginCliente) => AuthenticationClienteServe.logarCliente(entrada),
    {
      onSuccess: (response) => {
        const { role } = response.body;
        if (role === "USER") handleNavigationCliente();
        else {
          handleNavigateBarbeiro();
        }
        console.log(response.body);
        localStorage.setItem(value, JSON.stringify(response.body));
      },
      onError: () => {
        alert("Senha ou email invalido");
      },
    }
  );

  return { value, atualizarLocalStorage, formCadastroCliente, mutate };
}
