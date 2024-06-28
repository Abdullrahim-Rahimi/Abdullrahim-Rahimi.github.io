'use client';
import { useEffect, useState } from 'react';
import { CarouselCompany } from '../carouselCompany/CarouselCompany';
import axiosInstance from '@/helpers/axiosConfig';
import { useLoadingStore } from '@/store/loading';
import { Skeleton } from '../ui/skeleton';

export const OurPartnersSection = ({
  stylePartners,
}: {
  stylePartners?: string;
}) => {
  const { array } = useLoadingStore();
  const [ourPartners, setOurPartners] = useState<any>();
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axiosInstance.get('/partners');

        setOurPartners(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={` px-4 mt-[80px] pb-[112px] ${stylePartners} bg-white`}>
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          {ourPartners?.[0].attributes.title}
        </h1>
        <p className="text-center text-[#455150] mt-3 font-montserrat md:text-base md:font-normal">
          {ourPartners?.[0].attributes.subtitle}
        </p>
      </div>
      {array.length ? (
        <CarouselCompany data={array} />
      ) : (
        <div className="md:w-[800px] items-center mx-auto mt-8 md:mt-20 flex space-x-9 md:space-x-3 justify-center">
          <Skeleton className="hidden md:block  w-[90px] h-[90px] md:w-[120px] md:h-[120px] " />
          <Skeleton className="hidden md:block  w-[90px] h-[90px] md:w-[120px] md:h-[120px] " />
          <Skeleton className="hidden md:block  w-[90px] h-[90px] md:w-[120px] md:h-[120px] " />
          <Skeleton className="  w-[90px] h-[90px] md:w-[120px] md:h-[120px] " />
          <Skeleton className="  w-[90px] h-[90px] md:w-[120px] md:h-[120px] " />
          <Skeleton className="  w-[90px] h-[90px] md:w-[120px] md:h-[120px] " />
        </div>
      )}
    </div>
  );
};
