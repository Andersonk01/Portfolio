'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import imgapi from '../../image/img-api.png';
import imgapi2 from '../../image/img-api2.png';
import imgapi3 from '../../image/img-api3.png';
import { ScrollDownButton } from '@/components/ScrollDown';

export const CarouselCustom = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      className="w-full h-full rounded-sm flex items-center z-0 relative gap-0"
    >
      <CarouselContent className="h-min cursor-move">
        <CarouselItem>
          <Image
            alt="Imagem do projeto"
            src={imgapi}
            width={400}
            height={400}
            className="rounded-sm w-full md:basis-1/2 lg:basis-1/3"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="Imagem do projeto"
            src={imgapi2}
            width={400}
            height={400}
            className="rounded-sm w-full md:basis-1/2 lg:basis-1/3"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="Imagem do projeto"
            src={imgapi3}
            width={400}
            height={400}
            className="rounded-sm w-full md:basis-1/2 lg:basis-1/3"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="z-50 absolute -left-7 border-0 text-white bg-transparent p-2 animate-pulse" />
    </Carousel>
  );
};
