import stars from '../../assets/images/PricingStars.png';
import Image from 'next/image';
import ArrowSpiral from '../../assets/images/ArrowSpiral.png';
import { Button } from '../ui/button';

export const EnterPrise = ({ data }: { data: any }) => {
  return (
    <div className="bg-primary rounded-[16px] mx-16  hidden md:flex">
      <div className="pt-20 pl-[95px]">
        <div className="flex  items-center">
          <h2 className="text-white font-bold text-[32px] leading-10">
            {data?.title}
          </h2>
          <Image src={stars} alt="stars" className="w-[31px] h-[32px] ml-4" />
        </div>
        <p className="font-montserrat font-regular text-[#EAECEC] mt-4 md:max-w-[600px] md:mr-20">
          {data?.description}
        </p>
      </div>
      <Image
        src={ArrowSpiral}
        alt="stars"
        className="w-[174px] h-[104px] ml-4 mt-[55px]"
      />
      <Button
        className=" py-[14px] px-[110px] my-[106px] mx-auto border border-gray-400"
        style={{ backgroundColor: 'rgba(88, 105, 104, 1)' }}
      >
        Contact us
      </Button>
    </div>
  );
};
