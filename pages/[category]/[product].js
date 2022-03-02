import React from "react";
import Section from "components/Section";
import Image from "next/image";
import Spinner from "components/Spinner";

const Productos = ({ data }) => {
  const { product } = data;
  return (
    <Section>
      <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl px-10 lg:px-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="rounded-lg overflow-hidden my-4">
                <figure className="relative">
                  <Image
                    src={
                      product.contentImg === ""
                        ? product.imgURL
                        : product.contentImg
                    }
                    alt={product.name}
                    width={455}
                    height={540}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </figure>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-8">
                <h1 className="font-bold text-2xl md:text-4xl mb-5 text-lime-800 text-center md:text-left">
                  {product.name}
                </h1>
                <p className="text-lg font-bold">
                  Contenido Neto:{" "}
                  <span className="font-medium">{product.size}</span>
                </p>
                <div>
                  <span className="text-lg font-semibold">Descripcion:</span>{" "}
                  <br />
                  <p>{product.content}</p>
                </div>
              </div>
              <div>
                <div className="inline-block align-bottom">
                  <a
                    href="https://api.whatsapp.com/send?phone=543764231666"
                    target="_blanck"
                    rel="noreferrer"
                    className="bg-lime-400 opacity-75 uppercase hover:opacity-100 text-lime-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                  >
                    Contactar
                  </a>
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
