import React from "react";
import Section from "components/Section";
import Image from "next/image";

const Text = () => {
  return (
    <Section className="body-font">
      <div className="container px-5 py-8 mx-auto flex flex-wrap">
        <h1 className="text-3xl md:text-5xl text-center font-bold pb-8">
          Características de la Yerba Orgánica
        </h1>

        <p className="pb-4 leading-relaxed">
          La característica principal de la yerba orgánica, como de cualquier
          alimento de este tipo, es que desde el momento de su plantación hasta
          su procesamiento, no se expone a insecticidas, plaguicidas o
          agrotóxicos. De esta manera la yerba mate orgánica se mantiene libre
          de contaminantes químicos, manteniendo así una etapa del proceso de
          cultivo y elaboración totalmente natural.
        </p>
        <p className="leading-relaxed">
          El proceso productivo de la yerba orgánica es mucho más respetuoso del
          medio ambiente que el industrial, con lo que estamos contribuyendo al
          cuidado del planeta. La yerba mate es de secado natural, cuyo proceso
          no se acelera artificialmente. Esto evita la oxidación de la hoja y
          por tanto reduce su efecto acidificante. Además, no tiene adición de
          saponinas; esta sustancia es un componente natural presente en baja
          dosis en la yerba, pero se agrega industrialmente <br /> como aditivo
          para lograr mayor espumosidad y resistencia al “lavado”. La saponina
          causa acidez en el consumo del mate.
        </p>
      </div>
    </Section>
  );
};

export default Text;
