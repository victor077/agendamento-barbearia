import React from "react";
import HeaderCliente from "../Components/HeaderCliente/HeaderCliente";
import Box from "@mui/material/Box";
import { FormTornaBarbeiro } from "./FormTornaBarbeiro";

const TornaBarbeiro = () => {
  return (
    <>
      <HeaderCliente />
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <FormTornaBarbeiro />
      </Box>
    </>
  );
};

export default TornaBarbeiro;
