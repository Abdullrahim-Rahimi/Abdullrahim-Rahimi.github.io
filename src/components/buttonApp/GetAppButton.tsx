'use client';
import { AppStoreIcons } from '@/assets/icons/appMarket/AppStoreIcons';
import { Button } from '../ui/button';
import { GooglePlayIcons } from '@/assets/icons/appMarket/GooglePlayIcons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const GetAppButton = ({
  className,
  open,
  setOpen,
  textGetApp,
  homePage = false,
}: {
  className?: string;
  setOpen?: any;
  open?: boolean;
  textGetApp: string;
  homePage?: boolean;
}) => {
  return (
    <Button
      asChild
      variant="navigation"
      onClick={() => {
        if (setOpen) setOpen(!open);
      }}
      className={cn(
        `py-6 px-4 group hover:bg-white hover:text-primary`,
        className,
      )}
    >
      <Link href={'/get-the-app'}>
        <div className="flex justify-center items-center hover:bg-white group hover:text-primary cursor-pointer">
          <button className=" border-r-2 rtl:border-none rtl:ml-2 border-[#586968] pr-[11px]">
            <AppStoreIcons w="15" h="17" className="group-hover:fill-primary" />
          </button>
          <button
            className={cn(
              'px-[11px]  border-[#586968]',
              homePage ? 'rtl:border-r-2' : 'rtl:border-l-2',
            )}
          >
            <GooglePlayIcons
              w="15"
              h="17"
              className="group-hover:fill-primary"
            />
          </button>
          <p className="text-start leading-6 text-base font-semibold">
            {textGetApp}
          </p>
        </div>
      </Link>
    </Button>
  );
};
