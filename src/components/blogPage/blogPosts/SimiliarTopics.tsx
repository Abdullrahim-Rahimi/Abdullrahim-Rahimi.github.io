'use client';
import Image from 'next/image';
import { CalendarIcon } from '@/assets/icons/calendarIcon/CalendarIcon';
import { ClockIcon } from '@/assets/icons/clockIcon/ClockIcon';
import { useEffect, useState } from 'react';
import axiosInstance, { baseURLImage } from '@/helpers/axiosConfig';
import { useRouter } from 'next/navigation';
import { usePostStore } from '@/store/post';
import { useChangeLanguage } from '@/store/language';

export const SimiliarTopick = ({ titleSimilar }: { titleSimilar: string }) => {
  const [listCard, setListCards] = useState<any>();

  const router = useRouter();
  const { handlePost } = usePostStore();
  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      const responseList = await axiosInstance.get(
        `/resources-blog-posts?populate=*&locale=${lang}`,
      );
      setListCards(responseList?.data?.data);
    })();
  }, [lang]);
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="text-[#172524] text-bold text-[32px] leading-[40px] pt-28 pb-10">
        {titleSimilar}
      </h2>
      <ul className="bg-[#F8F5F3] px-4 space-y-8 pb-[28px] md:pb-[140px] bg-transparent md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
        {listCard &&
          listCard.map((item: any, index: number) => {
            const [data] = item.attributes.image.data;
            const imagePosts = new URL(data.attributes.url, baseURLImage).href;
            const [dataOwner] = item.attributes.iconOwner.data;
            const ownerSrc = new URL(dataOwner.attributes.url, baseURLImage)
              .href;

            return (
              <li
                onClick={() => {
                  handlePost(item.attributes);
                  router.push('/resources/legal');
                }}
                key={index}
                className={`w-full mx-auto flex flex-col items-center text-start rounded-[12px] bg-white border overflow-hidden hover:shadow-2xl`}
              >
                <div className="w-full h-[240px]">
                  <Image
                    src={imagePosts}
                    alt="welness"
                    className="w-full object-cover h-[230px] md:h-[240px]"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="px-6 py-4 mt-6">
                  <div className="flex justify-start gap-2 text-sm">
                    <span className="px-3 py-1 text-[#2543AD] bg-[#E9ECF7] rounded-sm ">
                      {item.attributes.tags.wellness}
                    </span>
                    <span className="px-3 py-1 text-[#14736F] bg-[#E7F1F1] rounded-sm">
                      {item.attributes.tags.hair}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg ltr:font-montserrat font-semibold">
                    {item.attributes.title}
                  </h3>

                  <div className="flex justify-start gap-2 text-gray-500 text-sm mt-4">
                    <div className=" hidden md:flex ltr:border-r ltr:pr-[10px] rtl:pl-[10px]">
                      <Image
                        src={ownerSrc}
                        alt="people"
                        className="ltr:mr-[10px] rtl:ml-[10px] rounded-full"
                        width={18}
                        height={18}
                      />
                      <span className=" text-gray-500 text-sm">
                        {item.attributes.user.name}
                      </span>
                    </div>
                    <span className="flex items-center border-r pr-[10px]">
                      <CalendarIcon className="ltr:mr-[10px] rtl:ml-[10px]" />
                      {item.attributes.user.date}
                    </span>
                    <span className="flex items-center rtl:pr-2 rtl:border-r">
                      <ClockIcon className="ltr:mr-[10px] rtl:ml-[10px]" />
                      {item.attributes.user.time}
                    </span>
                  </div>
                  <p className="mt-2 text-[#455150] text-sm ltr:font-montserrat">
                    {item.attributes.description}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
