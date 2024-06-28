'use client';
import { OurMissing } from '@/components/aboutPage/OurMission';
import { OurValue } from '@/components/aboutPage/OurValue';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

const About = () => {
  const [scroll, setScroll] = useState(null);
  const [heroAbout, setHeroAbout] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get('/about-pages?populate=*');

        setHeroAbout(response.data.data[0].attributes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <HeroPage
        blockRef={scroll}
        title={heroAbout?.heroTitle}
        description={heroAbout?.heroSubtitle}
        hiddenArrow={false}
        visibleDescriiton={false}
        heightScreen={true}
      />
      <OurMissing setScroll={setScroll} heroAbout={heroAbout} />
      <OurValue heroAbout={heroAbout} />
    </>
  );
};
export default About;
