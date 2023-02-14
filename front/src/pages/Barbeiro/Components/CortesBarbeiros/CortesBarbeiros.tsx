import React from "react";

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

type ChamadaType = {
  id: number;
  nome: string;
  horario: string;
  servico: string;
  preco: string;
};

type CortesBarbeirosProps = {
  chamada: ChamadaType;
};

const CortesBarbeiros = ({ chamada }: CortesBarbeirosProps) => {
  const styled = useStyles();

  return (
    <Grid>
      <Grid item xs={12}>
        <Paper sx={styled.paper} elevation={2} style={{}}>
          <Box sx={styled.containerCortes}>
            <Box sx={styled.cortes}>
              <List sx={styled.lista}>
                <Box>
                  <Typography>{chamada.nome}</Typography>
                </Box>
                <Box>
                  <Typography>{chamada.horario}</Typography>
                </Box>
                <Box>
                  <Typography>{chamada.servico}</Typography>
                </Box>
                <Box>
                  <Typography> R${chamada.preco}</Typography>
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
  );
};

export default CortesBarbeiros;
