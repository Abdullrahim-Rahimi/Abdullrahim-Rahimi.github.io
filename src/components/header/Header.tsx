'use client';
import { LogoIconsS } from '@/assets/icons/logo/LogoIconsS';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { GetAppButton } from '../buttonApp/GetAppButton';
import {
  changeLanguage,
  headerNavigationList,
  optionsToogle,
  optionsToogleFeatures,
} from '@/lib/constants/headernavigationList';
import { DropDownMobileHeader } from '../dropdownMobileHeader/DropdownMobileHeader';
import { usePathname } from 'next/navigation';
import { DropdownResources } from '../blogPage/DropDownResources';
import { MobileMenu } from '../mobileMenu/mobileMenu';
import ToggleButton from '../toogleHeader/ToogleHeader';
import { DropDownMobileHeaderLang } from '../dropdownMobileHeader/DropDownMobileHeaderLang';

export const Header = () => {
  const path = usePathname();
  const [active, setActive] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const [changePage, setChangePage] = useState('Business');
  const [changeLang, setChangeLang] = useState('LTR');
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

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

  const toggleBodyDir = () => {
    const currentDir = document.body.getAttribute('dir') || 'rtl';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    document.body.setAttribute('dir', newDir);
  };

  const navListFeatures = path.includes('features')
    ? optionsToogleFeatures
    : optionsToogle;

  return (
    <header className="w-full rtl:md:  bg-primary p-4 flex justify-between md:justify-start border-b border-primaryBtn md:px-16 fixed z-40">
      <Link href={'/'} onClick={() => setChangePage('Business')}>
        <LogoIconsS />
      </Link>
      <nav className="flex justify-end items-center self-center md:justify-between w-full">
        <div className="md:hidden">
          {!openMenu && (
            <>
              <DropDownMobileHeader
                state={changePage}
                setState={setChangePage}
                list={navListFeatures}
                classNames="text-center"
                link={true}
              />
              <DropDownMobileHeaderLang
                state={changeLang}
                setState={setChangeLang}
                list={changeLanguage}
                classNames="px-2 hover:bg-white hover:text-primary "
              />
            </>
          )}
          <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
        <ul className="hidden md:flex md:gap-[10px] lg:gap-[20px] md:ml-[10px]  lg:ml-[55px] rtl:md:ml-0 rtl:md:mr-[55px] rtl:first:mr-4">
          {headerNavigationList.map((item, index) => {
            let href = item.nav;

            if (item.title === 'Home') {
              if (typeof window !== 'undefined') {
                const storedHref = localStorage.getItem('activePage');
                if (storedHref) {
                  href = storedHref;
                }
              }
            }
            if (item.title === 'Resources') {
              return (
                <li
                  key={index}
                  className={
                    active === item.nav ? 'border-b-2 border-[#CAB2A6]' : ''
                  }
                >
                  <Link
                    href="#"
                    onClick={handleResourcesClick}
                    className={clsx(
                      'font-openSans font-normal text-[#D5D9D9] leading-6 hover:text-white cursor-pointer',
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
                    active === item.nav ? 'border-b-2 border-[#CAB2A6]' : ''
                  }
                >
                  <Link
                    href={href}
                    onClick={() => setActive(item.nav)}
                    className={clsx(
                      'font-openSans font-normal text-[#D5D9D9] leading-6 hover:text-white',
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
          })}
        </ul>
        <ToggleButton />
        <div className="hidden md:flex ">
          <DropDownMobileHeader
            state={changeLang}
            setState={(val: any) => {
              setChangeLang(val);
              toggleBodyDir();
            }}
            list={changeLanguage}
            classNameContent="!w-[70px]"
          />
          <GetAppButton />
        </div>
      </nav>
    </header>
  );
};
