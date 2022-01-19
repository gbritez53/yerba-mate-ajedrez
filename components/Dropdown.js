import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Dropdown() {
  const router = useRouter();

  console.log("DROPROUTRT", router);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <a
            className={`${
              router.asPath === `/${router.query.name}` &&
              "text-white bg-lime-500 font-semibold"
            }  py-8 px-12 text-lg transform font-medium hover:scale-110 transition-all duration-300 ease-in-out`}
          >
            Productos
          </a>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-8 origin-top-right bg-cyan-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
          <div className=" ">
            <Menu.Item>
              {({ active }) => (
                <button className="w-full">
                  <Link href="/yerba-mate-ajedrez">
                    <a
                      className={`${
                        active ? "bg-lime-500 text-white" : "text-gray-900"
                      } group flex items-center w-full px-2 py-2 `}
                    >
                      Yerba Mate Ajedrez
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button className="w-full">
                  <Link href="/yerba-mate-taithang">
                    <a
                      className={`${
                        active ? "bg-lime-500 text-white" : "text-gray-900"
                      } group flex items-center w-full px-2 py-2 `}
                    >
                      Yerba Mate Taithang
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <button className="w-full">
                  <Link href="/azucar-mascabo">
                    <a
                      className={`${
                        active ? "bg-lime-500 text-white" : "text-gray-900"
                      } group flex items-center w-full px-2 py-2 `}
                    >
                      Az&uacute;car Mascabo
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button className="w-full">
                  <Link href="/mate-cocido">
                    <a
                      className={`${
                        active ? "bg-lime-500 text-white" : "text-gray-900"
                      } group flex items-center w-full px-2 py-2 `}
                    >
                      Mate Cocido
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button className="w-full">
                  <Link href="/fecula-de-mandioca">
                    <a
                      className={`${
                        active ? "bg-lime-500 text-white" : "text-gray-900"
                      } group flex items-center w-full px-2 py-2 `}
                    >
                      F&eacute;cula de Mandioca
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button className="w-full">
                  <Link href="/farina-de-mandioca">
                    <a
                      className={`${
                        active ? "bg-lime-500 text-white" : "text-gray-900"
                      } group flex items-center w-full px-2 py-2 `}
                    >
                      Fariña de Mandioca
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button className="w-full">
                  <Link href="/tinturas">
                    <a
                      className={`${
                        active ? "bg-lime-500 text-white" : "text-gray-900"
                      } group flex items-center w-full px-2 py-2 `}
                    >
                      Tinturas
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button className="w-full">
                  <Link href="/te-de-granel">
                    <a
                      className={`${
                        active ? "bg-lime-500 text-white" : "text-gray-900"
                      } group flex items-center w-full px-2 py-2 `}
                    >
                      T&eacute; en Hebras
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <button className="w-full">
                  <Link href={{}}>
                    <a
                      className={`${
                        active ? "bg-lime-500 text-white" : "text-gray-900"
                      } group flex items-center w-full px-2 py-2 `}
                    >
                      Otros Productos
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
