'use client';
import axiosInstance, { baseURLImage } from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Testimonial = {
  attributes: {
    iconOwner: {
      data: { attributes: { url: string } }[];
    };
    listTestimonials: {
      text: string;
      description: string;
      author: string;
      role: string;
    };
  };
};

export const TestimonialsCustomerList = ({
  textMore,
}: {
  textMore: string;
}) => {
  const [listTestimonials, setListTestimonials] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  const { lang } = useChangeLanguage();
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `/resources-testimonials?populate=*&locale=${lang}`,
        );
        setListTestimonials(response?.data?.data || []);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [lang]);

  const loadMoreTestimonials = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const distributeTestimonials = (
    testimonials: Testimonial[],
  ): Testimonial[][] => {
    const columns: Testimonial[][] = [[], [], []];
    testimonials.forEach((testimonial, index) => {
      const columnIndex = index % 3;
      columns[columnIndex].push(testimonial);
    });
    return columns;
  };

  const visibleTestimonials = listTestimonials.slice(0, visibleCount);
  const [firstColumn, secondColumn, thirdColumn] =
    distributeTestimonials(visibleTestimonials);

  const renderTestimonial = (testimonial: any, index: any) => {
    const [data] = testimonial.attributes.iconOwner.data;
    const infoUser = testimonial.attributes.listTestimonials;
    const iconOwner = new URL(data.attributes.url, baseURLImage).href;

    return (
      <li key={index} className="bg-white h-fit p-6 rounded-lg shadow">
        <p className="text-lg font-semibold ltr:font-montserrat mb-2">
          {infoUser.text}
        </p>
        <p className="text-sm text-[#455150] ltr:font-montserrat mb-4">
          {infoUser.description}
        </p>
        <div className="flex items-center">
          <Image
            src={iconOwner}
            alt={infoUser.author}
            className="mr-4 rtl:mr-0 rtl:ml-4 rounded-full"
            width={40}
            height={40}
          />
          <div>
            <p className="text-sm ltr:font-montserrat font-semibold">
              {infoUser.author}
            </p>
            <p className="text-sm text-[#455150] ltr:font-montserrat">
              {infoUser.role}
            </p>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="bg-[#F8F5F3] pb-12">
      <div className="h-[230px] md:h-[240px] bg-primary"></div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ul className="md:flex md:flex-col translate-y-[-131px] md:translate-y-[-141px] space-y-6">
          {firstColumn.map(renderTestimonial)}
        </ul>
        <ul className="md:flex md:flex-col translate-y-[-131px] md:translate-y-[-141px] space-y-6">
          {secondColumn.map(renderTestimonial)}
        </ul>
        <ul className="md:flex md:flex-col translate-y-[-131px] md:translate-y-[-141px] space-y-6">
          {thirdColumn.map(renderTestimonial)}
        </ul>
      </div>
      <div className="flex justify-center -mt-20 px-4">
        {listTestimonials.length > visibleCount && (
          <button
            className="bg-[white] text-[#172524] ltr:font-montserrat font-semibold py-[10px] px-[60px] rounded-lg border hover:bg-primary hover:text-white w-full md:w-auto"
            onClick={loadMoreTestimonials}
          >
            {textMore}
          </button>
        )}
      </div>
    </div>
  );
};
