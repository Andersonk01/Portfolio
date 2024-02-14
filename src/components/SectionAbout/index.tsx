import React from 'react';
import Image from 'next/image';

// bg-fixed bg-[url('/image/sample.gif')]  bg-center bg-no-repeat bg-coover

export const SectionAbout: React.FC = () => {
  return (
    <section className="flex h-[100vh] w-full overflow-hidden mt-16 z-10 rounded-md ring-1 ring-[#F2B279]">
      <i id="sobre" className="hidden"></i>
      <div className="text-white grid-cols-2 flex flex-col md:grid bg-[#00000040] p-4">
        <span className="flex justify-center items-center w-full"></span>

        <div className="flex items-center justify-center w-full">
          <span className="bg-[#00000050]  p-6 h-min text-base">
            <h2 className="text-4xl mb-7">
              Um Pouco <strong className="text-[#F26E50]">sobre mim</strong>
            </h2>
            <p className="mb-7 text-justify">
              Hi Everyone, Sou{' '}
              <strong className="text-[#F26E50]">Anderson Kauêr</strong>,
              natural do Maranhão, Brasil. Atualmente, estou no último período
              do curso de{' '}
              <strong className="text-[#F26E50]">
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
      </div>
    </section>
  );
};
