import React from "react";

import Box from "@mui/material/Box";

import ComboBox from "./ComboBox/ComboBox";

import useStyles from "./styled";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const styled = useStyles();
  const navigate = useNavigate();

  const handleNavigateCadastro = () => {
    navigate("cadastro/cliente");
  };

  const handleNavigateLogin = () => {
    navigate("login/cliente");
  };

  return (
    <Box sx={styled.containerNavbar}>
      <Button
        onClick={handleNavigateCadastro}
        style={{
          padding: "0.5rem 2rem 0.5rem 2rem",
          borderRadius: "5px",
          fontWeight: "500",
          color: "rgba(153, 84, 84, 1, 0.7)",
        }}
        variant="contained"
      >
        Cadastro
      </Button>
      <Button
        onClick={handleNavigateLogin}
        style={{
          padding: "0.5rem 2rem 0.5rem 2rem",
          borderRadius: "5px",
          fontWeight: "500",
          color: "rgba(153, 84, 84, 1, 0.7)",
        }}
        variant="contained"
      >
        Login
      </Button>

      {/* <ComboBox tipoTitulo="cliente" titulo="Cadastro" />
      <ComboBox tipoTitulo="barbeiro" titulo="Login" /> */}
    </Box>
  );
};

export default Navbar;
