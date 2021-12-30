import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LeftArrow from "public/icons/LeftArrow";
import RightArrow from "public/icons/RightArrow";

const Slider = () => {
  const slideContainer = useRef(null);
  // const slideInterval = useRef(null);

  const prev = () => {
    if (slideContainer.current.children.length > 0) {
      //Calculamos la longitud del slider
      const index = slideContainer.current.children.length - 1;
      //Obtenemos el ultimo elemento
      const lastChild = slideContainer.current.children[index];

      //Insertamos el ultimo elemento antes del primero
      slideContainer.current.insertBefore(
        lastChild,
        slideContainer.current.firstChild
      );

      slideContainer.current.style.transition = "none";

      const slideWidht = slideContainer.current.children[0].offsetWidth;
      //Movemos el slide
      slideContainer.current.style.transform = `translateX(-${slideWidht}px)`;

      setTimeout(() => {
        slideContainer.current.style.transition = `500ms ease-out all`;
        slideContainer.current.style.transform = `translateX(0)`;
      }, 50);
    }
  };

  const next = () => {
    if (slideContainer.current.children.length > 0) {
      //Obtenemos el primer elemento
      const firstChild = slideContainer.current.children[0];

      //Accedemos a los estilos y le damos una transición
      slideContainer.current.style.transition = `500ms ease-out all`;

      const slideWidht = firstChild.offsetWidth;

      //Movemos el slide
      slideContainer.current.style.transform = `translateX(-${slideWidht}px)`;

      const transition = () => {
        // Reiniciamos la posicion del Slideshow.
        slideContainer.current.style.transition = "none";
        slideContainer.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final.
        slideContainer.current.appendChild(firstChild);

        //Eliminamos el EventListener
        slideContainer.current.removeEventListener("transitionend", transition);
      };

      //EventListenner para cuando termina la animación
      slideContainer.current.addEventListener("transitionend", transition);
    }
  };

  // useEffect(() => {
  //   slideInterval.current = setInterval(() => {
  //     next();
  //   }, 5000);

  //   slideContainer.current.addEventListener("mouseenter", () => {
  //     clearInterval(slideInterval.current);
  //   });

  //   slideContainer.current.addEventListener("mouseleave", () => {
  //     slideInterval.current = setInterval(() => {
  //       next();
  //     }, 5000);
  //   });
  // }, []);

  return (
    <div className="slideshow">
      <div className="mainContainer relative">
        <div className="slideContainer" ref={slideContainer}>
          <div className="slide">
            <Link href="/">
              <a className="">
                <Image
                  className="w-full align-top"
                  src="/slide1.png"
                  width="1058"
                  height="268"
                  alt="slide1"
                />
              </a>
            </Link>
            <div className="slideText relative bg-gray-900 lg:opacity-70 lg:absolute bottom-1.5 lg:bottom-0 py-2">
              <p className="text-xs md:text-lg">
                Lorem ipsum dolor sit, possimus, molestias.
              </p>
            </div>
          </div>

          <div className="slide">
            <Link href="/">
              <a className="w-full align-top">
                <Image
                  src="/slide2.png"
                  width="1058"
                  height="268"
                  alt="slide1"
                />
              </a>
            </Link>
            <div className="slideText relative bg-gray-900 lg:opacity-70 lg:absolute bottom-1.5 lg:bottom-0 py-2">
              <p className="text-xs md:text-lg">
                Lorem ipsum dolor sit, possimus, molestias.
              </p>
            </div>
          </div>

          <div className="slide">
            <Link href="/">
              <a className="w-full align-top">
                <Image
                  src="/slide3.png"
                  width="1058"
                  height="268"
                  alt="slide1"
                />
              </a>
            </Link>
            <div className="slideText relative bg-gray-900 lg:opacity-70 lg:absolute bottom-1.5 lg:bottom-0 py-2">
              <p className="text-xs md:text-lg">
                Lorem ipsum dolor sit, possimus, molestias.
              </p>
            </div>
          </div>

          <div className="slide">
            <Link href="/">
              <a className="w-full align-top">
                <Image
                  src="/slide4.png"
                  width="1058"
                  height="268"
                  alt="slide1"
                />
              </a>
            </Link>
            <div className="slideText relative bg-gray-900 lg:opacity-70 lg:absolute bottom-1.5 lg:bottom-0 py-2">
              <p className="text-xs md:text-lg">
                Lorem ipsum dolor sit, possimus, molestias.
              </p>
            </div>
          </div>
        </div>
        <div className="controllers">
          <button className="buttons" onClick={prev}>
            <LeftArrow />
          </button>
          <button className="buttons" onClick={next}>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
