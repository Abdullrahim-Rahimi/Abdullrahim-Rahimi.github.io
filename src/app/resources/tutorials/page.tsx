'use client';
import { TutorialSection } from '@/components/blogPage/tutorialPage/TutorialSection';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { TabsTutorials } from '@/components/tabsTutorials/TabsTutorials';
import { useState } from 'react';

const Tutorials = () => {
  const [scroll, setScroll] = useState(null);
  return (
    <>
      <HeroPage
        blockRef={scroll}
        bredCrumbDesription="Resources"
        bredCrumbTitle="Tutorials & Guides"
        isVisibleBreadCrumbs={true}
        hiddenArrow={false}
        visibleDescriiton={false}
        title="LEARNING RESOURCES"
        description="Tutorials & Guides"
        heightScreen={true}
        styleSection="pb-[100px] pt-6 px-[16px] h-screen"
        secondDescription="Welcome to The Daisy's Learning Corner! Explore our Tutorials & Guides for valuable insights into the world of beauty and wellness."
      />
      <TutorialSection setScroll={setScroll} />
      {/* <TabsTutorials /> */}
    </>
  );
};
export default Tutorials;
