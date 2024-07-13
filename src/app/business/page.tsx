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
import axiosInstance from '../../helpers/axiosConfig';
import { useEffect, useState } from 'react';
import { useLoadingStore } from '@/store/loading';
import { getData, getRandomElements } from '@/helpers/getPartners';
import { Skeleton } from '@/components/ui/skeleton';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { useChangeLanguage } from '@/store/language';

const Business = () => {
  const [heroBusiness, setHeroBusiness] = useState<any>();
  const [growth, setGrowth] = useState<any>();
  const [dataScroll, setDataScroll] = useState<any>();
  const { handleArray, handleLoadingStatus } = useLoadingStore();

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async function getBusiness() {
      try {
        const responseGrowth = await axiosInstance.get(
          `/growth-businesses?populate=*&locale=${lang}`,
        );
        const response = await axiosInstance.get(
          `/home-businesses?locale=${lang}`,
        );
        const responseScrolling = await axiosInstance.get(
          `/home-bussiness-scrollings?populate=*&locale=${lang}`,
        );
        setDataScroll(responseScrolling?.data?.data);
        setHeroBusiness(response?.data?.data?.[0]?.attributes);
        setGrowth(responseGrowth?.data?.data?.[0]?.attributes);
      } catch (error) {
        console.error(error);
        handleLoadingStatus(false);
      } finally {
        handleLoadingStatus(false);
      }
    })();
  }, [handleLoadingStatus, lang]);

  useEffect(() => {
    try {
      (async () => {
        handleLoadingStatus(true);
        const listPartners = await getData();
        const randomPartners = getRandomElements(listPartners, 60);
        handleArray(randomPartners);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [handleArray, handleLoadingStatus]);
  return (
    <>
      {heroBusiness ? (
        <div className="w-full bg-primary md:-mt-[100px]">
          <LockerContainer listInfo={dataScroll} />
          <div className="md:hidden ">
            <NoScrollingAnimationBusiness
              subtitle={heroBusiness?.listHeroPost[0].title}
              imageBg={leaf}
              imageClassNameBg="absolute -bottom-[40px] left-0 w-[340px] h-[320px] "
              image={image1}
              className="absolute w-full h-full bottom-0 left-10"
              title={heroBusiness?.listHeroPost[0].subtitle}
              desription={heroBusiness?.listHeroPost[0].description}
              imageClassName=" absolute w-[80%]   top-[50%] -translate-y-1/2 right-0"
              list={heroBusiness?.listHeroPost[0].listSub}
            />
            <div className="mx-4 bg-primary">
              <Separator className="bg-[#586968]" />
            </div>
            <NoScrollingAnimationBusiness
              imageBg={leaf}
              imageClassNameBg="absolute -bottom-[40px] left-0 w-[300px] h-[300px]"
              image={image2}
              className="absolute w-full h-full bottom-0 left-10 "
              imageClassName=" absolute w-[300px]  top-[50%] -translate-y-1/2 -translate-x-1/2 left-[50%]"
              imageBgTwo={leaf}
              imageClassNameBgSecond="absolute -top-[70px] -right-[70px] w-[200px] h-[200px] rotate-180 scale-x-[-1]"
              desription={heroBusiness?.listHeroPost[1].description}
              title={heroBusiness?.listHeroPost[1].subtitle}
              subtitle={heroBusiness?.listHeroPost[1].title}
              list={heroBusiness?.listHeroPost[1].listSub}
            />
            <div className="px-4 bg-primary">
              <Separator className="bg-[#586968]" />
            </div>
            <NoScrollingAnimationBusiness
              imageBg={leaf}
              imageClassNameBg="absolute -bottom-[100px] -right-[180px] w-[300px] h-[300px] rotate-[60deg]"
              image={image3}
              className="absolute w-full h-full bottom-0 left-10 "
              imageClassName=" absolute w-[70%]  top-[50%] -translate-y-1/2 -translate-x-1/2 left-[50%]"
              imageBgTwo={leaf}
              imageClassNameBgSecond="absolute -top-[70px] left-[-100px] w-[200px] h-[200px] rotate-180"
              desription={heroBusiness?.listHeroPost[2].description}
              title={heroBusiness?.listHeroPost[2].subtitle}
              subtitle={heroBusiness?.listHeroPost[2].title}
              list={heroBusiness?.listHeroPost[2].listSub}
            />
            <div className="px-4 bg-primary">
              <Separator className="bg-[#586968]" />
            </div>
            <NoScrollingAnimationBusiness
              imageBg={leaf}
              imageClassNameBg="absolute -top-[70px] left-[-100px] w-[200px] h-[200px] rotate-180"
              image={image4}
              className="absolute w-full h-full bottom-0 left-10 "
              imageClassName=" absolute w-[60%]  bottom-0  -translate-x-1/2 left-[50%]"
              desription={heroBusiness?.listHeroPost[0].description}
              title={heroBusiness?.listHeroPost[0].subtitle}
              subtitle={heroBusiness?.listHeroPost[0].title}
              list={heroBusiness?.listHeroPost[0].listSub}
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
            pageType="Business"
            titleFraque={heroBusiness?.titleFraque}
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
export default Business;
