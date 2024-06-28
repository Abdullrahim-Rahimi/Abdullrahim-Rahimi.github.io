'use client';
import Image from 'next/image';
import { usePostStore } from '@/store/post';
import { baseURLImage } from '@/helpers/axiosConfig';

export const AboutPosts = () => {
  const { post } = usePostStore();
  const aboutImage = new URL(
    post?.imageAboutPost.data[0].attributes.url,
    baseURLImage,
  ).href;

  return (
    <div className="px-4 md:px-[280px]">
      <h2 className="text-[#172524] font-bold text-3xl pt-20">
        {post.aboutPost.project}
      </h2>
      <p className="font-montserrat text-[#455150] mt-3">
        {post.aboutPost.projectSubcription}
      </p>
      <h2 className="text-[#172524] font-bold text-3xl pt-10">
        {post.aboutPost.idea}
      </h2>
      <p className="font-montserrat text-[#455150] mt-3">
        {post.aboutPost.ideaSubcription}
      </p>
      <h2 className="text-[#172524] font-bold text-3xl pt-10">
        {post.aboutPost.identity}
      </h2>
      <p className="font-montserrat text-[#455150] mt-3">
        {post.aboutPost.identitySubcription}
      </p>

      <div className="w-full h-[440px] overflow-hidden mx-auto">
        <Image
          src={aboutImage}
          alt="group meeting"
          className="w-full h-full mt-10 object-fit"
          width={post?.image.data[0].attributes.width}
          height={post?.image.data[0].attributes.height}
        />
      </div>

      <div className="w-full items-center flex justify-center mt-4">
        <span className="uppercase text-[14px] leading-[33px] text-[#455150]">
          {post.aboutPost.branded}
        </span>
      </div>
      <p className="font-montserrat text-[#455150] mt-10">
        {post.aboutPost.identitySubcription}
      </p>
    </div>
  );
};
