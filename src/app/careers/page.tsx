'use client';
import { Vacansies } from '@/components/careersPage/Vacancies';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';

const Careers = () => {
  const [scroll, setScroll] = useState(null);
  const [dataCareers, setDataCareers] = useState<any>();

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `/careers-pages?locale=${lang}`,
        );
        const [data] = response?.data?.data;
        setDataCareers(data?.attributes);
      } catch (error) {}
    })();
  }, [lang]);
  return (
    <div className="w-full">
      <HeroPage
        blockRef={scroll}
        hiddenArrow={false}
        visibleDescriiton={false}
        title={dataCareers?.titleHero}
        description={dataCareers?.subtitleHero}
        heightScreen={true}
        styleSection="pb-[100px]"
        secondDescription={dataCareers?.descriptionHero}
        titleScroll={dataCareers?.titleScroll}
      />
      <Vacansies setScroll={setScroll} dataCareers={dataCareers} />
    </div>
  );
};
export default Careers;
