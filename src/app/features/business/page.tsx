'use client';
import { DesctopViewProfessional } from '@/components/featuresPage/DesctopViewProfessional';
import { MobileViewProfessional } from '@/components/featuresPage/MobileSectionProfessional';
import { SectionBusiness } from '@/components/featuresPage/SectionBusiness';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';

const FeaturesBusiness = () => {
  return (
    <div className="bg-primary px-4">
      <HeroPage
        title=""
        titleScroll="Explore the features"
        description="Easy, flexible and Powerful, Your customers will love it!"
        hiddenArrow={true}
        visibleDescriiton={false}
        heightScreen={false}
        features={true}
        styleSection="md:h-auto"
      />
      <SectionBusiness />
      <MobileViewProfessional />
      <DesctopViewProfessional />
      <SignUpBlog style="-mx-4" />
    </div>
  );
};

export default FeaturesBusiness;
