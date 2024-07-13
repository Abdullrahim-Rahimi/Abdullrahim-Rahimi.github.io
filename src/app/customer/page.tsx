'use client';
import { QASection } from '@/components/QASection/QASection';
import { CustomerHero } from '@/components/customerPage/CustomerHero';
import { ExperienceDaisy } from '@/components/experienceDaisy/ExperienceDaisy';
import { JoinTheDaisy } from '@/components/joinTheDaysi/JoinTheDaysi';
import { NoScrollingAnimationBusiness } from '@/components/noAnimationBusiness/NoAnimationBusiness';
import leaf from '../../assets/images/LeafBg.png';
import image1 from '../../assets/images/PHONEcustomerHero.png';
import image2 from '../../assets/images/doublePhone.png';
import image3 from '../../assets/images/PhoneCustomerdown.png';
import { GrowthSectionCustomer } from '@/components/customerPage/GrowthCustomer';
import { OurPartnersSection } from '@/components/ourPartnters/OurPartnersSection';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { Skeleton } from '@/components/ui/skeleton';

const Customer = () => {
  const [heroCustomer, setHeroCustomer] = useState<any>();
  const [growth, setGrowth] = useState<any>();
  const [dataScroll, setDataScroll] = useState<any>();

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async function getUser() {
      try {
        const responseGrowth = await axiosInstance.get(
          `/growth-customers?populate=*&locale=${lang}`,
        );
        const response = await axiosInstance.get(
          `/home-customers?locale=${lang}`,
        );
        const responseScrolling = await axiosInstance.get(
          `/home-customer-scrollings?populate=*&locale=${lang}`,
        );
        setDataScroll(responseScrolling?.data?.data);
        setGrowth(responseGrowth?.data?.data?.[0].attributes);
        setHeroCustomer(response?.data?.data?.[0].attributes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [lang]);

  return (
    <>
      {heroCustomer ? (
        <div className="w-full bg-primary md:-mt-[100px]">
          <LockerContainer listInfo={dataScroll} />
          <div className="md:hidden">
            <NoScrollingAnimationBusiness
              subtitle={heroCustomer?.listPost[0].title}
              title={heroCustomer?.listPost[0].subtitle}
              desription={heroCustomer?.listPost[0].description}
              list={heroCustomer?.listPost[0].listSub}
              imageBg={leaf}
              imageClassNameBg="absolute -bottom-[40px] left-0 w-[300px] h-[300px]"
              image={image1}
              className="absolute w-full h-full bottom-0 left-10"
              imageClassName=" absolute w-[220px] h-[320px] right-[50%] translate-x-1/2 top-0"
            />
            <div className="px-4 bg-primary">
              <Separator className="bg-[#586968]" />
            </div>
            <NoScrollingAnimationBusiness
              subtitle={heroCustomer?.listPost[1].title}
              title={heroCustomer?.listPost[1].subtitle}
              desription={heroCustomer?.listPost[1].description}
              list={heroCustomer?.listPost[1].listSub}
              imageBg={leaf}
              imageClassNameBg="absolute -top-[70px] -left-[120px] w-[200px] h-[200px] rotate-180"
              image={image2}
              className="absolute w-full h-full bottom-0 left-10 "
              imageClassName=" absolute w-[300px] h-[300px] bottom-0  -translate-x-1/2 left-[50%]"
            />
            <div className="px-4 bg-primary">
              <Separator className="bg-[#586968]  border-none" />
            </div>
            <NoScrollingAnimationBusiness
              subtitle={heroCustomer?.listPost[2].title}
              title={heroCustomer?.listPost[2].subtitle}
              desription={heroCustomer?.listPost[2].description}
              list={heroCustomer?.listPost[2].listSub}
              imageBg={leaf}
              imageClassNameBg="absolute -bottom-[50px] -right-[100px] w-[200px] h-[200px] rotate-[20deg]"
              image={image3}
              className="absolute w-full h-full bottom-0 left-10 "
              imageClassName=" absolute w-[230px] h-[320px] top-0 -translate-x-1/2 left-[50%]"
            />
          </div>
          <OurPartnersSection />
          <GrowthSectionCustomer
            title={growth?.title}
            description={growth?.description}
            subtitle={growth?.subtitle}
            learnMore={growth?.buttonLearn}
            imageUrl={growth?.imageHero?.data?.[0].attributes.url}
          />
          <JoinTheDaisy />
          <ExperienceDaisy />
          <QASection
            pageType="Customer"
            titleFraque={heroCustomer?.titleFraque}
          />
        </div>
      ) : (
        <div className="w-full h-screen py-[40px] px-[20px] bg-primary">
          <Skeleton className="w-full mb-10 h-full" />
        </div>
      )}
    </>
  );
};
export default Customer;
