import React from "react";

import { Route, Routes } from "react-router-dom";
import BarbeariaAgendamento from "../../pages/Cliente/Barbearias/BarbeariaAgendamento/BarbeariaAgendamento";
import Barbearias from "../../pages/Cliente/Barbearias/Barbearias";
import CadastroCliente from "../../pages/Cliente/CadastroCliente/CadastroCliente";
import LoginCliente from "../../pages/Cliente/LoginCliente/LoginCliente";
import SeusAgendamentos from "../../pages/Cliente/SeusAgendamentos/SeusAgendamentos";

const RouterCliente = () => {
  return (
    <Routes>
      <Route path="cadastro/cliente" element={<CadastroCliente />} />
      <Route path="login/cliente" element={<LoginCliente />} />
      <Route path="cliente/barbearias" element={<Barbearias />} />
      <Route path="cliente/seus-agendamentos" element={<SeusAgendamentos />} />
      <Route path="cliente/barbearias/agendamento" element={<BarbeariaAgendamento />} />
    </Routes>
  );
};

export default RouterCliente;
