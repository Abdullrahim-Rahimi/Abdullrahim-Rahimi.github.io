'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { BurgerMenu } from '@/assets/icons/burgerMenu/BurgerMenu';
import { CloseIcon } from '@/assets/icons/closeIcon/CloseIcon';
import { GetAppButton } from '../buttonApp/GetAppButton';
import Link from 'next/link';
import { ArrowRightIcon } from '@/assets/icons/arrowRightIcon/ArrowRightIcon';
import Separator from '../separator/Separator';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { BreadcrumbMobile } from './breadCrumbMobile';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { ChevronLeft } from 'lucide-react';
import { useChangePage } from '@/store/currentPage';
import { useOpenMenu } from '@/store/openMenu';

export const MobileMenu = () => {
  const [onResources, setResources] = useState(true);
  const [getTheApp, setGetTheApp] = useState<any>();
  const [listNav, setListNav] = useState<any>();
  const [openMenu, setOpenMenu] = useState(false);

  const { toggleOpenMenu } = useOpenMenu();
  const router = useRouter();
  const { lang } = useChangeLanguage();
  const { page } = useChangePage();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(`/headers?locale=${lang}`);
        const responseList = await axiosInstance.get(
          `/mobile-list-navigations?locale=${lang}`,
        );

        const [data] = response?.data?.data;
        const [list] = responseList?.data?.data;
        setListNav(list?.attributes);
        setGetTheApp(data?.attributes?.getTheApp);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [lang]);

  return (
    <DropdownMenu
      open={openMenu}
      modal={false}
      onOpenChange={() => {
        toggleOpenMenu(!openMenu);
        return setOpenMenu(false);
      }}
    >
      <DropdownMenuTrigger>
        <span
          className="w-[55px] mr-0 bg-customWhite border text-white px-4 py-3 border-primaryBtn inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          onClick={() => {
            setOpenMenu(!openMenu),
              setResources(true),
              toggleOpenMenu(!openMenu);
          }}
        >
          {!openMenu ? <BurgerMenu /> : <CloseIcon />}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-none bg-primary text-white mt-[30px] px-4 md:hidden w-[100vw]">
        {onResources ? (
          <ul>
            {listNav?.listNavigation &&
              listNav?.listNavigation.map((item: any, index: number) => {
                return (
                  <li key={index}>
                    <div className="flex rtl:flex-row-reverse justify-between items-center py-4 rtl:font-cairo ">
                      <Button
                        className="ltr:font-montserrat font-semibold text-xl leading-8 w-full justify-start  rtl:font-cairo rtl:justify-end"
                        onClick={() => {
                          toggleOpenMenu(false);
                          if (
                            item.title === 'Resources' ||
                            item.title === 'الموارد' ||
                            item.title === 'Ресурси'
                          ) {
                            setResources(false);
                          } else if (
                            item.title === 'Home' ||
                            item.title === 'الرئيسية' ||
                            item.title === 'Додому'
                          ) {
                            setOpenMenu(!openMenu);
                            toggleOpenMenu(!openMenu);
                            router.push(page);
                          } else {
                            router.push(item.nav);
                            setOpenMenu(!openMenu);
                            toggleOpenMenu(!openMenu);
                          }
                        }}
                      >
                        {item.title}
                      </Button>
                      {lang === 'ar' ? <ChevronLeft /> : <ArrowRightIcon />}
                    </div>
                    <Separator />
                  </li>
                );
              })}
          </ul>
        ) : (
          <div>
            <div className="flex pb-6 ltr:mr-auto rtl:ml-auto rtl:font-cairo rtl:flex-row-reverse">
              <BreadcrumbMobile
                backmenu={onResources}
                setBackMenu={setResources}
                bredCrumbTitle={listNav?.bredCrumbTitle}
                bredCrumbDesription={listNav?.bredCrumbDesription}
              />
            </div>
            <ul>
              {listNav?.listNavigation[3]?.submenu!.map(
                (submenuItem: any, subIndex: number) => (
                  <li key={subIndex} className="pb-5 ">
                    <Link
                      href={submenuItem.nav}
                      className="ltr:font-montserrat font-semibold text-base leading-6"
                      onClick={() => {
                        setOpenMenu(!openMenu), setResources(true);
                      }}
                    >
                      <div className="flex justify-between items-center rtl:font-cairo rtl:flex-row-reverse rtl:text-end">
                        <div>
                          {submenuItem.title}
                          {submenuItem.subtitle && (
                            <p className="text-[#D5D9D9] font-normal text-sm py-1 rtl:font-cairo">
                              {submenuItem.subtitle}
                            </p>
                          )}
                        </div>
                        <div>
                          {lang === 'ar' ? <ChevronLeft /> : <ArrowRightIcon />}
                        </div>
                      </div>
                      <Separator className="mt-4" />
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
        <GetAppButton
          textGetApp={getTheApp}
          className="w-full mb-10 mt-6"
          setOpen={setOpenMenu}
          open={openMenu}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
