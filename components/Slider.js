import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { slides } from "constants/index";

const Slider = () => {
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
    <div>
      <Carousel infiniteLoop autoPlay renderThumbs={customRenderThumb}>
        {slides.map((slide, i) => (
          <div key={i} className="image">
            <Image
              className="w-full align-top"
              src={slide.img}
              alt={slide.title}
              width="1366"
              height="544"
              objectFit="cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
