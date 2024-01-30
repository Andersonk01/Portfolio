import React from "react";
import Image from "next/image";

export const SectionAbout: React.FC = () => {
  return (
    <section className="border-b-8 border-yellow-400 flex h-min w-full overflow-hidden mt-4 z-10 bg-fixed bg-[url('/image/sample.gif')]  bg-center bg-no-repeat bg-coover rounded-3xl">
      <div className="text-white grid-cols-2 flex flex-col md:grid bg-[#00000060] p-4">
        <div className="flex items-center justify-center w-full">
          <span className="bg-[#00000030]  p-6 h-min text-base">
            <h2 className="text-4xl mb-7">
              Um Pouco <strong className="text-yellow-400">sobre mim</strong>
            </h2>
            <p className="mb-7 text-justify">
              Hi Everyone, Sou{" "}
              <strong className="text-yellow-400">Anderson Kauêr</strong>,
              natural do Maranhão, Brasil. Atualmente, estou no último período
              do curso de{" "}
              <strong className="text-yellow-400">
                Análise e Desenvolvimento de Sistemas
              </strong>
              , no Centro Universitário de Ciências e Tecnologia do Maranhão -
              (UniFacema).
            </p>
            <h3 className="text-base mb-2 text-justify">
              Sou apaixonado por tecnologia e sempre estou em busca de novos
              desafios. No meu tempo livre, gosto de:
            </h3>
            <ul className="text-sm">
              <li>👻 Coding</li>
              <li>🎸 Play Guitar</li>
              <li>🗺️ Read Books</li>
            </ul>
          </span>
        </div>

        <span className="flex justify-center items-center w-full">
          <Image
            alt="image-about"
            src="/image/about.png"
            width={400}
            height={400}
            className="rounded-[50%] bg-[#00000030] shadow-2xl h-auto w-auto"
          />
        </span>
      </div>
    </section>
  );
};
