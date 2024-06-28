import { QRCodeIcons } from '@/assets/icons/qrCodeIcon/QRCodeIcon';
import { AppStoreButton } from '../buttonApp/AppStoreButton';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';

export const GetTheAppScan = () => {
  return (
    <div className="w-full md:flex md:justify-center md:items-center bg-primary px-4 mx-auto ">
      <div className="mr-6 h-auto hidden md:block">
        <QRCodeIcons />
      </div>
      <div className="md:flex md:flex-col">
        <PlayMarketButton className="mb-4 md:mr-6 px-[160px]" />
        <AppStoreButton className="px-[160px]" />
      </div>
    </div>
  );
};
