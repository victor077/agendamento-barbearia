import React from "react";

import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import useStyles from "./styled";
import { Button, Card, Typography } from "@mui/material";

const Banner = () => {
  const styled = useStyles();
  return (
    <Card sx={styled.banner}>
      <Box sx={styled.containerInformations}>
        <Box sx={styled.informations}>
          <Typography sx={styled.corta}>
            Corta <span style={{ color: "#DDD750" }}>Ai</span>
          </Typography>
          <Typography sx={styled.titleInformations}>
            Evolua e mostre o seu negócio para todas as quebradas
          </Typography>
          <Box>
            <Button sx={styled.button} variant="contained">Junte-se a nós</Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Banner;
