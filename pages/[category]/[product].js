import React from "react";
import Section from "components/Section";
import Image from "next/image";

const Productos = ({ data }) => {
  const { product } = data;
  return (
    <Section>
      <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <figure className="relative h-52 md:h-[450px] w-full">
                  <Image
                    src={product.imgURL}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </figure>
                {/* <div className="border-4 border-lime-600 absolute z-0 inset-1 inset-y-2 md:inset-10"></div> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold text-2xl md:text-4xl mb-5 text-lime-800 text-center md:text-left">
                  {product.name}
                </h1>
                <p className="text-lg font-bold">
                  Peso: <span className="font-medium">{product.size}</span>
                </p>
                <p className="text-sm">
                  <span className="text-lg font-semibold">Descripcion:</span>{" "}
                  <br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                  Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                  voluptates, sint enim fugiat saepe, dolor fugit, magnam
                  explicabo eaque quas id quo porro dolorum facilis...
                </p>
              </div>
              <div>
                <div className="inline-block align-bottom">
                  <button className="bg-lime-400 opacity-75 uppercase hover:opacity-100 text-lime-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Productos;

export async function getStaticPaths() {
  const res = await fetch(
    "https://yerba-mate-ajedrez-server.herokuapp.com/v1/products"
  );
  const { products } = await res.json();
  return {
    paths: products.map((product) => {
      return {
        params: {
          category: product.categoryPath,
          product: product.path,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const req = await fetch(
      `https://yerba-mate-ajedrez-server.herokuapp.com/v1/products/${params.product}`
    );
    const data = await req.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
