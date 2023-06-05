import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import useStyles from "./styled";
import Typography from "@mui/material/Typography";
import HeaderCliente from "../Components/HeaderCliente/HeaderCliente";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase";

const SeusAgendamentos = () => {
  const styled = useStyles();
  const agedamentoInitial = {
    id: "",
    barbeiro: "",
    data: "",
    hora: "",
  };
  const [agendamento, setAgendamento] = useState(agedamentoInitial);
  useEffect(() => {
    const consultarAgendamento = collection(db, "agendamento");
    const data = query(consultarAgendamento, where("cliente", "==", "matheus"));

    const getAgendamentos = async () => {
      const querySnapshot = await getDocs(data);
      querySnapshot.forEach((doc) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const { id, barbeiro, data, hora } = doc.data();
          setAgendamento({ id, barbeiro, data, hora });
        } else {
          return alert("nenhum agendamento encotrado");
        }
      });
    };

    getAgendamentos();
  }, []);

  const deleteAgendamento = async (agendamentoId) => {
    try {
      const agendamentoRef = doc(db, "agendamento", agendamentoId);
      await deleteDoc(agendamentoRef);
      console.log("Agendamento excluído com sucesso!");
      alert("Agendamento excluído com sucesso!");
      // Execute outras ações necessárias após a exclusão
    } catch (error) {
      console.error("Erro ao excluir agendamento:", error);
      alert("Erro ao excluir agendamento" + error);

      // Trate o erro de acordo com sua necessidade
    }
  };

  const handleDeleteAgendamento = (agendamentoId) => {
    deleteAgendamento(agendamentoId);
    // Execute outras ações necessárias após a exclusão
  };
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
              <TableRow>
                <TableCell align="center">
                  <Typography sx={styled.textoCell}>
                    {agendamento.barbeiro}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={styled.textoCell}>
                    {agendamento.data}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={styled.textoCell}>
                    {agendamento.hora}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => handleDeleteAgendamento(agendamento.id)}
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
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default SeusAgendamentos;
