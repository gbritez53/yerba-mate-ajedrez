import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
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
                <a className="text-lg">Inicio</a>
              </Link>
              <Link href="/nosotros">
                <a className="text-lg">Nosotros</a>
              </Link>
              <Link href="/productos">
                <a className="text-lg">Productos</a>
              </Link>
              <Link href="/contacto">
                <a className="text-lg">Contacto</a>
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
