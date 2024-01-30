"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Social } from "@/components/Social";

export const HeaderMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="border-b border-b-zinc-700 backdrop-blur-sm fixed top-0 left-0 w-full h-12 z-50">
      <motion.img
        src="/assets/llama-med.gif"
        alt="llama"
        initial={{ x: -40 }}
        animate={{ x: 100 + "vw" }}
        transition={{
          duration: 12,
          repeat: Infinity,
          delay: 1,
          mass: 0.8,
          ease: "linear",
        }}
        className={`absolute w-10 h-12 p-0 bottom-[-8px] left-0 hover:h-16 cursor-progress`}
      />
      <nav className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-white">AK</h1>
        </Link>
        <div className="flex items-center justify-end h-16">
          <div className="flex items-center">
            <div className="hidden md:block items-center space-x-4">
              <Link
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <span className="border-r bg-white h-full" />
              <Link
                href="/projects"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Projects
              </Link>
              <span className="border-r bg-white h-full" />
              <Link
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Articles
              </Link>

              <span className="border-r bg-white h-full" />
              <Link
                href="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="z-50 outline-none inline-flex items-center justify-center p-2  text-gray-400 hover:text-white  hover:bg-transparent"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: "#c32c2c" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "100vh" : 0 }}
        transition={{ duration: 0.3, type: "keyframes" }}
        className={`${
          isOpen ? "flex" : "hidden"
        } transition-all z-40 md:hidden overflow-hidden h-[100vh] bg-gradient-to-l from-[#000] to-[#140f23] w-full place-items-start`}
      >
        <div className="z-50 flex flex-col items-center h-min w-full px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </Link>
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Articles
          </Link>
          <Link
            href="/contact"
            className="bt-4 text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <span className="flex justify-center mt-4 gap-1 w-full">
            <Social sizeIcon={20} />
          </span>
        </div>
      </motion.div>
    </header>
  );
};
