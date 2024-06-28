'use client';
import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export const CarouselCompany = ({ data }: { data: any }) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          playOnInit: true,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className=" md:w-[800px] items-center mx-auto mt-8 md:mt-20"
    >
      <CarouselContent>
        {data &&
          data.map((item: any, index: number) => (
            <CarouselItem
              key={index}
              className="basis-1/3 md:basis-1/6 items-center flex justify-center "
            >
              <div className="border border-[#E8E9E9] rounded-[16px]  w-[90px] h-[90px] md:w-[120px] md:h-[120px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full"
                  width={100}
                  height={100}
                  loading="eager"
                />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};
