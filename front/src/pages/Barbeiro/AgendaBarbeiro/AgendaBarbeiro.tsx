import React from "react";
import HeaderBarbeiro from "../Components/HeaderBarbeiro/Header";
import CortesBarbeiros from "../Components/CortesBarbeiros/CortesBarbeiros";

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
  {
    id: 5,
    nome: "Victor",
    horario: "13:00",
    servico: "Desfarçado",
    preco: "30",
  },
];

const AgendaBarbeiro = () => {
  return (
    <>
      <HeaderBarbeiro title="Seus Agendamentos" name="Victor" />
      <CortesBarbeiros />
    </>
  );
};

export default AgendaBarbeiro;
