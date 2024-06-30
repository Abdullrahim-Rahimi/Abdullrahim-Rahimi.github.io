'use client';
import { FeaturesCustomerList } from '@/components/featuresPage/FeaturesCustomerList';
import { SignUpBlog } from '@/components/featuresPage/SignUpBlog';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

const Features = () => {
  const [scroll, setScroll] = useState(null);
  const [dataCustomer, setDataCustomer] = useState<any>();
  const [dataListBlog, setDataListBlog] = useState<any>();
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get('/features-customers');
        setDataCustomer(response.data.data[0].attributes);
        const lstCustomerResponse = await axiosInstance.get(
          '/feature-cusomer-lists?populate=*',
        );
        const sortedObjects = lstCustomerResponse.data.data.sort(
          (a: any, b: any) => a.id - b.id,
        );
        setDataListBlog(sortedObjects);
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
        titleScroll={dataCustomer?.titleScroll}
        description={dataCustomer?.title}
        hiddenArrow={false}
        visibleDescriiton={false}
        heightScreen={true}
        features={true}
        styleSection="md:h-auto"
      />
      <FeaturesCustomerList setScroll={setScroll} dataListBlog={dataListBlog} />
      <SignUpBlog />
    </div>
  );
};
export default Features;
