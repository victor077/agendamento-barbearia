import React from "react";

import Box from "@mui/material/Box";

import ComboBox from "./ComboBox/ComboBox";

import useStyles from "./styled";

const Navbar = () => {
  const styled = useStyles();
  return (
    <Box sx={styled.containerNavbar}>
      <ComboBox tipoTitulo="cliente" titulo="Cadastro" />
      <ComboBox tipoTitulo="barbeiro" titulo="Login" />
    </Box>
  );
};

export default Navbar;
