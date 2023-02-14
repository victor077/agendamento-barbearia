import React from "react";
import HeaderBarbeiro from "../Components/HeaderBarbeiro/Header";
import DadosPerfil from "./DadosPerfil/DadosPerfil";
import FotosPerfil from "./FotosPerfil/FotosPerfil";

const PerfilBarbeiro = () => {
  return (
    <>
      <HeaderBarbeiro title="Atualize seu Négocio" name="Victor" />
      <DadosPerfil />
      <FotosPerfil />
    </>
  );
};

export default PerfilBarbeiro;
