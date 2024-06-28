'use client';
import { HomeIcon } from '@/assets/icons/homeIcon/HomeIcon';
import { BreadcrumbWithCustomSeparator } from '@/components/blogPage/blogPosts/BreadCrumbs';
import Image from 'next/image';
import { CalendarIcon } from '@/assets/icons/calendarIcon/CalendarIcon';
import { ClockIcon } from '@/assets/icons/clockIcon/ClockIcon';
import { usePostStore } from '@/store/post';
import { baseURLImage } from '@/helpers/axiosConfig';

export const HeroBlogPage = () => {
  const { post } = usePostStore();

  const bgImage = new URL(post?.image.data[0].attributes.url, baseURLImage)
    .href;

  const iconImg = new URL(post?.iconOwner.data[0].attributes.url, baseURLImage)
    .href;

  return (
    <div
      className="relative bg-cover bg-center pb-[100px] md:pb-[400px] px-4 md:pl-[64px] md:pt-[25px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        backgroundPosition: 'center',
      }}
    >
      <div className="flex pt-6">
        <HomeIcon className="mr-2" />
        <BreadcrumbWithCustomSeparator bredCrumbHref="/resources/blog-post" />
      </div>
      <h1 className="text-3xl font-bold text-white mt-8">{post?.title}</h1>
      <div className="flex justify-start text-[#ECEEED] text-sm mt-4 flex-col md:flex-row">
        <div className="flex">
          <div className="flex border-r pr-[10px]">
            <Image
              src={iconImg}
              alt="people"
              className="mr-[10px] rounded-full"
              width={18}
              height={18}
            />
            <span className="text-sm">{post.user.name}</span>
          </div>
          <span className="flex items-center border-r px-[10px]">
            <CalendarIcon className="mr-[10px]" fill="#ECEEED" />
            {post.user.date}
          </span>
        </div>
        <span className="flex items-center mt-2 md:mt-0 md:ml-2">
          <ClockIcon className="mr-2" fill="#ECEEED" />
          {post.user.time} to read
        </span>
      </div>
    </div>
  );
};
