import React, { useEffect, useState } from "react";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AutoDeleteOutlinedIcon from "@mui/icons-material/AutoDeleteOutlined";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import useStyles from "./styled";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../../../firebase";

type ChamadaType = {
  id: number;
  barbeiro: string;
  data: string;
  hora: string;
  cliente: string;
};

const CortesBarbeiros = () => {
  const [agendamento, setAgendamento] = useState<ChamadaType[]>([]);
  const styled = useStyles();

  useEffect(() => {
    const consultarAgendamento = collection(db, "agendamento");
    const data = query(
      consultarAgendamento,
      where("barbeiro", "==", "Barbearia Foxtrot"),
      limit(10)
    );

    const getAgendamentos = async () => {
      const querySnapshot = await getDocs(data);
      if (!querySnapshot.empty) {
        const agendamentos = querySnapshot.docs.map((doc) => {
          const { cliente, id, barbeiro, data, hora } = doc.data();
          return { cliente, id, barbeiro, data, hora };
        });
        setAgendamento(agendamentos);
      } else {
        alert("Nenhum agendamento encontrado");
      }
    };

    getAgendamentos();
  }, []);

  return (
    <>
      {agendamento.map((item) => (
        <Grid>
          <Grid item xs={12}>
            <Paper sx={styled.paper} elevation={2} style={{}}>
              <Box sx={styled.containerCortes}>
                <Box sx={styled.cortes}>
                  <List sx={styled.lista}>
                    <Box>
                      <Typography>{item.cliente}</Typography>
                    </Box>
                    <Box>
                      <Typography>{item.data}</Typography>
                    </Box>
                    <Box>
                      <Typography>{item.hora}</Typography>
                    </Box>
                  </List>
                  <Box>
                    <Tooltip title="Conversar com o cliente">
                      <IconButton>
                        <WhatsAppIcon sx={styled.whats} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Editar agendamento">
                      <IconButton>
                        <AppRegistrationIcon sx={styled.edit} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Cancelar agendamento">
                      <IconButton>
                        <AutoDeleteOutlinedIcon sx={styled.delete} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default CortesBarbeiros;
