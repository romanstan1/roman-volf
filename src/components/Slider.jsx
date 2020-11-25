import React from "react";
import Slider from "react-slick";

import breakpoints from "../styles/breakpoints";

const SlickSlider = ({ children }) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: breakpoints.xsmall,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: breakpoints.large,
        settings: { slidesToShow: 2 },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SlickSlider;