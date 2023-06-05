import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useCallback } from "react";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useStyles from "./styled";
import { FormValuesCadastroBarbeaira, validationSchema } from "./validate";
import Button from "@mui/material/Button";
import { InputStyledTornaBarbeiro } from "../../../../components/InputStyled/styled";
import { LabelStyledTornaBarbeiro } from "../../../../components/LabelStyled/styled";
import StepperWrapper from "../../../Barbeiro/CadastroBarbeiro/Components/StepperCadastro/StepperWapper/StepperWapper";
import { Card } from "@mui/material";

const FormCadastroBarbearia = () => {
  const styled = useStyles();
  const formCadastroCliente = useForm<FormValuesCadastroBarbeaira>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const { handleSubmit, register, formState } = formCadastroCliente;
  const handleSubmitCadastro = useCallback(
    (values: FormValuesCadastroBarbeaira) => {
      console.log(values);
    },
    []
  );
  return (
    <Card
      style={{
        width: "80%",
        margin: "2rem auto",
        borderRadius: "20px",
        boxShadow: "0px 4px 2px rgba(0,0,0, 0.25)",
        padding: "2rem",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          style={{ width: "100%" }}
          onSubmit={handleSubmit(handleSubmitCadastro)}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Grid sx={styled.textFieldContainer} item xs={4}>
              <LabelStyledTornaBarbeiro>Razão</LabelStyledTornaBarbeiro>
              <InputStyledTornaBarbeiro
                {...register("razao")}
                placeholder="Digite seu nome"
              />
              {formState.errors?.razao?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.razao?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={4}>
              <LabelStyledTornaBarbeiro>Celular</LabelStyledTornaBarbeiro>
              <InputStyledTornaBarbeiro
                {...register("celular")}
                placeholder="Digite seu sobrenome"
              />
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={4}>
              <LabelStyledTornaBarbeiro>Cep</LabelStyledTornaBarbeiro>
              <InputStyledTornaBarbeiro
                {...register("email")}
                placeholder="Digite seu email"
              />
              {formState.errors?.email?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.email?.message)}
                </Typography>
              )}
            </Grid>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Grid sx={styled.textFieldContainer} item xs={4}>
              <LabelStyledTornaBarbeiro>Cidade</LabelStyledTornaBarbeiro>
              <InputStyledTornaBarbeiro
                {...register("celular")}
                placeholder="Digite seu celular"
              />
              {formState.errors?.celular?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.celular?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={4}>
              <LabelStyledTornaBarbeiro>Bairro</LabelStyledTornaBarbeiro>
              <InputStyledTornaBarbeiro
                {...register("senha")}
                placeholder="Digite sua senha"
              />
              {formState.errors?.senha?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.senha?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={4}>
              <LabelStyledTornaBarbeiro>Rua</LabelStyledTornaBarbeiro>
              <InputStyledTornaBarbeiro
                {...register("confirmarSenha")}
                placeholder="Confirme sua senha"
              />
              {formState.errors?.confirmarSenha?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.confirmarSenha?.message)}
                </Typography>
              )}
            </Grid>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Grid sx={styled.textFieldContainer} item xs={4}>
              <LabelStyledTornaBarbeiro>Numero</LabelStyledTornaBarbeiro>
              <InputStyledTornaBarbeiro
                {...register("confirmarSenha")}
                placeholder="Confirme sua senha"
              />
              {formState.errors?.confirmarSenha?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.confirmarSenha?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={4}>
              <LabelStyledTornaBarbeiro> Senha</LabelStyledTornaBarbeiro>
              <InputStyledTornaBarbeiro
                {...register("confirmarSenha")}
                placeholder="Confirme sua senha"
              />
              {formState.errors?.confirmarSenha?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.confirmarSenha?.message)}
                </Typography>
              )}
            </Grid>
            <Grid sx={styled.textFieldContainer} item xs={4}>
              <LabelStyledTornaBarbeiro>
                Confirmar Senha
              </LabelStyledTornaBarbeiro>
              <InputStyledTornaBarbeiro
                {...register("confirmarSenha")}
                placeholder="Confirme sua senha"
              />
              {formState.errors?.confirmarSenha?.message && (
                <Typography sx={styled.error}>
                  {String(formState.errors?.confirmarSenha?.message)}
                </Typography>
              )}
            </Grid>
          </Box>
          <Grid sx={styled.textFieldContainer} item xs={12}>
            <Button
              type="submit"
              style={{
                backgroundColor: "#9D641F",
                padding: "10px 40px",
                color: "#Fafafa",
                borderRadius: "10px",
              }}
            >
              Cadastrar
            </Button>
          </Grid>
        </form>
      </Box>
    </Card>
  );
};
export default FormCadastroBarbearia;
