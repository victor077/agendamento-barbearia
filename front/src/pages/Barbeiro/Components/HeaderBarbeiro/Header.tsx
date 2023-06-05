import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useStyles from "./styled";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

type HeaderBarbeiro = {
  title: string;
  name: string;
};

const HeaderBarbeiro = ({ title, name }: HeaderBarbeiro) => {
  const styled = useStyles();
  return (
    <Box sx={styled.containerHeader}>
      <Box sx={styled.navContainer}>
        <Box>
          <Typography sx={styled.titulo}>{title}</Typography>
        </Box>
        <Box sx={styled.containerPerfil}>
          <Typography sx={styled.perfil}>Seja bem vindo</Typography>
          <ListItemAvatar>
            <Avatar sx={styled.avatar} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderBarbeiro;
