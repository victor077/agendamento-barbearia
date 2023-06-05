import React, { useCallback } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormValuesLoginCliente, validationSchema } from "./validate";
import { InputStyled } from "../../../../components/InputStyled/styled";
import { LabelStyled } from "../../../../components/LabelStyled/styled";

import useStyles from "./styled";
import { useMutation } from "react-query";
import { LoginCliente } from "../../../../Packages/services/Cliente/AuthenticationCliente/Models/LoginCliente";
import { AuthenticationClienteServe } from "../../../../Packages/services/Cliente/AuthenticationCliente";

const FormLoginCliente = () => {
  const styled = useStyles();
  const navigate = useNavigate();

  const handleClickJaCadastrado = () => {
    navigate("../cadastro/cliente");
  };

  const handleNavigationCliente = () => {
    navigate("../cliente/barbearias");
  };

  const handleNavigateBarbeiro = () => {
    navigate("../corta-ai/home");
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
        localStorage.setItem("dados usuario", JSON.stringify(response.body))
      },
      onError: () => {
        alert("Senha ou email invalido");
      },
    }
  );
  const { handleSubmit, register, formState } = formCadastroCliente;
  const handleSubmitLogin = useCallback(
    (values: FormValuesLoginCliente) => {
      mutate({
        email: values.email,
        password: values.senha,
      });
      console.log("submit", values);
    },
    [mutate]
  );

  return (
    <form onSubmit={handleSubmit(handleSubmitLogin)}>
      <Box sx={styled.containerCadastro}>
        <Box sx={styled.cadastro}>
          <Grid sx={styled.containerGrid} container spacing={4}>
            <Grid item xs={12}>
              <LabelStyled>Email</LabelStyled>
              <InputStyled
                {...register("email")}
                placeholder="Digite seu email"
              />
            </Grid>
            <Grid item xs={12}>
              <LabelStyled>Senha</LabelStyled>
              <InputStyled
                type="password"
                {...register("senha")}
                placeholder="Digite sua senha"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={styled.entrar}
              >
                Entrar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={styled.buttonSouCadastrado}
                variant="outlined"
                color="secondary"
                onClick={handleClickJaCadastrado}
              >
                Cadastre-se
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </form>
  );
};

export default FormLoginCliente;
