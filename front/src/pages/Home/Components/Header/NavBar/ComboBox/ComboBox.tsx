import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import useStyles from "./styled";

type ComboBoxProps = {
  titulo: string;
  tipoTitulo: "cliente" | "barbeiro";
};

const ComboBox = ({ titulo, tipoTitulo }: ComboBoxProps) => {
  const styled = useStyles();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const hadnleMenuClickClienteCadastro = () => {
    navigate("cadastro/cliente");
  };

  const hadnleMenuClickBarbeiroCadastro = () => {
    navigate("cadastro/barbeiro");
  };

  const hadnleMenuClickClienteLogin = () => {
    navigate("login/cliente");
  };

  const hadnleMenuClickBarbeiroLogin = () => {
    navigate("login/barbeiro");
  };

  const listaComboBoxCadastro = [
    {
      id: 1,
      nome: "Cliente",
      onNavigate: () => hadnleMenuClickClienteCadastro(),
    },
    {
      id: 2,
      nome: "Barbeiro",
      onNavigate: () => hadnleMenuClickBarbeiroCadastro(),
    },
  ];

  const listaComboBoxLogin = [
    {
      id: 1,
      nome: "Cliente",
      onNavigate: () => hadnleMenuClickClienteLogin(),
    },
    {
      id: 2,
      nome: "Barbeiro",
      onNavigate: () => hadnleMenuClickBarbeiroLogin(),
    },
  ];
  return (
    <Box>
      <Button
        sx={styled.button}
        variant="contained"
        onClick={handleClick}
      >
        {titulo}
      </Button>
      <Menu
        sx={styled.menu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        autoFocus={true}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {tipoTitulo === "cliente" &&
          listaComboBoxCadastro.map((item) => (
            <MenuItem
              sx={styled.item}
              key={item.id}
              onClick={() => item.onNavigate()}
            >
              {item.nome}
            </MenuItem>
          ))}
        {tipoTitulo === "barbeiro" &&
          listaComboBoxLogin.map((item) => (
            <MenuItem
              sx={styled.item}
              key={item.id}
              onClick={() => item.onNavigate()}
            >
              {item.nome}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

export default ComboBox;
