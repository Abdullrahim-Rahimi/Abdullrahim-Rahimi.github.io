'use client';
import { Vacansies } from '@/components/careersPage/Vacancies';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

const Careers = () => {
  const [scroll, setScroll] = useState(null);
  const [dataCareers, setDataCareers] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get('careers-pages');
        const [data] = response.data.data;
        setDataCareers(data.attributes);
      } catch (error) {}
    })();
  }, []);

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
      />
      <Vacansies setScroll={setScroll} dataCareers={dataCareers} />
    </div>
  );
};
export default Careers;
