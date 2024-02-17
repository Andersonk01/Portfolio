'use client';
import React from 'react';
import { Social } from '../Social';

export const Footer = () => {
  return (
    <section className="p-2 text-center w-full h-8 text-xs text-white flex items-center justify-center relative">
      <p>Anderson Kauer &copy; Todos os direitos reservados. 2024</p>
      <span className="absolute right-2 gap-2 hidden sm:flex">
        <Social sizeIcon={20} />
      </span>
    </section>
  );
};
