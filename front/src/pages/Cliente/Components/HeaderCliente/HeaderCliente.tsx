import React from "react";

import { NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useStyles from "./styled";

const HeaderCliente = () => {
  const styled = useStyles();
  return (
    <Box sx={styled.header}>
      <Box sx={styled.nav}>
        <NavLink to="../cliente/barbearias" style={{ textDecoration: "none" }}>
          <Typography sx={styled.titulo}>Barbearias</Typography>
        </NavLink>
        <NavLink
          to="../cliente/seus-agendamentos"
          style={{ textDecoration: "none" }}
        >
          <Typography sx={styled.titulo}>Seus Agendamentos</Typography>
        </NavLink>
      </Box>
      <Box sx={styled.bar}>
        <NavLink to="../" style={{ textDecoration: "none" }}>
          <Typography sx={styled.titulo}>Sair</Typography>
        </NavLink>
      </Box>
    </Box>
  );
};

export default HeaderCliente;
