import React from "react";
import HeaderCliente from "../Components/HeaderCliente/HeaderCliente";
import Box from "@mui/material/Box";
import FormCadastroBarbearia from "./FormTornaBarbeiro";

const TornaBarbeiro = () => {
  return (
    <>
      <HeaderCliente />
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <FormCadastroBarbearia />
      </Box>
    </>
  );
};

export default TornaBarbeiro;
