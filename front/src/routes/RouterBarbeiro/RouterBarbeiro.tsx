import React from "react";

import { Route, Routes } from "react-router-dom";
import CadastroBarbeiro from "../../pages/Barbeiro/CadastroBarbeiro/CadastroBarbeiro";
import LoginBarbeiro from "../../pages/Barbeiro/LoginBarbeiro/LoginBarbeiro";
import Barbeiro from "../../pages/Barbeiro/Barbeiro";
import AuthenticationProvider from "../../pages/Context/AuthenticationContext";

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
