"use client";
import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Adiciona o próximo caractere ao texto exibido
      setDisplayedText((prevText) => prevText + text[currentIndex]);

      // Move para o próximo caractere no texto original
      setCurrentIndex((prevIndex) => prevIndex + 1);

      // Se atingir o final do texto, limpa o intervalo
      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, 100); // Ajuste a velocidade da máquina de escrever conforme necessário

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return <div>{displayedText}</div>;
};

// Uso do componente
export const TypeWriter = () => {
  const textToType = "Desenvolvedor Front End";

  return (
    <div>
      <h1>
        <TypewriterEffect text={textToType} />
      </h1>
    </div>
  );
};
