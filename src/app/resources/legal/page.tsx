'use client';
import { AboutPosts } from '@/components/blogPage/blogPosts/AbouPosts';
import { CreatePerfect } from '@/components/blogPage/blogPosts/CreatePerfect';
import { HeroBlogPage } from '@/components/blogPage/blogPosts/HeroBlogId';
import { SimiliarTopick } from '@/components/blogPage/blogPosts/SimiliarTopics';
import { usePostStore } from '@/store/post';
import { redirect } from 'next/navigation';

const Legal = () => {
  const { post } = usePostStore();
  const isEmpty = (obj: any) => {
    return JSON.stringify(obj) === '{}';
  };
  if (isEmpty(post)) redirect('/resources/blog-post');
  return (
    <div className="w-full">
      <HeroBlogPage />
      <AboutPosts />
      <CreatePerfect />
      <SimiliarTopick />
    </div>
  );
};
export default Legal;
