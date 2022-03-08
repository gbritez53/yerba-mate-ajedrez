import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiInstagramFill, RiFacebookBoxFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 w-full">
      <div className="container px-5 py-6 md:py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          &copy; 2022 Yerba mate ajedrez — todos los derechos reservados
        </p>
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
          <a
            className="simple-animation"
            href="https://www.facebook.com/yerbajedrez"
            rel="noreferrer"
            target="_blank"
          >
            <RiFacebookBoxFill className="text-2xl text-gray-400" />
          </a>
          <a
            className="simple-animation"
            href="https://www.instagram.com/yerbaajedrez/"
            rel="noreferrer"
            target="_blank"
          >
            <RiInstagramFill className="text-2xl text-gray-400" />
          </a>
          <a
            className="simple-animation"
            href="mailto:yerbamateajedrez@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <MdOutlineEmail className="text-2xl text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
