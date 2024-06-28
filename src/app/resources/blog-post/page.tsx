'use client';
import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import axiosInstance from '@/helpers/axiosConfig';
import { useEffect, useState } from 'react';

const BlogPosts = () => {
  const [heroBlog, setHeroBlog] = useState<any>();
  const [listCard, setListCards] = useState<any>();

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get('hero-resources-blogposts');
      const responseList = await axiosInstance.get(
        '/resources-blog-posts?populate=*',
      );
      setListCards(responseList?.data.data);
      setHeroBlog(response?.data.data[0].attributes);
    })();
  }, []);
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
      <CardPosts redirect={true} style="cursor-pointer" listCard={listCard} />
    </div>
  );
};
export default BlogPosts;
