import Section from "components/Section";
import dynamic from "next/dynamic";

const ProductCard = dynamic(() => import("components/ProductCard"));

const Productos = ({ data }) => {
  return (
    <Section>
      <h1 className="text-5xl text-center font-black py-16 uppercase text-green-900">
        {data.products[0].categoryName}
      </h1>
      <ProductCard data={data} />
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
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps() {
  try {
    const req = await fetch(
      `https://yerba-mate-ajedrez-server.herokuapp.com/v1/products/`
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
