import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { listImageBusiness } from '@/lib/constants/features/listBusinessOptions';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

export const CarouselBusinessMobile = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
          playOnInit: true,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full md:hidden px-4"
    >
      <CarouselContent>
        {listImageBusiness.map((item, index) => (
          <CarouselItem key={index} className="mx-auto flex justify-center">
            <div className="bg-[#435655] px-[56px] pt-[45px] rounded-[16px] border mt-10 border-[#586968]">
              <Image src={item.src} className={`${item.style}`} alt="item" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
