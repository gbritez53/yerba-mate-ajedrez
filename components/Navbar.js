import useWindowSize from "hooks/useWindowSize";
import { useState, useRef, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "constants/index";

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
      <div className="bg-white fixed z-50 w-full">
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
            </div>
            <div className="hidden md:flex items-center font-medium text-gray-600">
              {navLinks.map((link, i) => (
                <Link key={i} href={link.path}>
                  <a
                    className={`${
                      router.pathname === link.path &&
                      "text-white bg-lime-600 font-semibold"
                    }  py-7 px-12 text-lg transform hover:scale-110 transition-all duration-300 ease-in-out`}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
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
          isOpen ? "h-56 " : "h-0 "
        }bg-white flex flex-col items-center overflow-hidden transition-all ease-out duration-300`}
      >
        {navLinks.map((link, i) => (
          <Link key={i} href={link.path}>
            <a
              onClick={closeMobileMenu}
              className={`${
                router.pathname === link.path &&
                "bg-lime-500 font-semibold text-white"
              } py-4 w-full text-center hover:text-white hover:bg-lime-500 `}
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
