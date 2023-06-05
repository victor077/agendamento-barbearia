import React from "react";

import { Route, Routes } from "react-router-dom";
import BarbeariaAgendamento from "../../pages/Cliente/Barbearias/BarbeariaAgendamento/BarbeariaAgendamento";
import Barbearias from "../../pages/Cliente/Barbearias/Barbearias";
import CadastroCliente from "../../pages/Cliente/CadastroCliente/CadastroCliente";
import LoginCliente from "../../pages/Cliente/LoginCliente/LoginCliente";
import SeusAgendamentos from "../../pages/Cliente/SeusAgendamentos/SeusAgendamentos";
import TornaBarbeiro from "../../pages/Cliente/TornaBarbeiro";
import { ThemeProvider } from "@mui/material";
import { Light } from "../../styles/themes/Light";
import Servicos from "../../pages/Cliente/Barbearias/Servicos";

const RouterCliente = () => {
  return (
    <ThemeProvider theme={Light}>
      <Routes>
        <Route path="cadastro/cliente" element={<CadastroCliente />} />
        <Route path="login/cliente" element={<LoginCliente />} />
        <Route path="cliente/barbearias" element={<Barbearias />} />
        <Route
          path="cliente/seus-agendamentos"
          element={<SeusAgendamentos />}
        />

        <Route
          path="cliente/barbearias/servicos/:nomeBarbearia"
          element={<Servicos />}
        />
        <Route path="cliente/se-tornar-barbeiro" element={<TornaBarbeiro />} />
      </Routes>
    </ThemeProvider>
  );
};

export default RouterCliente;
