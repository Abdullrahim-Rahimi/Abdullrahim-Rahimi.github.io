'use client';
import { FeaturesCustomerList } from '@/components/featuresPage/FeaturesCustomerList';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { useState } from 'react';

const Features = () => {
  const [scroll, setScroll] = useState(null);

  return (
    <div className="bg-primary md:pb-40">
      <HeroPage
        blockRef={scroll}
        title=""
        titleScroll="Explore the features"
        description="Easy, flexible and Powerful, Your customers will love it!"
        hiddenArrow={false}
        visibleDescriiton={false}
        heightScreen={true}
        features={true}
        styleSection="md:h-auto"
      />
      <FeaturesCustomerList setScroll={setScroll} />
      <SignUpBlog />
    </div>
  );
};
export default Features;
