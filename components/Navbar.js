import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <nav className="bg-white h-[80px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <Link href="/">
                <a className="text-2xl font-bold ">
                  <figure className="flex items-center">
                    <Image
                      src="/logo-sin-frase.png"
                      alt="Yerba mate"
                      width={80}
                      height={80}
                      objectFit="contain"
                    />
                  </figure>
                </a>
              </Link>
            </div>

            <div className="flex space-x-12 items-center font-medium text-gray-600">
              <Link href="/">
                <a
                  className={`${
                    router.pathname === "/" && "text-lime-500 font-semibold"
                  } text-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out`}
                >
                  Inicio
                </a>
              </Link>
              <Link href="/nosotros">
                <a
                  className={`${
                    router.pathname === "/nosotros" &&
                    "text-lime-500 font-semibold"
                  } text-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out`}
                >
                  Nosotros
                </a>
              </Link>
              <Link href="/productos">
                <a
                  className={`${
                    router.pathname === "/productos" &&
                    "text-lime-500 font-semibold"
                  } text-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out`}
                >
                  Productos
                </a>
              </Link>
              <Link href="/contacto">
                <a
                  className={`${
                    router.pathname === "/contacto" &&
                    "text-lime-500 font-semibold"
                  } text-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out`}
                >
                  Contacto
                </a>
              </Link>
              <span className="md:hidden">
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  rounded
                  label={"show Menu"}
                  color={"#15803d"}
                  size={32}
                />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
