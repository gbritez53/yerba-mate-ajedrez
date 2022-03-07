import React from "react";
import Section from "components/Section";
import { MdOutlineEmail, MdCall } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { RiInstagramFill, RiFacebookBoxFill } from "react-icons/ri";

const Contacto = () => {
  return (
    <Section classes="xl:px-32 pt-16">
      <div className="p-6 mr-2 sm:rounded-lg flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight py-4 text-green-900 ">
          Contacto
        </h1>
        <p className="text-lg sm:text-2xl font-medium text-gray-600 mt-2">
          Si desea adquirir nuestros productos para reventa en comercio
          mayorista o minorista, almacén, feria o de manera personal, escríbanos
          a cualquiera de nuestros medios de comunicación habilitados, indicando
          la finalidad de compra, su localidad y provincia. No dude en
          escribirnos, estamos para servirles.
        </p>

        <div className="flex flex-col space-y-4 self-start">
          <div className="flex items-center mt-8 text-gray-600">
            <MdCall className="text-4xl text-lime-600" />
            <div className="ml-4 text-md tracking-wide font-semibold text-lg">
              VENTAS: +54 376 4231-666 (WhatsApp y llamadas)
            </div>
          </div>

          <div className="flex items-center mt-4 text-gray-600">
            <div className="w-9 h-9 overflow-hidden ">
              <ImWhatsapp className="text-4xl text-lime-600" />
            </div>
            <div className="ml-4 text-md tracking-wide font-semibold text-lg">
              Administración: +54 376 4897-777 (Sólo WhatsApp)
            </div>
          </div>

          <div className="flex items-center mt-2 text-gray-600">
            <MdOutlineEmail className="text-4xl text-lime-600" />
            <div className="ml-4 text-md tracking-wide font-semibold text-lg">
              yerbamateajedrez@gmail.com
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-16 w-2/3">
          <h3 className="text-2xl font-bold text-gray-900">
            ¡TAMBIÉN PODÉS SUMARTE A NUESTRAS REDES SOCIALES!
          </h3>
          <div className="flex w-full 2xl:w-2/3 justify-around px-12 py-8">
            <a href="">
              <RiInstagramFill className="text-4xl text-lime-600" />
            </a>
            <a href="">
              <RiFacebookBoxFill className="text-4xl text-lime-600" />
            </a>
            <a href="">
              <MdOutlineEmail className="text-4xl text-lime-600" />
            </a>
          </div>
          <p className="font-semibold">YERBA MATE AJEDREZ ¡JÁ! ¡QUE MATE!</p>
        </div>
      </div>
    </Section>
  );
};

export default Contacto;
