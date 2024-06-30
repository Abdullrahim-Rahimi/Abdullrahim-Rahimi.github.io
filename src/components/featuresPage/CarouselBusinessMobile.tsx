import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { listImageBusiness } from '@/lib/constants/features/listBusinessOptions';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { baseURLImage } from '@/helpers/axiosConfig';

export const CarouselBusinessMobile = ({
  dataBusiness,
}: {
  dataBusiness: any;
}) => {
  const firstImage = new URL(
    dataBusiness?.firstImage.data[0].attributes.url,
    baseURLImage,
  ).href;
  const secondImage = new URL(
    dataBusiness?.secondImage.data[0].attributes.url,
    baseURLImage,
  ).href;
  const thirdImage = new URL(
    dataBusiness?.thirdImage.data[0].attributes.url,
    baseURLImage,
  ).href;

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
        <CarouselItem className="mx-auto flex justify-center">
          <div className="bg-[#435655] px-[56px] pt-[45px] rounded-[16px] border mt-10 border-[#586968]">
            <Image
              src={firstImage}
              className={'w-[220px] h-[350px]'}
              alt="item"
              width={1000}
              height={1000}
            />
          </div>
        </CarouselItem>
        <CarouselItem className="mx-auto flex justify-center">
          <div className="bg-[#435655] px-[56px] pt-[45px] rounded-[16px] border mt-10 border-[#586968]">
            <Image
              src={secondImage}
              className={'w-[220px] h-[350px]'}
              alt="item"
              width={1000}
              height={1000}
            />
          </div>
        </CarouselItem>
        <CarouselItem className="mx-auto flex justify-center">
          <div className="bg-[#435655] px-[56px] pt-[45px] rounded-[16px] border mt-10 border-[#586968]">
            <Image
              src={thirdImage}
              className={'w-[220px] h-[350px]'}
              alt="item"
              width={1000}
              height={1000}
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
