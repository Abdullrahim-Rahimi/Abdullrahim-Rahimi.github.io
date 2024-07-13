'use client';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import axiosInstance, { baseURLImage } from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useRouter } from 'next/navigation';

export const JoinTheDaisy = () => {
  const [joinDaisy, setJoinDaisy] = useState<any>();
  const [joinDaisyList, setJoinDaisyList] = useState<any>();

  const { lang } = useChangeLanguage();
  // const router = useRouter();
  useEffect(() => {
    (async function getJoinDaisy() {
      try {
        const response = await axiosInstance.get(
          `/join-daisies?locale=${lang}`,
        );
        const responseList = await axiosInstance.get(
          `/join-daisylists?populate=*&locale=${lang}`,
        );
        setJoinDaisyList(responseList?.data?.data);
        setJoinDaisy(response?.data?.data?.[0]?.attributes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [lang]);

  return (
    <div className="bg-white  px-4 md:px-16">
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          {joinDaisy?.title}
        </h1>
        <p className="text-center text-[#455150] mt-3 ltr:font-montserrat md:text-base md:font-normal">
          {joinDaisy?.subtitle}
        </p>
      </div>
      <ul className="mt-[48px] space-y-8 pb-20 md:flex md:space-y-0 md:gap-6">
        {joinDaisyList &&
          joinDaisyList.map((item: any, index: number) => {
            const imageJoin = new URL(
              item.attributes?.picture.data[0].attributes.url,
              baseURLImage,
            ).href;
            return (
              <li
                key={index}
                className="bg-white rounded-[12px]  border flex flex-col justify-center items-center overflow-hidden md:justify-start"
              >
                <Image
                  alt="joindaisy"
                  src={imageJoin}
                  className="rounded-top-[12px] block -mt-[1px] h-auto"
                  width={1000}
                  height={1000}
                />

                <div className="px-6 flex flex-col justify-end items-center ">
                  <h4 className="font-semibold text-2xl mt-6 md:mt-4">
                    {item?.attributes.joinDescription.title}
                  </h4>
                  <p className="mt-2 ltr:font-montserrat font-normal text-center text-[#455150]">
                    {item?.attributes.joinDescription.description}
                  </p>
                  <Button
                    className="bg-white w-full text-primary border border-primary py-[14px] px-[108px] my-6 ltr:font-montserrat text-base font-semibold hover:bg-primary hover:text-white"
                    // onClick={() => router.push('/contact')}
                  >
                    {item?.attributes.textButton}
                  </Button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
