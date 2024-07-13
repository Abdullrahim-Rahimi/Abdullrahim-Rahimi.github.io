'use client';
import { QASection } from '@/components/QASection/QASection';
import { BecomeFormPartner } from '@/components/businessPage/BecomeFormPartner';
import { DaysiMission } from '@/components/businessPage/DaysiMission';
import { GrowthSection } from '@/components/businessPage/GrowthSection';
import { ExperienceDaisy } from '@/components/experienceDaisy/ExperienceDaisy';
import { JoinTheDaisy } from '@/components/joinTheDaysi/JoinTheDaysi';
import { OurPartnersSection } from '@/components/ourPartnters/OurPartnersSection';
import image1 from '../../assets/images/iPad.png';
import image2 from '../../assets/images/marketing.png';
import image3 from '../../assets/images/collectPayments.png';
import image4 from '../../assets/images/doublePhone.png';
import { NoScrollingAnimationBusiness } from '@/components/noAnimationBusiness/NoAnimationBusiness';
import leaf from '../../assets/images/LeafBg.png';
import { Separator } from '@/components/ui/separator';
import axiosInstance from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { useChangeLanguage } from '@/store/language';
import { Skeleton } from '@/components/ui/skeleton';

const Professional = () => {
  const [heroProfessional, setHeroProfessional] = useState<any>();
  const [dataScroll, setDataScroll] = useState<any>();

  const [growth, setGrowth] = useState<any>();
  const { lang } = useChangeLanguage();
  useEffect(() => {
    (async function getProfessional() {
      try {
        const responseGrowth = await axiosInstance.get(
          `/growth-professionals?populate=*&locale=${lang}`,
        );
        const response = await axiosInstance.get(
          `/home-professionals?locale=${lang}`,
        );
        const responseScrolling = await axiosInstance.get(
          `/home-professional-scrollings?populate=*&locale=${lang}`,
        );
        setDataScroll(responseScrolling?.data?.data);
        setGrowth(responseGrowth?.data?.data[0]?.attributes);
        setHeroProfessional(response?.data?.data?.[0]?.attributes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [lang]);

  return (
    <>
      {heroProfessional ? (
        <div className="w-full bg-primary md:-mt-[100px]">
          <LockerContainer listInfo={dataScroll} />
          <div className="md:hidden ">
            <NoScrollingAnimationBusiness
              subtitle={heroProfessional?.listHeroPost[0].title}
              title={heroProfessional?.listHeroPost[0].subtitle}
              desription={heroProfessional?.listHeroPost[0].description}
              list={heroProfessional?.listHeroPost[0].listSub}
              imageBg={leaf}
              imageClassNameBg="absolute -bottom-[40px] left-0 w-[340px] h-[320px] "
              image={image1}
              className="absolute w-full h-full bottom-0 left-10"
              imageClassName=" absolute w-[80%]   top-[50%] -translate-y-1/2 right-0"
            />
            <div className="mx-4 bg-primary">
              <Separator className="bg-[#586968]" />
            </div>
            <NoScrollingAnimationBusiness
              subtitle={heroProfessional?.listHeroPost[1].title}
              title={heroProfessional?.listHeroPost[1].subtitle}
              desription={heroProfessional?.listHeroPost[1].description}
              list={heroProfessional?.listHeroPost[1].listSub}
              imageBg={leaf}
              imageClassNameBg="absolute -bottom-[40px] left-0 w-[300px] h-[300px]"
              image={image2}
              className="absolute w-full h-full bottom-0 left-10 "
              imageClassName=" absolute w-[300px]  top-[50%] -translate-y-1/2 -translate-x-1/2 left-[50%]"
              imageBgTwo={leaf}
              imageClassNameBgSecond="absolute -top-[70px] -right-[70px] w-[200px] h-[200px] rotate-180 scale-x-[-1]"
            />
            <div className="px-4 bg-primary">
              <Separator className="bg-[#586968]" />
            </div>
            <NoScrollingAnimationBusiness
              subtitle={heroProfessional?.listHeroPost[2].title}
              title={heroProfessional?.listHeroPost[2].subtitle}
              desription={heroProfessional?.listHeroPost[2].description}
              list={heroProfessional?.listHeroPost[2].listSub}
              imageBg={leaf}
              imageClassNameBg="absolute -bottom-[100px] -right-[180px] w-[300px] h-[300px] rotate-[60deg]"
              image={image3}
              className="absolute w-full h-full bottom-0 left-10 "
              imageClassName=" absolute w-[70%]  top-[50%] -translate-y-1/2 -translate-x-1/2 left-[50%]"
              imageBgTwo={leaf}
              imageClassNameBgSecond="absolute -top-[70px] left-[-100px] w-[200px] h-[200px] rotate-180"
            />
            <div className="px-4 bg-primary">
              <Separator className="bg-[#586968]" />
            </div>
            <NoScrollingAnimationBusiness
              subtitle={heroProfessional?.listHeroPost[0].title}
              title={heroProfessional?.listHeroPost[0].subtitle}
              desription={heroProfessional?.listHeroPost[0].description}
              list={heroProfessional?.listHeroPost[0].listSub}
              imageBg={leaf}
              imageClassNameBg="absolute -top-[70px] left-[-100px] w-[200px] h-[200px] rotate-180"
              image={image4}
              className="absolute w-full h-full bottom-0 left-10 "
              imageClassName=" absolute w-[60%]  bottom-0  -translate-x-1/2 left-[50%]"
            />
          </div>
          <OurPartnersSection />
          <DaysiMission />
          <GrowthSection
            title={growth?.title}
            description={growth?.description}
            subtitle={growth?.subtitle}
            learnMore={growth?.buttonLearn}
            imageUrl={growth?.imageHero?.data?.[0].attributes.url}
          />
          <JoinTheDaisy />
          <ExperienceDaisy />
          <QASection
            pageType="Professional"
            titleFraque={heroProfessional?.titleFraque}
          />
          <BecomeFormPartner />
        </div>
      ) : (
        <div className="w-full h-screen py-[40px] px-[20px] bg-primary">
          <Skeleton className="w-full mb-10 h-full" />
        </div>
      )}
    </>
  );
};
export default Professional;
