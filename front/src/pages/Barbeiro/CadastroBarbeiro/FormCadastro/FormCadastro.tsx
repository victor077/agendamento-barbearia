import React from "react";
import { useStepper } from "../Components/StepperCadastro/Context/StepperContextProvider";

import FormCadastroBarbearia from "./FormCadastroBarbearia/FormCadastroBarbearia";
import FormCadastroEndereco from "./FormCadastroEndereco/FormCadastroEndereco";
import FormCadastroBarbeiro from "./FormCadastroBarbeiro/FormCadastroBarbeiro";
import FormCadastroServicos from "./FormCadastroServicos/FormCadastroServicos";
import FormCadastroAtendimento from "./FormCadastroAtendimento/index";

const FormCadastro = () => {
  const { passoAtual } = useStepper();
  return (
    <>
      {passoAtual === 0 && <FormCadastroBarbearia />}
      {passoAtual === 1 && <FormCadastroEndereco />}
      {passoAtual === 2 && <FormCadastroBarbeiro />}
      {passoAtual === 3 && <FormCadastroServicos />}
      {passoAtual === 4 && <FormCadastroAtendimento />}
    </>
  );
};

export default FormCadastro;
