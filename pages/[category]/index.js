import Section from "components/Section";
import dynamic from "next/dynamic";

const ProductCard = dynamic(() => import("components/ProductCard"));

const Productos = ({ data }) => {
  console.log("data", data);
  return (
    <Section>
      <h1 className="text-5xl text-center font-black py-16 uppercase text-green-900">
        {data[0].name}
      </h1>
      <ProductCard data={data} />
    </Section>
  );
};

export default Productos;

export async function getStaticPaths() {
  const res = await fetch(
    "https://yerba-mate-ajedrez-server.herokuapp.com/v1/categories"
    // "http://localhost:8080/v1/categories/"
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
    const req = await fetch(
      `https://yerba-mate-ajedrez-server.herokuapp.com/v1/categories/${params.category}`
      // `http://localhost:8080/v1/categories/${params.category}`
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
