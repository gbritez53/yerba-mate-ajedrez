import React from "react";
import Section from "components/Section";
import Image from "next/image";

const Nosotros = () => {
  return (
    <Section classes="xl:px-32 pt-16">
      <div className="p-6 mr-2 sm:rounded-lg flex flex-col items-center space-y-12 pb-20">
        <div>
          <h1 className="text-4xl  font-extrabold tracking-tight py-4 text-green-900 ">
            Sobre Nosotros
          </h1>
          <p className="text-lg font-medium text-gray-600 mt-2">
            Nuestro emprendimiento familiar nace en el año{" "}
            <span className="font-lato">2016</span>, sin embargo, nuestra
            historia se remonta muchos años antes, cerca de{" "}
            <span className="font-lato">1963</span> , con abuelos ucranianos y
            brasileños, dueños de los primeros yerbales en la zona rural de
            Apóstoles - Misiones, y a su vez se desempeñaban como catadores y
            sommeliers de la yerba mate. Es por esto que nace nuestra empresa,
            coincidimos en llevar un mate a tus manos y continuar con la labor
            de nuestros ancestros. Entendemos al mate como una forma de expresar
            amor a través del compartir.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold tracking-tight py-4 text-green-900 ">
            Yerba Mate Ajedrez:
          </h2>
          <p className="text-lg font-medium text-gray-600 mt-2">
            Nuestra yerba es secada y estacionada de manera natural por un
            período de <span className="font-lato">24</span> meses, con esto
            logramos potenciar los polifenoles que retrasan el envejecimiento
            prematuro de la piel, a su vez su bajo contenido en polvo la vuelve
            una yerba antiácida, está elaborada de manera artesanal sin
            agroquímicos. Contamos con <span className="font-lato">3</span>{" "}
            variedades: Premium Despalada (solo hoja), Hoja y Palo (tipo
            canchada) y Molida tradicional.
          </p>
        </div>
        <div className="relative">
          <h2 className="text-4xl font-extrabold tracking-tight py-4 text-green-900 ">
            Nuestra misión:
          </h2>
          <ul className="text-lg">
            <li className="list-disc ml-4 mb-4">
              Nos encontramos en una constante búsqueda por mejorar y elevar aún
              más la calidad de nuestros productos, invirtiendo en
              infraestructura y mano de obra, asegurando y obteniendo así, un
              excelente producto final para el consumidor.
            </li>
            <li className="list-disc ml-4 mb-8">
              Descubrir y desarrollar con éxito productos innovadores, que
              ayuden mejorar la calidad de vida de las personas.
            </li>
          </ul>
          <p className="font-semibold text-xl text-center flex items-center">
            Yerba Mate Ajedrez ¡Ja! ¡Que mate!, ¡una yerba que se disfruta por
            horas!
          </p>
          <figure className="absolute right-6 -bottom-6 animate-bounce pointer-events-none">
            <Image
              src="/mate.png"
              alt="icon mate"
              width={100}
              height={100}
              objectFit="cover"
              objectPosition="center"
            />
          </figure>
        </div>
      </div>
    </Section>
  );
};

export default Nosotros;
