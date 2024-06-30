'use client';
import { Button } from '../ui/button';
import { AppStoreIcons } from '@/assets/icons/appMarket/AppStoreIcons';
import { useRouter } from 'next/navigation';

export const AppStoreButton = ({
  className,
  hoverText,
  fillHover,
}: {
  className?: string;
  hoverText?: string;
  fillHover?: string;
}) => {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() =>
          router.push(
            'https://play.google.com/store/apps/details?id=com.trythedaisy.app',
          )
        }
        variant="navigation"
        className={`w-full mr-0 h-full felx items-center justify-center rounded-xl py-4 group hover:bg-white hover:text-primary ${className}`}
      >
        <div className="flex items-center mr-3">
          <AppStoreIcons
            w="36"
            h="36"
            className={`mr-3 rtl:ml-[15px] fill-white group-hover:fill-primary ${fillHover}`}
          />
          <div className={`hover:text-primary ${hoverText}`}>
            <p className="text-start font-inter font-normal text-xs leading-3">
              Download on the
            </p>
            <p className="text-start font-inter leading-6 text-lg font-bold">
              AppStore
            </p>
          </div>
        </div>
      </Button>
    </>
  );
};
