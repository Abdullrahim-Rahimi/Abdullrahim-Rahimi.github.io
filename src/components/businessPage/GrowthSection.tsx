import growthImage from '../../assets/images/growthBusiness.png';
import Separator from '../separator/Separator';
import { Button } from '../ui/button';
import Link from 'next/link';
import { baseURLImage } from '@/helpers/axiosConfig';
import Image from 'next/image';

export const GrowthSection = ({
  title,
  description,
  subtitle,
  learnMore,
  imageUrl,
}: {
  title: string;
  description: string;
  subtitle: string;
  learnMore: string;
  imageUrl: string;
}) => {
  const growthImages = new URL(imageUrl, baseURLImage).href;

  return (
    <>
      <div className=" px-4 md:flex md:bg-[#F8F5F3] bg-white">
        <div className="md:flex md:justify-between md:bg-white md:mx-[64px] md:mb-[164px] rounded-[16px]">
          <div className="md:w-[50%] md:px-20 md:ml-[100px] md:pb-[200px]">
            <h5 className="text-[#A67F6B] pt-20 text-base leading-6 uppercase">
              {subtitle}
            </h5>
            <h2 className="pt-2 text-[#172524] leading-10 text-3xl md:text-[40px] md:leading-[50px] md:font-bold capitalize">
              {title}
            </h2>
            <p className="ltr:font-montserrat font-medium text-xl pt-3 leading-8 text-primaryBtn md:text-[16px] md:leading-6 md:font-normal md:w-[70%]">
              {description}
            </p>
            <Button className="font-semibold w-full h-auto text-base mt-8 mb-10 px-[85px] py-[14px] rounded-[9px] md:w-[310px] hover:bg-white hover:text-primary hover:border hover:border-primary">
              <Link href="/about"> {learnMore}</Link>
            </Button>
          </div>
          <Separator className="bg-[#EAECEC] mb-10 md:hidden" />
          <div className="flex justify-center items-center md:w-[50%] ltr:md:pr-28 rtl:md:pl-28 md:py-[100px]">
            <Image
              width={426}
              height={548}
              src={growthImages}
              alt="customerdaisy"
            />
          </div>
        </div>
        <Separator className="bg-[#EAECEC] mt-20 md:hidden" />
      </div>
    </>
  );
};
