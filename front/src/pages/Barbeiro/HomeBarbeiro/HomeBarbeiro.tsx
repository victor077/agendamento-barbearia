import React from "react";

import CortesBarbeiros from "../Components/CortesBarbeiros/CortesBarbeiros";
import HeaderBarbeiro from "../Components/HeaderBarbeiro/Header";

const chamada = [
  {
    id: 1,
    nome: "Monteiro",
    horario: "13:00",
    servico: "Desfarçado",
    preco: "30",
  },
  {
    id: 2,
    nome: "Monteiro",
    horario: "13:00",
    servico: "Desfarçado",
    preco: "30",
  },
  {
    id: 3,
    nome: "Monteiro",
    horario: "13:00",
    servico: "Desfarçado",
    preco: "30",
  },
  {
    id: 4,
    nome: "Monteiro",
    horario: "13:00",
    servico: "Desfarçado",
    preco: "30",
  },
];

const HomeBarbeiro = () => {
  return (
    <>
      <HeaderBarbeiro title="Próximos Cortes" name="Victor" />
      <CortesBarbeiros />
    </>
  );
};

export default HomeBarbeiro;
