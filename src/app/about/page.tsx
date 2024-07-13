'use client';
import { OurMissing } from '@/components/aboutPage/OurMission';
import { OurValue } from '@/components/aboutPage/OurValue';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';

const About = () => {
  const [scroll, setScroll] = useState(null);
  const [heroAbout, setHeroAbout] = useState<any>();
  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `/about-pages?populate=*&locale=${lang}`,
        );

        setHeroAbout(response?.data?.data[0]?.attributes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [lang]);

  return (
    <>
      <HeroPage
        blockRef={scroll}
        title={heroAbout?.heroTitle}
        description={heroAbout?.heroSubtitle}
        hiddenArrow={false}
        visibleDescriiton={false}
        heightScreen={true}
        titleScroll={heroAbout?.titleScroll}
      />
      <OurMissing setScroll={setScroll} heroAbout={heroAbout} />
      <OurValue heroAbout={heroAbout} />
    </>
  );
};
export default About;
