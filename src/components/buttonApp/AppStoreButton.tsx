'use client';
import axiosInstance from '@/helpers/axiosConfig';
import { Button } from '../ui/button';
import { AppStoreIcons } from '@/assets/icons/appMarket/AppStoreIcons';
import { useChangeLanguage } from '@/store/language';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const AppStoreButton = ({
  className,
  hoverText,
  fillHover,
}: {
  className?: string;
  hoverText?: string;
  fillHover?: string;
}) => {
  const [dataButton, setDataBuutton] = useState<any>();
  const router = useRouter();
  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(`/button-plays?locale=${lang}`);
      const [data] = response?.data?.data;
      setDataBuutton(data?.attributes?.objectAppPlay?.appStore);
    })();
  }, [lang]);

  return (
    <>
      <Button
        onClick={() => router.push(dataButton?.link)}
        variant="navigation"
        className={`w-full mr-0 h-full felx items-center justify-center rounded-xl py-4 group hover:bg-white hover:text-primary ${className}`}
      >
        <div className="flex items-center mr-3 rtl:flex-row-reverse">
          <AppStoreIcons
            w="36"
            h="36"
            className={`mr-3 rtl:ml-[15px] fill-white group-hover:fill-primary ${fillHover}`}
          />
          <div className={`hover:text-primary ${hoverText}`}>
            <p className="text-start ltr:font-inter font-normal text-xs leading-3">
              {dataButton?.download}
            </p>
            <p className="text-start ltr:font-inter leading-6 text-lg font-bold">
              {dataButton?.type}
            </p>
          </div>
        </div>
      </Button>
    </>
  );
};
