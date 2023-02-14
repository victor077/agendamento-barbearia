import React, { useCallback } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormValuesLoginBarbeiro, validationSchema } from "./validate";
import { InputStyled } from "../../../../Components/InputStyled/styled";
import { LabelStyled } from "../../../../Components/LabelStyled/styled";

import useStyles from "./styled";

const FormLoginBarbeiro = () => {
  const styled = useStyles();
  const navigate = useNavigate();

  const handleClickJaCadastrado = () => {
    navigate("../");
  };
  const formCadastroBarbeiro = useForm<FormValuesLoginBarbeiro>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const { handleSubmit, register, formState } = formCadastroBarbeiro;
  const handleSubmitLogin = useCallback((values: FormValuesLoginBarbeiro) => {
    console.log(values);
  }, []);

  return (
    <form onSubmit={handleSubmit(handleSubmitLogin)}>
      <Box sx={styled.containerCadastro}>
        <Box sx={styled.cadastro}>
          <Grid sx={styled.containerGrid} container spacing={4}>
            <Grid item xs={12}>
              <LabelStyled>Email</LabelStyled>
              <InputStyled  {...register("email")} placeholder="Digite seu email" />
            </Grid>
            <Grid item xs={12}>
              <LabelStyled>Senha</LabelStyled>
              <InputStyled {...register("senha")} type="password" placeholder="Digite sua senha" />
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

export default FormLoginBarbeiro;
