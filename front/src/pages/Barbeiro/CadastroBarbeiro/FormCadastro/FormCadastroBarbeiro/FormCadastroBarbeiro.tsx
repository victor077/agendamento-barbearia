import { useCallback } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { BarbeiroFormValue, validationSchema } from "./validate";
import { InputStyled } from "../../../../../components/InputStyled/styled";
import { LabelStyled } from "../../../../../components/LabelStyled/styled";
import StepperWrapper from "../../Components/StepperCadastro/StepperWapper/StepperWapper";
import { useStepper } from "../../Components/StepperCadastro/Context/StepperContextProvider";

import useStyles from "./styled";

const FormCadastroBarbeiro = () => {
  const styled = useStyles();

  const navigate = useNavigate();
  const { handleAvancar, handleVoltar, atualizarPasso, passoAtual } =
    useStepper();

  const formCadastroBarbearia = useForm<BarbeiroFormValue>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  const { register, handleSubmit, formState } = formCadastroBarbearia;

  const handleSubmitCadastroBarbeiro = useCallback(
    (values: BarbeiroFormValue) => {
      atualizarPasso(passoAtual);
      handleAvancar();
      console.log(values);
    },
    []
  );

  return (
    <StepperWrapper key={3}>
      <Box sx={styled.main}>
        <form
          style={{ width: "70%" }}
          onSubmit={handleSubmit(handleSubmitCadastroBarbeiro)}
        >
          <Grid container rowSpacing={4} columnSpacing={28}>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Nome</LabelStyled>
              <InputStyled {...register("nome")} placeholder="Nome" />
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
              {formState.errors?.sobrenome?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.sobrenome?.message)}
                </Typography>
              )}
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
                type="fone"
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
              <InputStyled
                type="password"
                {...register("senha")}
                placeholder="Digite sua senha"
              />
              {formState.errors?.senha?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.senha?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Confirmar Senha</LabelStyled>
              <InputStyled
                type="password"
                {...register("confirmarSenha")}
                placeholder="Confirme sua senha"
              />
              {formState.errors?.confirmarSenha?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.confirmarSenha?.message)}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Box sx={styled.containerButton}>
            <Button variant="outlined" onClick={handleVoltar}>
              Voltar
            </Button>
            <Button type="submit" variant="contained" color="secondary">
              Proximo
            </Button>
          </Box>
        </form>
      </Box>
    </StepperWrapper>
  );
};

export default FormCadastroBarbeiro;
