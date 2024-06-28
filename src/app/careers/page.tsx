'use client';
import { Vacansies } from '@/components/careersPage/Vacancies';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { useState } from 'react';

const Careers = () => {
  const [scroll, setScroll] = useState(null);
  return (
    <div className="w-full">
      <HeroPage
        blockRef={scroll}
        hiddenArrow={false}
        visibleDescriiton={false}
        title="CAREERS"
        description="Current Openings"
        heightScreen={true}
        styleSection="pb-[100px]"
        secondDescription="We are always on the lookout for passionate and self motivated people to join our team. Serving our customers and making sure they are happy with the outcome is something we strive to do continuously."
      />
      <Vacansies setScroll={setScroll} />
    </div>
  );
};
export default Careers;
