import React from "react";

import Dark from "../../../../../styles/themes/Dark/Dark"; 
import Domingo from "./Domingo/Domingo";
import Quarta from "./Quarta/Quarta";
import Quinta from "./Quinta/Quinta";
import Sabado from "./Sabado/Sabado";
import Segunda from "./Segunda/Segunda";
import Sexta from "./Sexta/Sexta";
import StepperWrapper from "../../Components/StepperCadastro/StepperWapper/StepperWapper";
import TabWrapper from "../../../../../Components/TabWrapper/TabWrapper";
import Terca from "./Terca/Terca";
import { ThemeProvider } from "@mui/material";

const FormCadastroAtendimento = () => {
  return (
    <ThemeProvider theme={Dark}>
      <StepperWrapper key={5}>
        <TabWrapper
          segunda={<Segunda />}
          terca={<Terca />}
          quarta={<Quarta />}
          quinta={<Quinta />}
          sexta={<Sexta />}
          sabado={<Sabado />}
          domingo={<Domingo />}
        ></TabWrapper>
      </StepperWrapper>
    </ThemeProvider>
  );
};

export default FormCadastroAtendimento;
