import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { ThemeProvider } from "@mui/material/";
import Typography from "@mui/material/Typography";

import Dark from "../../../styles/themes/Dark/Dark";
import FormCadastroCliente from "./FormCadastroCliente/FormCadastroCliente";
import HeaderLogin from "../../../Components/HeaderLogin/HeaderLogin";

import useStyles from "./styled";

const CadastroCliente = () => {
  const styled = useStyles();
  return (
    <ThemeProvider theme={Dark}>
      <Box sx={styled.body}>
        <Box sx={styled.containerCard}>
          <Card title="Cadastro" sx={styled.card}>
            <HeaderLogin />
            <Typography sx={styled.titulo}>Cadastro</Typography>
            <FormCadastroCliente />
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CadastroCliente;
