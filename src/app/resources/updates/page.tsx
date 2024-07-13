'use client';
import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChoosePath } from '@/store/currentPath';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';

const Updates = () => {
  const [heroUpdate, setHeroUpdate] = useState<any>();
  const [listCard, setListCards] = useState<any>();

  const { lang } = useChangeLanguage();
  const { chooseBreadcrumb, choosePathStrapi } = useChoosePath();

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        `/hero-resources-updates?locale=${lang}`,
      );
      const responseList = await axiosInstance.get(
        `/resources-updates?populate=*&locale=${lang}`,
      );
      setListCards(responseList?.data?.data);
      setHeroUpdate(response?.data?.data[0]?.attributes);
    })();
  }, [lang]);
  useEffect(() => {
    chooseBreadcrumb(heroUpdate?.breadcrumbs);
    choosePathStrapi('/hero-resources-updates');
  }, [heroUpdate, lang]);

  return (
    <div>
      <HeroPage
        isVisibleBreadCrumbs={true}
        bredCrumbDesription={heroUpdate?.bredCrumbDesription}
        bredCrumbTitle={heroUpdate?.bredCrumbTitle}
        hiddenArrow={true}
        visibleDescriiton={false}
        title={heroUpdate?.title}
        description={heroUpdate?.subtitle}
        heightScreen={false}
        styleSection="pb-[100px] pt-6 px-[16px]"
        secondDescription={heroUpdate?.description}
      />
      <CardPosts typePath="updates" redirect={true} listCard={listCard} />
    </div>
  );
};
export default Updates;
