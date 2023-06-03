import React from "react";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";
import useStyles from "./styled";
import { useNavigate } from "react-router-dom";
import HeaderCliente from "../Components/HeaderCliente/HeaderCliente";
import { useQuery } from "react-query";
import { BarbeariaClienteServe } from "../../../Packages/services/Cliente/Barbearias";
import { BarbeariaResponse } from "../../../Packages/services/Cliente/Barbearias/models/BarbeariasResponse";

const chamada = [
  {
    id: 1,
    barbearia: "Kevin Cortes",
    barbeiro: "Kevin",
    cidade: "São Paulo",
    celular: "11988634639",
    atendimento: "Fechado",
  },
  {
    id: 1,
    barbearia: "Mela Cortes",
    barbeiro: "Mela",
    cidade: "São Paulo",
    celular: "11988634639",
    atendimento: "Fechado",
  },
  {
    id: 1,
    barbearia: "HG Cortes",
    barbeiro: "Hugo",
    cidade: "São Paulo",
    celular: "11988634639",
    atendimento: "Fechado",
  },
];


// const { data } = useQuery({}['consultar-barbearias', () => BarbeariaClienteServe.getBarbearias()])
// console.log(data);


const Barbearias = () => {
  const styled = useStyles();
  const navigate = useNavigate();

  const navigateAgendamento = () => {
    navigate("./agendamento");
  };
  return (
    <>
      <HeaderCliente />
      <Box sx={styled.main}>
        {chamada.map((items) => (
          <Tooltip title="Agendar">
            <Paper
              sx={styled.paper}
              elevation={3}
              onClick={navigateAgendamento}
            >
              <List>
                <ListItem>
                  <ListItemAvatar sx={styled.itemAvatar}>
                    <Avatar src="" alt="tenis" sx={styled.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    secondary={
                      <Box sx={styled.containerInformacoes}>
                        <Typography sx={styled.titulo}>
                          {items.barbearia}
                        </Typography>
                        <Typography sx={styled.subTitulo}>
                          Barbeiro:
                          <Typography sx={styled.informacoes}>
                            {items.barbeiro}
                          </Typography>
                        </Typography>
                        <Typography sx={styled.subTitulo}>
                          Cidade:
                          <Typography sx={styled.informacoes}>
                            {items.cidade}
                          </Typography>
                        </Typography>
                        <Typography sx={styled.subTitulo}>
                          Celular:
                          <Typography sx={styled.informacoes}>
                            {items.celular}
                          </Typography>
                        </Typography>
                        <Typography sx={styled.subTitulo}>
                          Atendimento:
                          <Typography sx={styled.informacoes}>
                            {items.atendimento}
                          </Typography>
                        </Typography>
                      </Box>
                    }
                  ></ListItemText>
                </ListItem>
              </List>
            </Paper>
          </Tooltip>
        ))}
      </Box>
    </>
  );
};

export default Barbearias;
