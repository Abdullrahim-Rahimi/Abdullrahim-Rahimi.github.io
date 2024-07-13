'use client';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { TermsConditionsSection } from '@/components/termsConditionsPage/TermsConditions';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';

const TermsConditions = () => {
  const [scroll, setScroll] = useState(null);
  const [dataConditions, setDataConditions] = useState<any>();

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        `/terms-conditions?locale=${lang}`,
      );
      const [data] = response?.data?.data;
      setDataConditions(data?.attributes);
    })();
  }, [lang]);
  return (
    <>
      <HeroPage
        blockRef={scroll}
        bredCrumbDesription={dataConditions?.bredCrumbDesription}
        bredCrumbTitle={dataConditions?.bredCrumbTitle}
        isVisibleBreadCrumbs={true}
        hiddenArrow={false}
        visibleDescriiton={false}
        title={dataConditions?.heroTitle}
        description={dataConditions?.heroSubtitle}
        heightScreen={true}
        styleSection="pb-[100px] pt-6 px-[16px] h-screen"
        titleScroll={dataConditions?.titleScroll}
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
