import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import HeaderCliente from "../../Components/HeaderCliente/HeaderCliente";
import useStyles from "./styled";

type OutSeusAgendamentos = {
  id_agendamento: number;
  agendamento: Date;
  barbearia: string;
};

const BarbeariaAgendamento = () => {
  const styled = useStyles();

  const rows: OutSeusAgendamentos[] = [
    {
      id_agendamento: 1,
      agendamento: new Date(),
      barbearia: "Kevin Cortes",
    },
    {
      id_agendamento: 2,
      agendamento: new Date(),
      barbearia: "Mela Cortes",
    },
    {
      id_agendamento: 1,
      agendamento: new Date(),
      barbearia: "Keus",
    },
  ];
  return (
    <>
      <HeaderCliente />
      <Box sx={styled.main}>
        <TableContainer sx={styled.tableContainer} component={Paper}>
          <Table sx={styled.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography sx={styled.TituloBody}>Barbearias</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={styled.TituloBody}>Agendamentos</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={styled.TituloBody}>Horários</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={styled.TituloBody}>Cancelamento</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id_agendamento}>
                  <TableCell align="center">
                    <Typography sx={styled.textoCell}>
                      {row.barbearia}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={styled.textoCell}>data</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={styled.textoCell} style={{}}>
                      data
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#9D641F",
                        color: "#fAfafa",
                      }}
                    >
                      Cancelar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default BarbeariaAgendamento;
