'use client';
import { GetTheAppScan } from '@/components/getTheApp/GetTheApp';
import { HeroPage } from '@/components/heroSection/HeroSection';
import Separator from '@/components/separator/Separator';
import axiosInstance, { baseURLImage } from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';

const GetTheApp = () => {
  const [dataGetApp, setGetApp] = useState<any>();

  const { lang } = useChangeLanguage();
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        `/get-the-apps?populate=*&locale=${lang}`,
      );
      const [data] = response?.data?.data;
      setGetApp(data?.attributes);
    })();
  }, [lang]);
  const qrCode = new URL(
    dataGetApp?.qrCode.data[0].attributes.url,
    baseURLImage,
  ).href;

  return (
    <>
      <HeroPage
        bredCrumbTitle={dataGetApp?.titleBredCrumb.title}
        bredCrumbDesription={dataGetApp?.titleBredCrumb.description}
        isVisibleBreadCrumbs={true}
        hiddenArrow={true}
        visibleDescriiton={false}
        title={dataGetApp?.title}
        description={dataGetApp?.description}
        heightScreen={false}
        styleSection="pb-0 pt-6 px-[16px]"
        secondDescription={dataGetApp?.subtitle}
      />
      <div className="px-4 bg-primary py-[46px] md:px-[400px]">
        <Separator className="bg-[#586968] " />
      </div>
      <GetTheAppScan qrCode={qrCode} />
    </>
  );
};

export default GetTheApp;
