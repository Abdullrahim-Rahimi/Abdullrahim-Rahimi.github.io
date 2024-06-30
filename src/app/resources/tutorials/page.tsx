'use client';
import { TutorialSection } from '@/components/blogPage/tutorialPage/TutorialSection';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { TabsTutorials } from '@/components/tabsTutorials/TabsTutorials';
import axiosInstance from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

const Tutorials = () => {
  const [scroll, setScroll] = useState(null);
  const [dataTutorials, setDataTutorials] = useState<any>();
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get('/resource-tutorials');
      const [data] = response.data.data;
      setDataTutorials(data.attributes);
    })();
  }, []);
  return (
    <>
      <HeroPage
        blockRef={scroll}
        bredCrumbDesription="Resources"
        bredCrumbTitle="Tutorials & Guides"
        isVisibleBreadCrumbs={true}
        hiddenArrow={false}
        visibleDescriiton={false}
        title={dataTutorials?.title}
        description={dataTutorials?.subtitle}
        heightScreen={true}
        styleSection="pb-[100px] pt-6 px-[16px] h-screen"
        secondDescription={dataTutorials?.description}
      />
      <TutorialSection setScroll={setScroll} />
      {/* <TabsTutorials /> */}
    </>
  );
};
export default Tutorials;
