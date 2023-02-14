import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Navbar from "./NavBar/Navbar";

import useStyles from "./styled";

const Header = () => {
  const styled = useStyles();
  return (
    <Box sx={styled.containerHeader}>
      <Box sx={styled.header}>
        <Typography sx={styled.corta}>
          Corta <Typography sx={styled.ai}>Ai</Typography>
        </Typography>
        <Navbar />
      </Box>
    </Box>
  );
};

export default Header;
