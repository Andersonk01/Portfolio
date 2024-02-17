import React from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from 'react-icons/di';
import {
  SiMysql,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
} from 'react-icons/si';

export const Tech = () => {
  return (
    <section className="p-4 w-full h-min flex flex-wrap justify-center gap-2 -z-10 mt-4">
      <span className="p-4 rounded-md w-min h-min border border-gray-800 hover:scale-110">
        <BiLogoTypescript size={30} />
      </span>
      <span className="p-4 rounded-md border w-min h-min border-gray-800 shadow-md hover:scale-110">
        <DiJavascript1 size={30} />
      </span>
      <span className="p-4 rounded-md border w-min h-min border-gray-800 shadow-xl hover:scale-110">
        <DiReact size={30} />
      </span>
      <span className="p-4 rounded-md border w-min h-min border-gray-800 hover:scale-110">
        <SiTailwindcss size={30} />
      </span>
      <span className="p-4 rounded-md border w-min h-min border-gray-800 hover:scale-110">
        <SiStyledcomponents size={30} />
      </span>
      <span className="p-4 rounded-md border w-min h-min border-gray-800 hover:scale-110">
        <FaCss3Alt size={30} />
      </span>
      <span className="p-4 rounded-md border w-min h-min border-gray-800 hover:scale-110">
        <FaHtml5 size={30} />
      </span>
      <span className="p-4 rounded-md border w-min h-min border-gray-800 hover:scale-110">
        <DiNodejs size={30} />
      </span>
      <span className="p-4 rounded-md border w-min h-min border-gray-800 hover:scale-110">
        <DiMongodb size={30} />
      </span>
      <span className="p-4 rounded-md border w-min h-min border-gray-800 hover:scale-110">
        <SiNextdotjs size={30} />
      </span>
      <span className="p-4 rounded-md border w-min h-min border-gray-800 hover:scale-110">
        <DiGit size={30} />
      </span>
      <span className="p-4 rounded-md border w-min h-min border-gray-800 hover:scale-110">
        <SiMysql size={30} />
      </span>
      <span className="p-4 rounded-md border w-min h-min border-gray-800 hover:scale-110">
        <DiPython size={30} />
      </span>
    </section>
  );
};
