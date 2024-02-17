import React from 'react';

export const SectionAbout: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative flex h-max w-full mt-16 rounded-md bg-[#00000040] border border-[#F2B279]"
    >
      <div className="text-white grid-cols-2 flex flex-col md:grid p-4">
        <span className=" w-full md:h-[90vh] max-h-[972px]" />

        <div className="flex items-center justify-center w-full">
          <span className="bg-[#00000050] p-6 h-min text-base">
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
