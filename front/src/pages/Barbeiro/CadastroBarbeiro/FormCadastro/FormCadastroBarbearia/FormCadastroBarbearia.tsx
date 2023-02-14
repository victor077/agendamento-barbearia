import { useCallback } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { BarbeariaFormValue, validationSchema } from "./validate";
import { InputStyled } from "../../../../../Components/InputStyled/styled";
import { LabelStyled } from "../../../../../Components/LabelStyled/styled";
import StepperWrapper from "../../Components/StepperCadastro/StepperWapper/StepperWapper";
import { useStepper } from "../../Components/StepperCadastro/Context/StepperContextProvider";

import useStyles from "./styled";

const FormCadastroBarbearia = () => {
  const styled = useStyles();
  const navigate = useNavigate();

  const { handleAvancar, atualizarPasso, passoAtual } = useStepper();

  const handleClickCancelar = () => {
    navigate("../");
  };

  const formCadastroBarbearia = useForm<BarbeariaFormValue>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  const { register, handleSubmit, formState } = formCadastroBarbearia;

  const handleSubmitCadastroBarbearia = useCallback(
    (values: BarbeariaFormValue) => {
      atualizarPasso(passoAtual);
      handleAvancar();
      console.log(values);
    },
    []
  );

  return (
    <StepperWrapper key={1}>
      <Box sx={styled.main}>
        <form
          style={{ width: "70%" }}
          onSubmit={handleSubmit(handleSubmitCadastroBarbearia)}
        >
          <Grid container rowSpacing={4} columnSpacing={28}>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Razao</LabelStyled>
              <InputStyled {...register("razao")} placeholder="Razão" />
              {formState.errors?.razao?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.razao?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Email </LabelStyled>
              <InputStyled
                {...register("emailBarbearia")}
                placeholder="Digite seu email"
              />
              {formState.errors?.emailBarbearia?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.emailBarbearia?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Cnpj</LabelStyled>
              <InputStyled
                {...register("cnpj")}
                placeholder="Digite seu cnpj"
              />
              {formState.errors?.cnpj?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.cnpj?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Celular</LabelStyled>
              <InputStyled
                type="fone"
                {...register("celularBarbearia")}
                placeholder="Digite seu celular"
              />
              {formState.errors?.celularBarbearia?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.celularBarbearia?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Senha</LabelStyled>
              <InputStyled
                type="password"
                {...register("senhaBarbearia")}
                placeholder="Digite sua senha"
              />
              {formState.errors?.senhaBarbearia?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.senhaBarbearia?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={6}>
              <LabelStyled>Confirmar Senha</LabelStyled>
              <InputStyled
                type="password"
                {...register("confirmarSenhaBarbearia")}
                placeholder="Confirme sua senha"
              />
              {formState.errors?.confirmarSenhaBarbearia?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.confirmarSenhaBarbearia?.message)}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Box sx={styled.containerButton}>
            <Button variant="outlined" onClick={handleClickCancelar}>
              Cancelar
            </Button>
            <Button type="submit" variant="contained">
              Proximo
            </Button>
          </Box>
        </form>
      </Box>
    </StepperWrapper>
  );
};

export default FormCadastroBarbearia;
