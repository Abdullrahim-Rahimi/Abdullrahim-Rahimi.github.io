'use client';
import { AboutPosts } from '@/components/blogPage/blogPosts/AbouPosts';
import { CreatePerfect } from '@/components/blogPage/blogPosts/CreatePerfect';
import { HeroBlogPage } from '@/components/blogPage/blogPosts/HeroBlogId';
import { SimiliarTopick } from '@/components/blogPage/blogPosts/SimiliarTopics';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { usePostStore } from '@/store/post';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

const Legal = () => {
  const { post } = usePostStore();
  const { lang } = useChangeLanguage();
  const [dataLeagal, setDataLegal] = useState<any>();
  const isEmpty = (obj: any) => {
    return JSON.stringify(obj) === '{}';
  };
  if (isEmpty(post)) redirect('/resources/blog-post');
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        `/legal-downloads?locale=${lang}`,
      );
      const [data] = response.data.data;
      setDataLegal(data?.attributes);
    })();
  }, [lang]);
  return (
    <div className="w-full">
      <HeroBlogPage />
      <AboutPosts />
      <CreatePerfect
        textDownload={dataLeagal?.textDownload}
        textCreate={dataLeagal?.textCreate}
      />
      <SimiliarTopick titleSimilar={dataLeagal?.titleSimilar} />
    </div>
  );
};
export default Legal;
