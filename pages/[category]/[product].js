import React from "react";
import Section from "components/Section";
import { useRouter } from "next/router";

const Productos = ({ data }) => {
  const { product } = data;

  return (
    <Section>
      <h1 className="text-5xl text-center font-bold py-8">{product.name}</h1>
      <p>Produc Page</p>
    </Section>
  );
};

export default Productos;

export async function getStaticPaths() {
  const res = await fetch(
    "https://yerba-mate-ajedrez-server.herokuapp.com/v1/products"
  );
  const data = await res.json();
  return {
    paths: data.products.map((product) => {
      return {
        params: {
          category: product.category,
          product: product._id,
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
    console.log(error);
  }
}
