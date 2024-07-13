import Separator from '../separator/Separator';
import { Button } from '../ui/button';
import growImage from '../../assets/images/customerDaisy.png';
import Image from 'next/image';
import leaf from '../../assets/images/bgleafcustomer.png';
import leafdown from '../../assets/images/bgcustomerdown.png';
import { baseURLImage } from '@/helpers/axiosConfig';

export const GrowthSectionCustomer = ({
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
  const growthImage = new URL(imageUrl, baseURLImage).href;
  return (
    <>
      <div className=" px-4 md:flex bg-[white]/90 md:bg-white">
        <div className="md:flex md:justify-between md:bg-[#D5D9D9] md:mx-[64px] md:mb-[164px] rounded-[16px] relative">
          <Image
            className="hidden md:block absolute top-0 left-[50%] -translate-x-1/2"
            width={400}
            height={200}
            src={leaf}
            alt="bgleaf"
          />
          <Image
            className="hidden md:block absolute bottom-0 left-0"
            src={leafdown}
            width={350}
            height={250}
            alt="bgleaf"
          />
          <div className="md:w-[50%] md:px-20 md:ml-[100px] md:pb-[150px] md:pt-[150px]">
            <h5 className="text-[#A67F6B] pt-20 text-base leading-6">
              {subtitle}
            </h5>
            <h2 className="pt-2 text-[#172524] leading-10 text-3xl md:text-[40px] md:leading-[50px] md:font-bold">
              {title}
            </h2>
            <p className="ltr:font-montserrat font-medium text-xl pt-3 leading-8 text-primaryBtn md:text-[16px] md:leading-6 md:font-normal md:w-[70%]">
              {description}
            </p>
            <Button className="font-semibold w-full h-auto text-base mt-8 mb-10 px-[85px] py-[14px] rounded-[9px] md:w-[310px] hover:bg-white hover:text-primary hover:border hover:border-primary">
              {learnMore}
            </Button>
          </div>
          <Separator className="bg-[#EAECEC] mb-10 md:hidden" />
          <div className="flex justify-center items-center md:w-[50%] z-10 md:pr-28 md:py-[100px] md:rtl:ml-40">
            <Image
              width={426}
              height={748}
              src={growthImage}
              alt="customerdaisy"
            />
          </div>
        </div>
        <Separator className="bg-[#EAECEC] mt-20 md:hidden" />
      </div>
    </>
  );
};
