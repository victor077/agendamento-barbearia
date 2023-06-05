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
import barbearia from "../../../assets/barbearia.png";

const Barbearias = () => {
  const { data } = useQuery(["consultar-barbearias"], () =>
    BarbeariaClienteServe.getBarbearias()
  );

  const styled = useStyles();
  const navigate = useNavigate();

  const navigateAgendamento = (nomeBarbearia: string) => {
    navigate("./servicos/" + nomeBarbearia);
  };
  return (
    <>
      <HeaderCliente />
      <Box sx={styled.main}>
        {data?.body.map((items) => (
          <Tooltip title="Agendar">
            <Paper
              sx={styled.paper}
              elevation={3}
              onClick={() => navigateAgendamento(items.name as string)}
            >
              <List>
                <ListItem>
                  <ListItemAvatar sx={styled.itemAvatar}>
                    <Avatar src={barbearia} alt="tenis" sx={styled.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    secondary={
                      <Box sx={styled.containerInformacoes}>
                        <Typography sx={styled.titulo}>{items.name}</Typography>
                        <Typography sx={styled.subTitulo}>
                          Cidade:
                          <Typography sx={styled.informacoes}>
                            {items.address.city}
                          </Typography>
                        </Typography>
                        <Typography sx={styled.subTitulo}>
                          Celular:
                          <Typography sx={styled.informacoes}>
                            {items.phone}
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
