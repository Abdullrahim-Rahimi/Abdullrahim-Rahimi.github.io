'use client';
import { QASection } from '@/components/QASection/QASection';
import { BecomeFormPartner } from '@/components/businessPage/BecomeFormPartner';
import { DaysiMission } from '@/components/businessPage/DaysiMission';
import { GrowthSection } from '@/components/businessPage/GrowthSection';
import { ExperienceDaisy } from '@/components/experienceDaisy/ExperienceDaisy';
import { JoinTheDaisy } from '@/components/joinTheDaysi/JoinTheDaysi';
import { OurPartnersSection } from '@/components/ourPartnters/OurPartnersSection';
import { Separator } from '@/components/ui/separator';
import axiosInstance, { baseURLImage } from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { useChangeLanguage } from '@/store/language';
import { Skeleton } from '@/components/ui/skeleton';
import { NoScrollingAnimationBusiness } from '@/components/noAnimationBusiness/NoAnimationBusiness';

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
        setDataScroll(
          responseScrolling?.data?.data.sort(
            (a: any, b: any) => a.attributes.sortId - b.attributes.sortId,
          ),
        );
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
            <ul>
              {dataScroll &&
                dataScroll.map(({ attributes }: any, index: number) => {
                  return (
                    <li key={index}>
                      <NoScrollingAnimationBusiness
                        styleBgMobileSecond={attributes.styleBgMobileSecond}
                        sizeImage={attributes.styleImageMobile}
                        styleFirstBgJSON={attributes.styleFirstBgJSON}
                        styleSecondBgJSON={attributes.styleSecondBgJSON}
                        imageBg={
                          new URL(
                            attributes.firstBg.data[0].attributes.url,
                            baseURLImage,
                          ).href
                        }
                        imageClassNameBg="absolute -bottom-[40px] left-0 w-[300px] h-[300px]"
                        image={
                          new URL(
                            attributes.mainImage.data?.[0].attributes.formats.small.url,
                            baseURLImage,
                          ).href
                        }
                        className="absolute w-full h-full bottom-0 left-10 "
                        // imageClassName=" absolute w-[300px]  top-[50%] -translate-y-1/2 right-0"
                        imageBgTwo={
                          new URL(
                            attributes?.secondBg?.data?.[0]?.attributes?.url,
                            baseURLImage,
                          ).href
                        }
                        imageClassNameBgSecond="absolute -top-[70px] -right-[70px] w-[200px] h-[200px] rotate-180 scale-x-[-1]"
                        desription={attributes.infoScroll.description}
                        title={attributes.infoScroll.text}
                        subtitle={attributes.infoScroll.title}
                        list={attributes.infoScroll.listSub}
                        imageWidth={
                          dataScroll?.[1]?.attributes.mainImage.data?.[0]
                            .attributes.formats.small.width
                        }
                        imageHeight={
                          dataScroll?.[1]?.attributes.mainImage.data?.[0]
                            .attributes.formats.small.height
                        }
                      />
                      <div className="px-4 bg-primary">
                        <Separator className="bg-[#586968]" />
                      </div>
                    </li>
                  );
                })}
            </ul>
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
