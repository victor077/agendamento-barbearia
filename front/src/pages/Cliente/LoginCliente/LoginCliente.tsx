import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/";

import Dark from "../../../styles/themes/Dark/Dark";
import FormLoginCliente from "./FormLoginCliente/FormLoginCliente";
import HeaderLogin from "../../../components/HeaderLogin/HeaderLogin";

import useStyles from "./styled";
import Typography from "@mui/material/Typography";

const LoginCliente = () => {
  const styled = useStyles();
  return (
    <ThemeProvider theme={Dark}>
      <Box sx={styled.body}>
        <Box sx={styled.containerCard}>
          <Card title="Cadastro" sx={styled.card}>
            <HeaderLogin />
            <Box sx={styled.main}>
              <Stack spacing={10} sx={styled.login}>
                <Typography sx={styled.titulo}>Login</Typography>
                <FormLoginCliente />
              </Stack>
              <Box sx={styled.fotoLogin} />
            </Box>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LoginCliente;
