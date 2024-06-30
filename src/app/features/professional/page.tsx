'use client';
import { FeaturesCustomerList } from '@/components/featuresPage/FeaturesCustomerList';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

const Professional = () => {
  const [scroll, setScroll] = useState(null);
  const [dataProfessional, setDataProfessional] = useState<any>();
  const [dataListProfessional, setDataListProfessional] = useState<any>();
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get('/features-professionals');
        setDataProfessional(response.data.data[0].attributes);
        const listProfessionalResponse = await axiosInstance.get(
          '/features-professional-lists?populate=*',
        );
        const sortedObjects = listProfessionalResponse.data.data.sort(
          (a: any, b: any) => a.id - b.id,
        );
        setDataListProfessional(sortedObjects);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="bg-primary md:pb-40">
      <HeroPage
        blockRef={scroll}
        title=""
        titleScroll={dataProfessional?.titleScroll}
        description={dataProfessional?.title}
        hiddenArrow={false}
        visibleDescriiton={false}
        heightScreen={true}
        features={true}
        styleSection="md:h-auto"
      />
      <FeaturesCustomerList
        setScroll={setScroll}
        dataListBlog={dataListProfessional}
      />
      <SignUpBlog />
    </div>
  );
};
export default Professional;
