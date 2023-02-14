import React from "react";
import Slider from "../../../../components/Slider/Slider";
import { Slide, SliderProps } from "../../../../components/Slider";

import galery1 from "../../../../assets/galery1.png";
import galery2 from "../../../../assets/galery2.png";
import galery3 from "../../../../assets/galery3.png";
import galery4 from "../../../../assets/galery4.png";
import galery5 from "../../../../assets/galery5.png";
import galery6 from "../../../../assets/galery6.png";

const fotosCarrousel = [
  {
    imagem: galery1,
  },
  {
    imagem: galery2,
  },
  {
    imagem: galery3,
  },
  {
    imagem: galery4,
  },
  {
    imagem: galery5,
  },
  {
    imagem: galery6,
  },
];

const Carrousel = () => {
  const settings: SliderProps = {
    spaceBetween: 1,
    slidesPerView: 3,
    navigation: true,
    loop: true,
    pagination: {
      clickable: true,
    },
  };
  return (
    <Slider settings={settings}>
      {fotosCarrousel.map((item) => (
        <Slide>
          <img src={item.imagem} alt="Barbearia" />
        </Slide>
      ))}
    </Slider>
  );
};

export default Carrousel;
