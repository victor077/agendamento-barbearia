import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useCallback } from "react";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useStyles from "./styled";
import { FormValuesCadastroBarbeiro, validationSchema } from "./validate";
import Button from "@mui/material/Button";
import { InputStyledTornaBarbeiro } from "../../../../components/InputStyled/styled";
import { LabelStyledTornaBarbeiro } from "../../../../components/LabelStyled/styled";

export const FormTornaBarbeiro = () => {
  const styled = useStyles();
  const formCadastroCliente = useForm<FormValuesCadastroBarbeiro>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const { handleSubmit, register, formState } = formCadastroCliente;
  const handleSubmitCadastro = useCallback(
    (values: FormValuesCadastroBarbeiro) => {
      console.log(values);
    },
    []
  );
  return (
    <form
      style={{ width: "80%" }}
      onSubmit={handleSubmit(handleSubmitCadastro)}
    >
      <Box sx={styled.containerCadastro}>
        <Grid container rowSpacing={4} columnSpacing={28}>
          <Grid sx={styled.textFieldContainer} item xs={6}>
            <LabelStyledTornaBarbeiro>Razão</LabelStyledTornaBarbeiro>
            <InputStyledTornaBarbeiro
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
            <LabelStyledTornaBarbeiro>Celular</LabelStyledTornaBarbeiro>
            <InputStyledTornaBarbeiro
              {...register("sobrenome")}
              placeholder="Digite seu sobrenome"
            />
          </Grid>
          <Grid sx={styled.textFieldContainer} item xs={6}>
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
          <Grid sx={styled.textFieldContainer} item xs={6}>
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
          <Grid sx={styled.textFieldContainer} item xs={6}>
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
          <Grid sx={styled.textFieldContainer} item xs={6}>
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
            <LabelStyledTornaBarbeiro>Confirmar Senha</LabelStyledTornaBarbeiro>
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
        </Grid>
      </Box>
      <Box sx={styled.containerCadastrar}>
        <Button
          type="submit"
          style={{
            background: "#9D641F",
            padding: "10px 40px",
            color: "#Fafafa",
            borderRadius: "10px",
          }}
        >
          Cadastrar
        </Button>
      </Box>
    </form>
  );
};
