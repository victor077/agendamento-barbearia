import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/";

import Dark from "../../../styles/themes/Dark/Dark";
import FormLoginBarbeiro from "./FormLoginBarbeiro/FormLoginBarbeiro";
import HeaderLogin from "../../../Components/HeaderLogin/HeaderLogin";

import useStyles from "./styled";

const LoginBarbeiro = () => {
  const styled = useStyles();
  return (
    <ThemeProvider theme={Dark}>
      <Box sx={styled.body}>
        <Box sx={styled.containerCard}>
          <Card sx={styled.card}>
            <HeaderLogin />
            <Box sx={styled.main}>
              <Stack spacing={8} sx={styled.login}>
                <Typography sx={styled.titulo}>Login</Typography>
                <FormLoginBarbeiro />
              </Stack>
              <Box sx={styled.fotoLogin} />
            </Box>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LoginBarbeiro;
