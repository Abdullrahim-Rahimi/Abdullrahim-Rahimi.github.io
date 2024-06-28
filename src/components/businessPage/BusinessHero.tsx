import { QRCodeIcons } from '@/assets/icons/qrCodeIcon/QRCodeIcon';
import { AppStoreButton } from '../buttonApp/AppStoreButton';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';
import Separator from '../separator/Separator';
import leaf from '../../assets/images/LeafBg.png';
import stars from '../../assets/images/Stars.png';
import phone from '../../assets/images/PHONE.png';
import Image from 'next/image';

export const BusinessHero = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className=" bg-primary pt-16 px-4 h-screen">
      <div className="md:hidden">
        <h1 className="text-white text-5xl leading-[60px]">
          Easy, Flexible And Powerful, Your Customers Will Love It!
        </h1>
        <p className="font-montserrat font-medium leading-[30px] text-xl text-[#D5D9D9] mt-3">
          Your Gateway to Seamless
          <br className="md:hidden" /> Services & Unbeatable Deals!
        </p>
        <div className="flex flex-col border-b border-primaryBtn pb-16">
          <PlayMarketButton className="mb-6 mt-8" />
          <AppStoreButton />
        </div>
      </div>
      <div className="hidden md:flex justify-between mx-16">
        <div className="flex flex-col w-[533px]">
          <h1 className="text-white text-5xl leading-[60px]">{title}</h1>
          <p className="font-montserrat font-medium leading-[30px] text-xl text-[#D5D9D9] mt-3">
            {subtitle}
          </p>
          <Separator className="my-8" />
          <div className="grid grid-cols-[148px_1fr] ">
            <QRCodeIcons />
            <div className="flex flex-col justify-between border-primaryBtn ml-6 rtl:mr-6 ">
              <PlayMarketButton className="mb-2 w-full" />
              <AppStoreButton />
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-[600px] h-[500px] bg-primaryBtn rounded-[16px] relative ml-auto">
            <Image
              className="absolute bottom-0 left-0"
              src={leaf}
              alt="leaf"
              width={300}
            />
            <Image
              className="absolute top-[60px] right-[50px]"
              src={stars}
              alt="start"
              width={100}
            />
            <Image
              className="absolute bottom-0 right-[50%] translate-x-1/2"
              src={phone}
              alt="start"
              width={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
