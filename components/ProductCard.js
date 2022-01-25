import { useState, useEffect } from "react";
import Image from "next/image";
import useInView from "react-cool-inview";
import Link from "next/link";
import Spinner from "components/Spinner";

const ProductCard = ({ data }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 9000);
  }, []);

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {data.products.map((product) => (
        <div
          key={product._id}
          className=" shadow-lg rounded-lg h-[400px] w-60 md:w-72 m-auto bg-white overflow-hidden space-y-4"
        >
          <figure className="relative h-60 w-full">
            {!loading ? (
              <Spinner height={100} width={100} classes="h-48" />
            ) : (
              <Image
                src={product.imgURL}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            )}
          </figure>
          <div className="px-4 space-y-2 flex flex-col justify-between">
            <div>
              <p className="text-lime-700 text-xl font-semibold ">
                {product.name}
              </p>
              <p className="text-gray-800 text-lg font-medium ">
                {product.size}
              </p>
              <p className="truncate hover:text-clip ">{product.description}</p>
            </div>
            <div className="flex justify-center w-full py-2">
              <Link href={`/${product.category}/${product._id}`}>
                <a className="bg-lime-600 px-5 py-1 text-lg text-white rounded transition transform hover:-translate-y-1 hover:shadow-lg hover:scale-110 duration-300 ease-in-out">
                  Ver más
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
