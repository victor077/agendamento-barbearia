import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useStyles from "./styled";
import Typography from "@mui/material/Typography";

const DadosPerfil = () => {
  const styled = useStyles();
  return (
    <Box sx={styled.main}>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={styled.listAvatar}>
            <Avatar sx={styled.avatar} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            secondary={
              <>
                <Typography sx={styled.titulo}>Victor</Typography>
                <Typography sx={styled.subTitulo}>Baber Shop</Typography>
                <Typography sx={styled.subTitulo}>11988786354</Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default DadosPerfil;
