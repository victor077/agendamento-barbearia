import React from "react";
import HeaderCliente from "../Components/HeaderCliente/HeaderCliente";
import Box from "@mui/material/Box";
import FormCadastro from "./FormCadastro/FormCadastro";
import StepperContextProvider, { PassoValue } from "../../Barbeiro/CadastroBarbeiro/Components/StepperCadastro/Context/StepperContextProvider";

const TornaBarbeiro = () => {
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
    <>
      <HeaderCliente />
      <StepperContextProvider passos={passoStepper}>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <FormCadastro />
        </Box>
      </StepperContextProvider>
    </>
  );
};

export default TornaBarbeiro;
