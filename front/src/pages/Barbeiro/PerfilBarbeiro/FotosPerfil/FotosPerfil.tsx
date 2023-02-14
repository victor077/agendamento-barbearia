import React, { useState } from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import useStyles from "./styled";

const FotosPerfil = () => {
  const styled = useStyles();
  const [value, setValue] = useState(0);

  const handleAtualizarImage = () => {
    const opa = value + 1;
    setValue(opa);
    console.log(value);
  };
  return (
    <Box sx={styled.main}>
      <ImageList sx={styled.containerImageList} cols={3} gap={80}>
        <ImageListItem onClick={handleAtualizarImage} sx={styled.imageList}>
          <img src="" alt="1" />
        </ImageListItem>
        <ImageListItem onClick={handleAtualizarImage} sx={styled.imageList}>
          <img src="" alt="1" />
        </ImageListItem>
        <ImageListItem onClick={handleAtualizarImage} sx={styled.imageList}>
          <img src="" alt="1" />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default FotosPerfil;
