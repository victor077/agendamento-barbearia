import React, { useCallback } from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import StepperWrapper from "../../Components/StepperCadastro/StepperWapper/StepperWapper";
import { LabelStyled } from "../../../../../Components/LabelStyled/styled";
import { useStepper } from "../../Components/StepperCadastro/Context/StepperContextProvider";
import { InputStyled } from "../../../../../Components/InputStyled/styled";
import { EnderecoFormValue, validationSchema } from "./validate";

import useStyles from "./styled";

const FormCadastroEndereco = () => {
  const styled = useStyles();
  const navigate = useNavigate();
  const { handleAvancar, handleVoltar, atualizarPasso, passoAtual } =
    useStepper();

  const formCadastroEndereco = useForm<EnderecoFormValue>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  const { register, handleSubmit, formState } = formCadastroEndereco;

  const handleSubmitCadastroEndereco = useCallback(
    (values: EnderecoFormValue) => {
      atualizarPasso(passoAtual);
      handleAvancar();
      console.log(values);
    },
    []
  );
  return (
    <StepperWrapper key={2}>
      <Box sx={styled.main}>
        <form
          style={{ width: "70%" }}
          onSubmit={handleSubmit(handleSubmitCadastroEndereco)}
        >
          <Grid container rowSpacing={4} columnSpacing={28}>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Cep</LabelStyled>
              <InputStyled {...register("cep")} placeholder="Cep" />
              {formState.errors?.cep?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.cep?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Cidade </LabelStyled>
              <InputStyled
                {...register("cidade")}
                placeholder="Digite sua cidade"
              />
              {formState.errors?.cidade?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.cidade?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Estado</LabelStyled>
              <InputStyled
                {...register("estado")}
                placeholder="Digite seu estado"
              />
              {formState.errors?.estado?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.estado?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Bairro</LabelStyled>
              <InputStyled
                {...register("bairro")}
                placeholder="Digite seu bairro"
              />
              {formState.errors?.bairro?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.bairro?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Logradouro</LabelStyled>
              <InputStyled
                {...register("logradouro")}
                placeholder="Digite seu logradouro"
              />
              {formState.errors?.logradouro?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.logradouro?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Número</LabelStyled>
              <InputStyled {...register("numero")} placeholder="Numero" />
              {formState.errors?.numero?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.numero?.message)}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Box sx={styled.containerButton}>
            <Button  variant="outlined" onClick={handleVoltar}>
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

export default FormCadastroEndereco;
