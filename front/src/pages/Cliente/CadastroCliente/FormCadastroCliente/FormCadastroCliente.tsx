import React, { useCallback } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormValuesCadastroCliente, validationSchema } from "./validate";
import { LabelStyled } from "../../../../components/LabelStyled/styled";
import { InputStyled } from "../../../../components/InputStyled/styled";

import useStyles from "./styled";

const FormCadastroCliente = () => {
  const styled = useStyles();
  const navigate = useNavigate();

  const handleClickJaCadastrado = () => {
    navigate("../login/cliente");
  };
  const formCadastroCliente = useForm<FormValuesCadastroCliente>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const { handleSubmit, register, formState } = formCadastroCliente;
  const handleSubmitCadastro = useCallback(
    (values: FormValuesCadastroCliente) => {
      console.log(values);
    },
    []
  );
  return (
    <Box sx={styled.main}>
      <form
        style={{ width: "80%" }}
        onSubmit={handleSubmit(handleSubmitCadastro)}
      >
        <Box sx={styled.containerCadastro}>
          <Grid container rowSpacing={4} columnSpacing={28}>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Nome</LabelStyled>
              <InputStyled
                {...register("nome")}
                placeholder="Digite seu nome"
              />
              {formState.errors?.nome?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.nome?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Sobrenome</LabelStyled>
              <InputStyled
                {...register("sobrenome")}
                placeholder="Digite seu sobrenome"
              />
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Email</LabelStyled>
              <InputStyled
                {...register("email")}
                placeholder="Digite seu email"
              />
              {formState.errors?.email?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.email?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Celular</LabelStyled>
              <InputStyled
                {...register("celular")}
                placeholder="Digite seu celular"
              />
              {formState.errors?.celular?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.celular?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Senha</LabelStyled>
              <InputStyled {...register("senha")} placeholder="Digite sua senha" />
              {formState.errors?.senha?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.senha?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Confirmar Senha</LabelStyled>
              <InputStyled {...register("confirmarSenha")} placeholder="Confirme sua senha" />
              {formState.errors?.confirmarSenha?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.confirmarSenha?.message)}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
        <Box sx={styled.containerCadastrar}>
          <Button type="submit" variant="contained" color="secondary">
            Cadastrar
          </Button>
          <Button
            sx={styled.buttonSouCadastrado}
            variant="outlined"
            color="secondary"
            onClick={handleClickJaCadastrado}
          >
            Já sou cadastrado
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormCadastroCliente;
