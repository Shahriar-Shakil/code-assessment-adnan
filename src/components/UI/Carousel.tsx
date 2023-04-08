import React from "react";
import Slider from "react-slick";

type Props = {
  children: React.ReactNode;
  sliderRef: any;
  settings: any;
};

export default function Carousel({ sliderRef, children, settings }: Props) {
  return (
    <Slider {...settings} ref={sliderRef}>
      {children}
    </Slider>
  );
}
