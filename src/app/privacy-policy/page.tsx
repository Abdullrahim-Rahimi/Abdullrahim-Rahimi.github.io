'use client';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { PrivacyPoliceList } from '@/components/privacyPolice/PrivacyPolicyList';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const [scroll, setScroll] = useState(null);
  const [dataSection, setDataSection] = useState<any>();

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `/pravicy-policies?locale=${lang}`,
        );
        const [data] = response?.data?.data;
        setDataSection(data?.attributes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [lang]);

  return (
    <>
      <HeroPage
        blockRef={scroll}
        bredCrumbDesription={dataSection?.bredCrumbDesription}
        bredCrumbTitle={dataSection?.bredCrumbTitle}
        isVisibleBreadCrumbs={true}
        hiddenArrow={false}
        visibleDescriiton={false}
        title={dataSection?.titleHero}
        description={dataSection?.subtitleHero}
        heightScreen={true}
        styleSection="pb-[100px] pt-6 px-[16px] h-screen"
        secondDescription={dataSection?.descriptionHero}
      />
      <PrivacyPoliceList setScroll={setScroll} dataSection={dataSection} />
    </>
  );
};
export default PrivacyPolicy;
