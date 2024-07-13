'use client';

import axiosInstance from '@/helpers/axiosConfig';
import { useChoosePath } from '@/store/currentPath';
import { useChangeLanguage } from '@/store/language';
import { usePostStore } from '@/store/post';
import { useEffect, useState } from 'react';

export const AboutPosts = () => {
  const [aboutPost, setAboutPost] = useState<any>();
  const { handlId } = usePostStore();
  const { pathStrapi } = useChoosePath();
  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `${pathStrapi}/${handlId}?locale=${lang}`,
        );

        setAboutPost(response?.data?.data.attributes.aboutPosts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [lang, pathStrapi, handlId]);
  return (
    <div className="px-4 md:px-[280px]">
      <div dangerouslySetInnerHTML={{ __html: aboutPost }} />
    </div>
  );
};
