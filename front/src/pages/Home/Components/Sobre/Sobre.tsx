import React from "react";

import Box from "@mui/material/Box";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import PlaceIcon from '@mui/icons-material/Place';

import useStyles from "./styled";
import { Typography } from "@mui/material";

const Sobre = () => {
  const styled = useStyles();
  return (
    <Box sx={styled.containerSobre}>
      <Box sx={styled.main}>
        <Box sx={styled.cardContainer}>
          <Box sx={styled.primeiroCard}>
            <Box sx={styled.card}>
              <span>
                <ContentCutIcon style={{ fontSize: "55px" }} color="info" />
              </span>
              <Typography sx={styled.iformacoes}>
                Divulge seus Cortes
              </Typography>
            </Box>
            <Typography sx={styled.texto}>
              Divulgue para o público todos os cortes em que executa no seu
              salão
            </Typography>
          </Box>

          <Box sx={styled.primeiroCard}>
            <Box sx={styled.card}>
              <span>
                <CalendarMonthIcon style={{ fontSize: "55px" }} color="info" />
              </span>
              <Typography sx={styled.iformacoes}>
                Agendamentos Online
              </Typography>
            </Box>
            <Typography sx={styled.texto}>
              Os agendamentos facilitarão o seu dia-a-dia e dos seus clientes
            </Typography>
          </Box>
          <Box sx={styled.primeiroCard}>
            <Box sx={styled.card}>
              <span>
                <PlaceIcon style={{ fontSize: "55px" }} color="info" />
              </span>
              <Typography sx={styled.iformacoes}>
                Divulge sua Barbearia
              </Typography>
            </Box>
            <Typography sx={styled.texto}>
              Divulgue para o público todos os cortes que são executados em seu
              salão
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sobre;
