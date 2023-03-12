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

const FormLoginCliente = () => {
  const styled = useStyles();
  const navigate = useNavigate();

  const handleClickJaCadastrado = () => {
    navigate("../login/cliente");
  };

  const handleClickLogin = () => {
    navigate("../corta-ai/home");
  };

  const formCadastroCliente = useForm<FormValuesLoginCliente>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const { handleSubmit, register, formState } = formCadastroCliente;
  const handleSubmitLogin = useCallback((values: FormValuesLoginCliente) => {
    console.log(values);
  }, []);

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
                {...register("senha")}
                placeholder="Digite sua senha"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={handleClickLogin}
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
