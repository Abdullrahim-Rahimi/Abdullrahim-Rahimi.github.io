'use client';
import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { ListUpdatesResources } from '@/lib/constants/listCardUpdates';
import { useEffect, useState } from 'react';

const Updates = () => {
  const [heroUpdate, setHeroUpdate] = useState<any>();
  const [listCard, setListCards] = useState<any>();

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get('hero-resources-updates');
      const responseList = await axiosInstance.get(
        '/resources-updates?populate=*',
      );
      setListCards(responseList?.data.data);
      setHeroUpdate(response?.data.data[0].attributes);
    })();
  }, []);
  return (
    <div>
      <HeroPage
        isVisibleBreadCrumbs={true}
        bredCrumbDesription="Resources"
        bredCrumbTitle="Stay Updated"
        hiddenArrow={true}
        visibleDescriiton={false}
        title={heroUpdate?.title}
        description={heroUpdate?.subtitle}
        heightScreen={false}
        styleSection="pb-[100px] pt-6 px-[16px]"
        secondDescription={heroUpdate?.description}
      />
      <CardPosts redirect={false} listCard={listCard} />
    </div>
  );
};
export default Updates;
