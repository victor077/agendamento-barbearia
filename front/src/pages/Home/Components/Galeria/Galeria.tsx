import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useStyles from "./styled";

const Galeria = () => {
  const styled = useStyles();
  return (
    <Typography sx={styled.texto}>
      Cuidaremos de seus agendamentos! Cortes mais eficazes e livres de
      preocupações farão do CORTA AI seu lugar favorito para trabalhar!
    </Typography>
  );
};

export default Galeria;
