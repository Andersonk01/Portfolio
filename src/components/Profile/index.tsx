import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { Social } from '../Social';

export const Profile = () => {
  return (
    <section className="relative shadow-sm shadow-white container mx-auto p-4 bg-[#5fa8df] rounded-lg  min-w-32 max-h-min  sm:w-[80%]">
      <div className="absolute right-1 top-1 border-r-2 border-t-2 border-[#A63838]  rounded-r-sm ">
        <Button
          variant="ghost"
          size={'sm'}
          className="font-mono font-medium text-sm rounded-none hover:bg-[#F26E50]"
        >
          EN
        </Button>
        <Button
          variant="ghost"
          size={'sm'}
          className="font-mono font-medium text-sm rounded-none hover:bg-[#F26E50]"
        >
          PT
        </Button>
      </div>
      <div className="grid-cols-2 flex flex-col gap-6 md:grid">
        <span className="flex flex-col justify-start items-start p-3">
          <Button
            variant={'secondary'}
            size={'sm'}
            className="font-mono font-extralight bg-[#F2B279] text-[0.6rem] rounded-none opacity-85 h-[18px] cursor-default"
          >
            One step at a time...🔥{' '}
          </Button>
          <h1 className="text-4xl font-bold mb-2 mt-2 ">
            Anderson <strong className="text-[#F26E50]">K</strong>au
            <strong className="text-[#F26E50]">êr</strong>
          </h1>
          <h2 className="mb-4">Desenvolvedor Front End</h2>

          <p className="justify-start text-left text-sm mb-4">
            Se você está sempre tentando ser normal, nunca saberá o quão
            incrível você pode ser. - Maya Angelou 💎⚓
          </p>

          <Link href="#">
            <Button
              variant={'ghost'}
              className="rounded-sm font-light text-black border"
            >
              Download my resume (PDF)
            </Button>
          </Link>
        </span>
        <span className="flex justify-center items-center w-full">
          <Image
            src="/image/perfil.jpeg"
            alt="logo"
            width={400}
            height={400}
            className="rounded-3xl"
            priority
          />
        </span>
      </div>

      <div className="flex justify-center items-center mt-2 gap-2">
        <Social sizeIcon={24} />
      </div>
    </section>
  );
};
