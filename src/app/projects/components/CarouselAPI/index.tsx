"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import imgapi from "../../image/img-api.png";
import imgapi2 from "../../image/img-api2.png";
import imgapi3 from "../../image/img-api3.png";

export const CarouselCustom = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
      className="w-full h-full overflow-y-hidden rounded-sm"
    >
      <CarouselContent className="h-min">
        <CarouselItem>
          <Image
            alt="Imagem do projeto"
            src={imgapi}
            width={400}
            height={400}
            className="rounded-sm w-full"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="Imagem do projeto"
            src={imgapi2}
            width={400}
            height={400}
            className="rounded-sm w-full"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="Imagem do projeto"
            src={imgapi3}
            width={400}
            height={400}
            className="rounded-sm w-full"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
