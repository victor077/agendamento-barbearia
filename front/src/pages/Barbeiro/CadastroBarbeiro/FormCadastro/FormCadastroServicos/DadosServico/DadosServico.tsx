import React, { useCallback, useState } from "react";

import { TableCell, TableRow } from "@mui/material";
import useStyles from "./styled";
import { TaskInputStyled } from "../../../../Components/TaskInputStyled/styled";

const DadosServico = () => {
  const styled = useStyles();

  const [inputServico, setInputServico] = useState("");
  const [inputMinutos, setInputMinutos] = useState("");
  const [inputValor, setInputValor] = useState("");

  const handleChangeServico = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setInputServico(event.target.value);
    },
    [setInputServico]
  );

  const handleChangeMinutos = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setInputMinutos(event.target.value);
    },
    [setInputMinutos]
  );

  const handleChangeValor = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setInputValor(event.target.value);
    },
    [setInputValor]
  );
  console.log("serviço", inputServico);
  console.log("minutos", inputMinutos);
  console.log("valor", inputValor);
  return (
    <TableRow>
      <TableCell sx={styled.cell} align="left">
        <TaskInputStyled
          defaultValue={inputServico}
          onChange={handleChangeServico}
          placeholder="Digite o seu serviço"
        />
      </TableCell>
      <TableCell sx={styled.cell1} align="left">
        <TaskInputStyled
          defaultValue={inputMinutos}
          onChange={handleChangeMinutos}
          placeholder="Minutos"
          type="number"
        />
      </TableCell>
      <TableCell sx={styled.cell2} align="left">
        <TaskInputStyled
          defaultValue={inputValor}
          onChange={handleChangeValor}
          placeholder="R$"
          type="number"
        />
      </TableCell>
    </TableRow>
  );
};

export default DadosServico;
