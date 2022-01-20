import { Fragment } from "react";
import useWindowSize from "hooks/useWindowSize";
import { useState, useRef, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "constants/index";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);
  const { width } = useWindowSize();
  const router = useRouter();
  const wrapperRef = useRef(null);

  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          closeMobileMenu();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideClick(wrapperRef);

  return (
    <nav ref={wrapperRef}>
      <div className="bg-primary text-gray-800 z-50 w-full fixed top-0">
        <div className="max-w-full lg:max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <Link href="/">
                <a className="text-2xl font-bold ">
                  <figure className="flex items-center shrink-0">
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
              <div className="flex flex-col items-center uppercase">
                <p className=" md:text-4xl font-black text-green-900">
                  Yerba mate
                </p>
                <span className="text-sm">Estacionamiento Natural</span>
              </div>
            </div>
            <div className="hidden md:flex items-center font-medium text-gray-800">
              <Link href="/">
                <a
                  className={`${
                    router.pathname === "/" &&
                    "text-white bg-lime-500 font-semibold"
                  }  py-7 px-12 text-lg transform hover:scale-110 transition-all duration-300 ease-in-out`}
                >
                  Inicio
                </a>
              </Link>

              <Link href="/nosotros">
                <a
                  className={`${
                    router.pathname === "/nosotros" &&
                    "text-white bg-lime-500 font-semibold"
                  }  py-7 px-12 text-lg transform hover:scale-110 transition-all duration-300 ease-in-out`}
                >
                  Nosotros
                </a>
              </Link>

              <Dropdown />

              <Link href="/contacto">
                <a
                  className={`${
                    router.pathname === "/contacto" &&
                    "text-white bg-lime-500 font-semibold"
                  }  py-7 px-12 text-lg transform hover:scale-110 transition-all duration-300 ease-in-out`}
                >
                  Contacto
                </a>
              </Link>
            </div>
            <span className="md:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                rounded
                label={"show Menu"}
                color={"#84cc16"}
                size={32}
              />
            </span>
          </div>
        </div>
      </div>

      {/* mobile menu */}

      <div
        className={`${
          isOpen ? "h-80 " : "h-0 "
        }bg-primary flex flex-col items-center overflow-hidden transition-all ease-out duration-300 pt-20`}
      >
        {navLinks.map((link, i) => (
          <Link key={i} href={link.path}>
            <a
              onClick={closeMobileMenu}
              className={`${
                router.pathname === link.path &&
                "bg-lime-500 font-semibold text-white"
              } py-4 w-full text-center hover:text-white hover:bg-lime-600 `}
            >
              {link.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
