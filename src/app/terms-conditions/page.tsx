'use client';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { TermsConditionsSection } from '@/components/termsConditionsPage/TermsConditions';
import axiosInstance from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

const TermsConditions = () => {
  const [scroll, setScroll] = useState(null);
  const [dataConditions, setDataConditions] = useState<any>();
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get('/terms-conditions');
      const [data] = response.data.data;
      setDataConditions(data.attributes);
    })();
  }, []);
  return (
    <>
      <HeroPage
        blockRef={scroll}
        bredCrumbDesription="Home"
        bredCrumbTitle="Terms & Conditions"
        isVisibleBreadCrumbs={true}
        hiddenArrow={false}
        visibleDescriiton={false}
        title={dataConditions?.heroTitle}
        description={dataConditions?.heroSubtitle}
        heightScreen={true}
        styleSection="pb-[100px] pt-6 px-[16px] h-screen"
        titleScroll="Explore the  terms"
        secondDescription={dataConditions?.heroSubcription}
      />
      <TermsConditionsSection
        setScroll={setScroll}
        dataConditions={dataConditions}
      />
    </>
  );
};
export default TermsConditions;
