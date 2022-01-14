import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { slides } from "constants/index";
import useWindowSize from "hooks/useWindowSize";

const Slider = () => {
  const { width } = useWindowSize();
  const customRenderThumb = (slides) => {
    slides.map((slide, i) => (
      <div key={i} className="image">
        <Image
          className="w-full align-top"
          src={slide.img}
          alt={slide.title}
          objectFit="cover"
        />
      </div>
    ));
  };

  return (
    <Carousel infiniteLoop autoPlay renderThumbs={customRenderThumb}>
      {slides.map((slide, i) => (
        <div key={i} className="image">
          <Image
            className="w-full align-top"
            src={slide.img}
            alt={slide.title}
            width={width > 1366 ? "1920" : "1366"}
            height={width > 1366 ? "768" : "587"}
            objectFit="cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
