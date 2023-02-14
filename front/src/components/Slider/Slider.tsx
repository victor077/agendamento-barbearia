import React, { ReactNode } from "react";

import { Swiper, SwiperProps } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css";

import "./styled.css";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

const Slider = ({ settings, children }: SliderProps) => {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
};

export default Slider;
