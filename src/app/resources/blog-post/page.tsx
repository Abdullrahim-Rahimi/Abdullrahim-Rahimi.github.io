'use client';
import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useChoosePath } from '@/store/currentPath';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useState } from 'react';

const BlogPosts = () => {
  const [heroBlog, setHeroBlog] = useState<any>();
  const [listCard, setListCards] = useState<any>();

  const { lang } = useChangeLanguage();
  const { chooseBreadcrumb, choosePathStrapi } = useChoosePath();

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        `hero-resources-blogposts?locale=${lang}&_sort=name:DESCa`,
      );
      const responseList = await axiosInstance.get(
        `/resources-blog-posts?populate=*&locale=${lang}`,
      );
      setListCards(responseList?.data?.data);

      setHeroBlog(response?.data?.data[0]?.attributes);
    })();
  }, [lang]);
  useEffect(() => {
    chooseBreadcrumb(heroBlog?.breadcrumbs);
    choosePathStrapi('/resources-blog-posts');
  }, [heroBlog, lang]);
  return (
    <div className="w-full">
      <HeroPage
        hiddenArrow={true}
        visibleDescriiton={false}
        title={heroBlog?.title}
        description={heroBlog?.subtitle}
        heightScreen={false}
        styleSection="pb-[100px]"
        secondDescription={heroBlog?.description}
      />
      <CardPosts
        typePath="blog-post"
        redirect={true}
        style="cursor-pointer"
        listCard={listCard}
      />
    </div>
  );
};
export default BlogPosts;
