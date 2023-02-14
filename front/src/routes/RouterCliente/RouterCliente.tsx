import React from "react";

import { Route, Routes } from "react-router-dom";
import Barbearias from "../../Pages/Cliente/Barbearias/Barbearias";
import CadastroCliente from "../../Pages/Cliente/CadastroCliente/CadastroCliente";
import LoginCliente from "../../Pages/Cliente/LoginCliente/LoginCliente";
import SeusAgendamentos from "../../Pages/Cliente/SeusAgendamentos/SeusAgendamentos";
import BarbeariaAgendamento from "../../Pages/Cliente/Barbearias/BarbeariaAgendamento/BarbeariaAgendamento";

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
