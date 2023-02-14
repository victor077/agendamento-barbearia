import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import information from "../../../../assets/information1.png";
import informations2 from "../../../../assets/informations2.png";
import useStyles from "./styled";

const Informacoes = () => {
  const styled = useStyles();
  return (
    <Stack spacing={20}>
      <Box sx={styled.containerMain}>
        <Box sx={styled.main}>
          <Box sx={styled.container1}>
            <img style={{ width: "500px" }} src={information} alt="" />
          </Box>
          <Stack spacing={4} sx={styled.container2}>
            <Typography sx={styled.titulo}>
              Deixe Que Os Cortes Falem Por Você
            </Typography>
            <Typography sx={styled.subTitulo}>
              Vamos fazer com que o seu trabalho seja apenas realizar os cortes
              sem preocupações.
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Box sx={styled.containerMain2}>
        <Box sx={styled.main}>
          <Stack spacing={4} sx={styled.container2}>
            <Typography sx={styled.titulo}>Melhore sua Agenda</Typography>
            <Typography sx={styled.subTitulo}>
              Controle sua agenda a partir de sua rotina de trabalho, dando
              conforto para o atendimentos aos seus clientes.
            </Typography>
          </Stack>
          <Box sx={styled.container1}>
            <img style={{ width: "500px", height: "100%" }} src={informations2} alt="" />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Informacoes;
