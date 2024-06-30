import { AppStoreButton } from '../buttonApp/AppStoreButton';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';
import Image from 'next/image';

export const GetTheAppScan = ({ qrCode }: { qrCode: string }) => {
  return (
    <div className="w-full md:flex md:justify-center md:items-center bg-primary px-4 mx-auto ">
      <div className="mr-6 h-auto hidden md:block bg-primaryBtn rounded-[8px]">
        <Image
          width={148}
          height={148}
          src={qrCode}
          alt="qrCode"
          className="p-4 "
        />
      </div>
      <div className="md:flex md:flex-col">
        <PlayMarketButton className="mb-4 md:mr-6 px-[160px]" />
        <AppStoreButton className="px-[160px]" />
      </div>
    </div>
  );
};
