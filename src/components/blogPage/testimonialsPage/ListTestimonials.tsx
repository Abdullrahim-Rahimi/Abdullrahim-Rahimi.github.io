'use client';
import axiosInstance, { baseURLImage } from '@/helpers/axiosConfig';
import { testimonialsList } from '@/lib/constants/testimonialList';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const test = {
  role: 'Web developer @themesberg',
  text: 'Solid foundation for any project',
  author: 'Bonnie Green',
  description:
    'This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.',
};

export const TestimonialsCustomerList = () => {
  const [listTestimonials, setListTestimonials] = useState<any>();
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          '/resources-testimonials?populate=*',
        );
        setListTestimonials(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const firstTestimonial = listTestimonials?.slice(0, 3);
  const secondTestimonial = listTestimonials?.slice(3, 6);
  const thirdTestimonial = listTestimonials?.slice(6, 9);

  // const firstTestimonial = testimonialsList.slice(0, 3);
  // const secondTestimonial = testimonialsList.slice(3, 6);
  // const thirdTestimonial = testimonialsList.slice(6, 9);

  return (
    <div className="bg-[#F8F5F3] pb-12">
      <div className="h-[230px] md:h-[240px] bg-primary"></div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ul className=" md:flex md:flex-col translate-y-[-131px] md:translate-y-[-141px] space-y-6">
          {firstTestimonial &&
            firstTestimonial.map((testimonial: any, index: number) => {
              const [data] = testimonial.attributes.iconOwner.data;
              const infoUser = testimonial.attributes.listTestimonials;
              const iconOwner = new URL(data.attributes.url, baseURLImage).href;
              return (
                <li
                  key={index}
                  className={`bg-white h-fit p-6 rounded-lg shadow ${index >= 3 && index <= 5 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <p className="text-lg font-semibold font-montserrat mb-2">
                    {infoUser.text}
                  </p>
                  <p className="text-sm text-[#455150] font-montserrat mb-4">
                    {infoUser.description}
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={iconOwner}
                      alt={infoUser.author}
                      className="mr-4 rounded-full"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-montserrat font-semibold">
                        {infoUser.author}
                      </p>
                      <p className="text-sm text-[#455150] font-montserrat">
                        {infoUser.role}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
        <ul className=" md:flex md:flex-col translate-y-[-131px] md:translate-y-[-141px] space-y-6">
          {secondTestimonial &&
            secondTestimonial.map((testimonial: any, index: number) => {
              const [data] = testimonial.attributes.iconOwner.data;
              const infoUser = testimonial.attributes.listTestimonials;
              const iconOwner = new URL(data.attributes.url, baseURLImage).href;
              return (
                <li
                  key={index}
                  className={`bg-white h-fit p-6 rounded-lg shadow ${index >= 3 && index <= 5 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <p className="text-lg font-semibold font-montserrat mb-2">
                    {infoUser.text}
                  </p>
                  <p className="text-sm text-[#455150] font-montserrat mb-4">
                    {infoUser.description}
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={iconOwner}
                      alt={infoUser.author}
                      className="mr-4 rounded-full"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-montserrat font-semibold">
                        {infoUser.author}
                      </p>
                      <p className="text-sm text-[#455150] font-montserrat">
                        {infoUser.role}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
        <ul className=" md:flex md:flex-col translate-y-[-131px] md:translate-y-[-141px] space-y-6">
          {thirdTestimonial &&
            thirdTestimonial.map((testimonial: any, index: number) => {
              const [data] = testimonial.attributes.iconOwner.data;
              const infoUser = testimonial.attributes.listTestimonials;
              const iconOwner = new URL(data.attributes.url, baseURLImage).href;
              return (
                <li
                  key={index}
                  className={`bg-white h-fit p-6 rounded-lg shadow ${index >= 3 && index <= 5 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <p className="text-lg font-semibold font-montserrat mb-2">
                    {infoUser.text}
                  </p>
                  <p className="text-sm text-[#455150] font-montserrat mb-4">
                    {infoUser.description}
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={iconOwner}
                      alt={infoUser.author}
                      className="mr-4 rounded-full"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-montserrat font-semibold">
                        {infoUser.author}
                      </p>
                      <p className="text-sm text-[#455150] font-montserrat">
                        {infoUser.role}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="flex justify-center -mt-20 px-4 ">
        <button className="bg-[white] text-[#172524] font-montserrat font-semibold py-[10px] px-[60px] rounded-lg border hover:bg-primary hover:text-white w-full md:w-auto">
          View More
        </button>
      </div>
    </div>
  );
};
