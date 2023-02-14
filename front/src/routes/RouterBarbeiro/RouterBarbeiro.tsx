import React from "react";

import { Route, Routes } from "react-router-dom";

import CadastroBarbeiro from "../../Pages/Barbeiro/CadastroBarbeiro/CadastroBarbeiro";
import LoginBarbeiro from "../../Pages/Barbeiro/LoginBarbeiro/LoginBarbeiro";
import NavBar from "../../Pages/Barbeiro/Components/NavBarBabeiro/NavBar";
import Barbeiro from "../../Pages/Barbeiro/Barbeiro";

const RouterBarbeiro = () => {
  return (
    <Routes>
      <Route path="cadastro/barbeiro" element={<CadastroBarbeiro />} />
      <Route path="login/barbeiro" element={<LoginBarbeiro />} />
      <Route path="corta-ai/home" element={<Barbeiro />} />
    </Routes>
  );
};

export default RouterBarbeiro;
