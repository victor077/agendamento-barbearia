import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { ThemeProvider } from "@mui/material/styles";

import Dark from "../../../styles/themes/Dark/Dark";
import FormCadastro from "./FormCadastro/FormCadastro";
import HeaderLogin from "../../../Components/HeaderLogin/HeaderLogin";
import StepperContextProvider, {
  PassoValue,
} from "./Components/StepperCadastro/Context/StepperContextProvider";

import useStyles from "./styled";

const CadastroBarbeiro = () => {
  const styled = useStyles();
  const passoStepper: PassoValue[] = [
    {
      numeroPasso: 0,
      nomePasso: "Barbearia",
      labelConfirmar: "Confirmar Cadastro Barbearia",
      labelVoltar: "Voltar",
    },
    {
      numeroPasso: 1,
      nomePasso: "Endereço",
      labelConfirmar: "Confirmar Cadastro Endereço",
      labelVoltar: "Voltar",
    },
    {
      numeroPasso: 2,
      nomePasso: "Barbeiro",
      labelConfirmar: "Confirmar Cadastro Barbeiro",
      labelVoltar: "Voltar",
    },
    {
      numeroPasso: 3,
      nomePasso: "Serviços",
      labelConfirmar: "Confirmar Cadastro Serviços",
      labelVoltar: "Voltar",
    },
    {
      numeroPasso: 4,
      nomePasso: "Atendimento",
      labelConfirmar: "Confirmar Cadastro Serviços",
      labelVoltar: "Voltar",
    },
  ];
  return (
    <ThemeProvider theme={Dark}>
      <Box sx={styled.body}>
        <Box sx={styled.containerCard}>
          <Card sx={styled.card}>
            <HeaderLogin />
            <StepperContextProvider passos={passoStepper}>
              <FormCadastro />
            </StepperContextProvider>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CadastroBarbeiro;
