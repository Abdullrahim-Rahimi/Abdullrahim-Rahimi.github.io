'use client';
import Separator from '../separator/Separator';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { baseURLImage } from '@/helpers/axiosConfig';

export const OurMissing = ({
  setScroll,
  heroAbout,
}: {
  setScroll: Dispatch<SetStateAction<any>>;
  heroAbout: any;
}) => {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScroll(blockRef);
  }, [setScroll]);

  const imageAbout = new URL(
    heroAbout?.heropicture.data[0].attributes.url,
    baseURLImage,
  ).href;

  return (
    <div className="bg-white px-4 pt-[80px] pb-[140px]" ref={blockRef}>
      <div className="flex flex-col mx-auto text-center ">
        <h1 className="text-center text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          {heroAbout?.missingTitle}
        </h1>
        <p className="text-center text-[#455150] mt-3 ltr:font-montserrat text-base font-normal md:px-[440px]">
          {heroAbout?.missinngDescription}
        </p>
      </div>
      <Separator className="bg-[#E8E9E9] mt-12 md:hidden" />
      <div className="md:px-16 md:flex md:mt-[48px]">
        <div className="md:flex md:justify-between md:bg-white rounded-[16px]">
          <div className="md:w-[40%] md:my-auto md:pt-[0px]">
            <h5 className="text-[#A67F6B] pt-20 md:pt-0 text-base leading-6">
              {heroAbout?.personalizedPath.title}
            </h5>
            <h2 className="pt-2 text-[#172524] leading-10 text-4xl md:text-[40px] md:leading-[50px] font-bold">
              {heroAbout?.personalizedPath.subtitle}
            </h2>
            <p className="ltr:font-montserrat font-medium text-base pt-3 leading-8 text-primaryBtn md:text-[16px] md:leading-6 md:font-normal ">
              {heroAbout?.personalizedPath.description}
            </p>
          </div>
          <div className="flex mt-10 justify-center md:mt-0 items-center  ">
            {!imageAbout.includes('undefined') && (
              <Image
                className=" md:!w-[648px] md:!h-[480px]"
                src={imageAbout}
                alt="eyes in the leaves"
                width={1000}
                height={1000}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
