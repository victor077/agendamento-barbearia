import React from "react";

import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import useStyles from "./styled";

const HeaderLogin = () => {
  const styled = useStyles();
  return (
    <Box sx={styled.containerLogo}>
      <NavLink style={{ textDecoration: "none" }} to="/">
        <Typography sx={styled.logo}>
          Corta <Typography sx={styled.subLogo}>Ai</Typography>
        </Typography>
      </NavLink>
    </Box>
  );
};

export default HeaderLogin;
