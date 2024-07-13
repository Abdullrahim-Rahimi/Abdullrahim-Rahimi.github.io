import { AppStoreButton } from '@/components/buttonApp/AppStoreButton';
import { PlayMarketButton } from '@/components/buttonApp/PlayMarketButton';
import Separator from '@/components/separator/Separator';

export const CreatePerfect = ({
  textCreate,
  textDownload,
}: {
  textCreate: string;
  textDownload: string;
}) => {
  return (
    <div className="bg-[#2E4342] py-[68px] px-4 mt-28 md:mx-16 md:rounded-[16px] md:px-28 md:py-16 md:flex">
      <h1 className="text-white font-semibold text-[32px] leading-10  md:mr-[150px]">
        {textCreate}
      </h1>
      <Separator className="my-4 md:hidden" />
      <div>
        <p className="ltr:font-montserrat text-[16px] leading-6 text-white mb-4">
          {textDownload}
        </p>
        <div className="md:flex md:w-[420px]">
          <PlayMarketButton
            fillHover="group-hover:fill-white fill-primary"
            hoverText="hover:text-white "
            className="mb-4 md:mb-0 md:w-auto md:mr-4 text-primary bg-white  hover:text-white hover:bg-primary"
          />
          <AppStoreButton
            fillHover="group-hover:fill-white fill-primary"
            hoverText="hover:text-white "
            className="mb-4 md:mb-0 md:w-auto md:mr-4 text-primary bg-white  hover:text-white hover:bg-primary"
          />
        </div>
      </div>
    </div>
  );
};
