'use client';
import { GetTheAppScan } from '@/components/getTheApp/GetTheApp';
import { HeroPage } from '@/components/heroSection/HeroSection';
import Separator from '@/components/separator/Separator';
import axiosInstance, { baseURLImage } from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

const GetTheApp = () => {
  const [dataGetApp, setGetApp] = useState<any>();
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get('/get-the-apps?populate=*');
      const [data] = response.data.data;
      setGetApp(data.attributes);
    })();
  }, []);
  const qrCode = new URL(
    dataGetApp?.qrCode.data[0].attributes.url,
    baseURLImage,
  ).href;
  console.log(qrCode);
  return (
    <>
      <HeroPage
        bredCrumbTitle="Get the app"
        bredCrumbDesription="Home"
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
