import Section from "components/Section";
import dynamic from "next/dynamic";
import Head from "next/head";

const ProductCard = dynamic(() => import("components/ProductCard"));

const Productos = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.length === 0 ? "Yerba Mate Ajedrez" : data[0].name}</title>
      </Head>
      <Section>
        <h1 className="text-5xl text-center font-black py-16 uppercase text-green-900">
          {data[0].name}
        </h1>
        <ProductCard data={data} />
      </Section>
    </>
  );
};

export default Productos;

export async function getStaticPaths() {
  const res = await fetch(
    "https://yerba-mate-ajedrez-server.herokuapp.com/v1/categories"
  );
  const data = await res.json();
  return {
    paths: data.categories.map((category) => {
      return {
        params: {
          category: category.path,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    console.time("getStaticProps");
    const req = await fetch(
      `https://yerba-mate-ajedrez-server.herokuapp.com/v1/categories/${params.category}`
    );
    const data = await req.json();
    console.timeEnd("getStaticProps");
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
