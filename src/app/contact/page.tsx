"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Social } from "@/components/Social";

import { Permanent_Marker } from "next/font/google";

const permanent_marker = Permanent_Marker({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});
{
  /* <h4 className="text-base font-bold">E-mail:</h4> */
}
{
  /* <p className="text-base">kauercode@gmail.com</p> */
}
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <main className=" bg-[#f5d993] flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-[30vh] bg-gradient-to-r from-cyan-400 to-blue-500  flex items-end">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 1,
            mass: 100,
            damping: 8,
          }}
        >
          <h1 className="text-6xl font-bold text-gray-300 ml-8 mb-5">
            Contact me
          </h1>
        </motion.div>
      </div>

      <section className="relative -top-10 shadow-2xl shadow-[#c7b07790] container mx-auto p-4 backdrop-blur-sm border-t border-gray-300 min-w-32 max-h-min  sm:w-[80%]  ">
        <h2 className="text-left font-bold w-full text-white m-2 mt-6 pl-4">
          Me envie uma mensagem
        </h2>
        <div className="flex flex-wrap w-full rounded-md min-h-[80vh] p-4">
          <div className="w-full h-full md:w-1/2 mb-4 relative">
            <form
              onSubmit={handleSubmit}
              className="p-4 w-full h-full flex flex-col space-y-4 text-black"
            >
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <Button
                type="submit"
                variant="secondary"
                className="max-w-28 rounded-none"
              >
                Enviar
              </Button>
              <label className="text-xs text-gray-400 italic">
                *Suas informações não são usadas para spam
              </label>
            </form>

            <div className="relative -left-8 w-full flex flex-col gap-4 p-4 mt-1 md:mt-9">
              <h3 className="w-full text-center text-black">Social media</h3>
              <span className="w-1/2 border-b border-b-black absolute left-0 top-2/4" />
              <div className="flex justify-center items-center space-x-2">
                <Social sizeIcon={20} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full">
            <Image
              alt="contact"
              src="/image/contact.png"
              width={500}
              height={500}
              className="w-full h-full"
            />
            <h3
              className={`${permanent_marker.className} font-sans text-center w-full md:text-3xl text-base sm:text-xl text-[#449cd2]`}
            >
              Teve ideia de algum projeto?
              <br />
              Vamos fazer da certo!
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
