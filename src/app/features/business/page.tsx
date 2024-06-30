'use client';
import { DesctopViewProfessional } from '@/components/featuresPage/DesctopViewProfessional';
import { MobileViewProfessional } from '@/components/featuresPage/MobileSectionProfessional';
import { SectionBusiness } from '@/components/featuresPage/SectionBusiness';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

const FeaturesBusiness = () => {
  const [dataFeatures, setDataFeatures] = useState<any>();
  const [dataListManagm, setDataListManagm] = useState<any>();
  const [dataListPayment, setDataListPayment] = useState<any>();
  const [dataListReports, setDataListReports] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const responseDataFeatures = await axiosInstance.get(
          '/feature-businesses?populate=*',
        );
        const [dataFeatures] = responseDataFeatures.data.data;
        setDataFeatures(dataFeatures.attributes);
        const responseListManagm = await axiosInstance.get(
          '/features-business-marketings?populate=*',
        );
        const responseListPayments = await axiosInstance.get(
          '/feature-business-payments?populate=*',
        );
        const responseListReports = await axiosInstance.get(
          '/feature-business-reports?populate=*',
        );
        setDataListManagm(responseListManagm.data.data);
        setDataListPayment(responseListPayments.data.data);
        setDataListReports(responseListReports.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="bg-primary px-4">
      <HeroPage
        title=""
        titleScroll="Explore the features"
        description={dataFeatures?.title}
        hiddenArrow={true}
        visibleDescriiton={false}
        heightScreen={false}
        features={true}
        styleSection="md:h-auto"
      />
      <SectionBusiness listOption={dataFeatures?.listBusinessOptions} />
      <MobileViewProfessional
        dataFeatures={dataFeatures}
        dataListManagm={dataListManagm}
        dataListPayment={dataListPayment}
        dataListReports={dataListReports}
      />
      <DesctopViewProfessional
        dataBusiness={dataFeatures}
        dataListManagm={dataListManagm}
        dataListPayment={dataListPayment}
        dataListReports={dataListReports}
      />
      <SignUpBlog style="-mx-4" />
    </div>
  );
};

export default FeaturesBusiness;
