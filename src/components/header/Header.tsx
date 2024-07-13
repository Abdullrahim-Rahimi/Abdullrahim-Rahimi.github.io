'use client';
import { LogoIconsS } from '@/assets/icons/logo/LogoIconsS';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GetAppButton } from '../buttonApp/GetAppButton';
import { headerNavigationList } from '@/lib/constants/headernavigationList';
import { DropDownMobileHeader } from '../dropdownMobileHeader/DropdownMobileHeader';
import { usePathname } from 'next/navigation';
import { DropdownResources } from '../blogPage/DropDownResources';
import { MobileMenu } from '../mobileMenu/mobileMenu';
import ToggleButton from '../toogleHeader/ToogleHeader';
import { DropDownMobileHeaderLang } from '../dropdownMobileHeader/DropDownMobileHeaderLang';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useChangePage } from '@/store/currentPage';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';
import { ChangeUserTypeMobile } from '../dropdownMobileHeader/ChangeUserMobile';
import { useOpenMenu } from '@/store/openMenu';

export const Header = () => {
  const path = usePathname();
  const [active, setActive] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const [changePage, setChangePage] = useState('Business');
  const [changeLang, setChangeLang] = useState('En');
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [listHeader, setListheader] = useState<any>();
  const [optionsToogle, setOptionsToggle] = useState<any>();
  const [optionsToogleFeature, setOptionsToggleFeatures] = useState<any>();
  const [getTheApp, setGetTheApp] = useState<any>();
  const [activePages, setActivePages] = useState<any>();
  const [listLanguage, setListLanguage] = useState<any>();

  const { lang, changeLanguages } = useChangeLanguage();
  const { isOpenMenu } = useOpenMenu();

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(`/headers?locale=${lang}`);
      const responseToggle = await axiosInstance.get(
        `/options-toogles?locale=${lang}`,
      );
      const responseLang = await axiosInstance.get(
        `/change-languages?locale=${lang}`,
      );
      const [dataLang] = responseLang?.data?.data;
      setListLanguage(dataLang?.attributes?.listLanguage);
      const [data] = response?.data?.data;
      const [dataToggle] = responseToggle?.data?.data;
      setGetTheApp(data?.attributes?.getTheApp);
      setOptionsToggle(dataToggle?.attributes?.optionsToogle);
      setOptionsToggleFeatures(dataToggle?.attributes?.optionsTooglseFeatures);
      setListheader(data?.attributes?.headerNavList);
      if (changeLang === 'En') {
        setChangePage('Business');
      } else {
        setChangePage('شركة');
      }
    })();
  }, [changeLang, lang]);
  useEffect(() => {
    if (path.includes('resources')) return setActive('/resources');
    if (path.includes('features')) return setActive('/features');
    const currentPath = headerNavigationList.find((item) => {
      if (
        path === '/customer' ||
        path === '/business' ||
        path === '/professional'
      ) {
        return item.nav === '/';
      }
      return item.nav === path;
    });
    setActive(currentPath?.nav || '');
  }, [path]);

  const handleResourcesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActive('/resources');
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  const navListFeatures = path.includes('features')
    ? optionsToogleFeature
    : optionsToogle;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = localStorage.getItem('activePage');

      if (currentPath) setActivePages(currentPath);
    }
    if (lang === 'ar') setChangeLang('ع');
  }, [lang]);
  const { page } = useChangePage();

  return (
    <header className="w-full rtl:md:  bg-primary p-4 flex justify-between md:justify-start border-b border-primaryBtn md:px-16 fixed z-40">
      <Link href={page} onClick={() => setChangePage('Business')}>
        <LogoIconsS />
      </Link>
      <nav className="flex justify-end items-center self-center md:justify-between w-full">
        <div className="md:!hidden !flex">
          {/* {!isOpenMenu && ( */}
          <div className={cn('', { hidden: isOpenMenu })}>
            <ChangeUserTypeMobile
              state={changePage}
              setState={(val: any) => {
                setChangePage(val.label);
              }}
              list={navListFeatures}
              classNames="text-center"
              link={true}
            />
            <DropDownMobileHeaderLang
              state={changeLang}
              setState={(val: any) => {
                setChangeLang(val.label);
                changeLanguages(val.path.toLowerCase());
              }}
              list={listLanguage}
              classNames="px-2 hover:bg-white hover:text-primary rtl:ml-2"
            />
          </div>

          <MobileMenu />
        </div>
        {listHeader ? (
          <>
            <ul className="hidden md:flex md:gap-[10px] lg:gap-[20px] md:ml-[10px] lg:ml-[55px] rtl:md:ml-0 rtl:md:mr-[55px] rtl:first:mr-4">
              {listHeader &&
                listHeader.map(
                  (item: { title: string; nav: string }, index: number) => {
                    let href = item.nav;

                    if (item.title === 'Home' || item.title === 'الرئيسية') {
                      if (typeof window !== 'undefined') {
                        const storedHref = localStorage.getItem('activePage');
                        if (storedHref) {
                          href = storedHref;
                        }
                      }
                    }
                    if (
                      item.title === 'Resources' ||
                      item.title === 'الموارد'
                    ) {
                      return (
                        <li
                          key={index}
                          className={
                            active === item.nav
                              ? 'border-b-2 border-[#CAB2A6]'
                              : ''
                          }
                        >
                          <Link
                            href="#"
                            onClick={handleResourcesClick}
                            className={cn(
                              ' font-normal text-[#D5D9D9] leading-6 hover:text-white cursor-pointer',
                              {
                                'text-white': active === item.nav,
                                'text-gray-400': active !== item.nav,
                              },
                            )}
                          >
                            {item.title}
                          </Link>
                          <DropdownResources
                            openBlog={isResourcesDropdownOpen}
                            setOpenBlog={setIsResourcesDropdownOpen}
                            setActive={setActive}
                          />
                        </li>
                      );
                    } else {
                      return (
                        <li
                          key={index}
                          className={
                            active === item.nav
                              ? 'border-b-2 border-[#CAB2A6]'
                              : ''
                          }
                        >
                          <Link
                            href={href}
                            onClick={() => setActive(item.nav)}
                            className={cn(
                              ' font-normal text-[#D5D9D9] leading-6 hover:text-white',
                              {
                                'text-white': active === item.nav,
                                'text-gray-400': active !== item.nav,
                              },
                            )}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    }
                  },
                )}
            </ul>
            <ToggleButton />
            <div className="hidden md:flex ">
              <DropDownMobileHeader
                state={changeLang}
                setState={(val: any) => {
                  setChangeLang(val.label);
                  changeLanguages(val.path.toLowerCase());
                }}
                list={listLanguage}
                classNameContent="!w-[70px]"
              />
              <GetAppButton homePage={true} textGetApp={getTheApp} />
            </div>
          </>
        ) : (
          <div className=" hidden md:flex ml-[50px] rtl:mr-[50px] rtl:ml-0 w-full">
            <div className="flex ">
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
            </div>

            <div className="ml-auto rtl:ml-0 rtl:mr-auto flex">
              <Skeleton className="w-[300px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[100px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
              <Skeleton className="w-[200px] h-[30px] mr-2 rtl:mr-0 rtl:ml-2" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
