import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaGithubAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import astrobg from '../../image/astro.svg';

type TCard = {
  title: string;
  typeSite?: string;
  srcImg: string;
  linkProject: string;
  linkGit: string;
};

export const Card = ({
  title = '',
  typeSite = 'Website',
  srcImg = '',
  linkProject = '',
  linkGit = 'https://github.com/Andersonk01',
}: TCard) => {
  return (
    <div className="p-0 w-full max-w-80 h-80 rounded-md bg-[#bf02de45] hover:bg-[#bf02de60] overflow-hidden shadow-[5px_2px_0px_#000]">
      <Image
        src={srcImg}
        alt="Next.js"
        width={300}
        height={200}
        layout="responsive"
      />
      <div className="p-2 text-black w-full relative bg-transparent z-10 overflow-hidden">
        <p className="text-xs text-gray-300">{typeSite}</p>
        <h2 className="text-lg font-bold p-1 mb-2">{title}</h2>

        <span className="p-2 text-black w-full flex items-end justify-between">
          <Link href={linkProject} target="_blank">
            <Button variant="link" size="sm" className="text-xs p-0 h-min m-0">
              Visitar
            </Button>
          </Link>
          <Link href={linkGit} target="_blank">
            <FaGithub
              size={20}
              className="text-white hover:scale-110 hover:animate-spin"
            />
          </Link>
        </span>
        <Image
          src={astrobg}
          alt="Next.js"
          className="w-full h-full absolute -left-0 bottom-0 -z-10"
        />
      </div>
    </div>
  );
};
