'use client';
import { LogoIconsS } from '@/assets/icons/logo/LogoIconsS';
import Link from 'next/link';
import { PlayMarketButton } from '../buttonApp/PlayMarketButton';
import { AppStoreButton } from '../buttonApp/AppStoreButton';
import { FacebookIcons } from '@/assets/icons/socialLinksIcons/FacebookIcons';
import { TwitterIcons } from '@/assets/icons/socialLinksIcons/TwitterIcons';
import { LinkedInIcons } from '@/assets/icons/socialLinksIcons/LinkedInIcons';
import { InstagramIcons } from '@/assets/icons/socialLinksIcons/InstagramIcons';
import { navigationList } from '@/lib/constants/footerNavigationList';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import axiosInstance from '@/helpers/axiosConfig';

export const Footer = () => {
  const [socialLinks, setSocialLinks] = useState<any>();
  const path = usePathname();
  const isVisibleAppBtn = path.includes('get-the-app');
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get('/social-links');
      setSocialLinks(response.data.data[0].attributes.socialLinks);
    })();
  }, []);
  return (
    <footer className="w-full bg-primary px-4 py-[124px] md:py-14 flex flex-col justify-center items-center">
      <Link href={'/'} className="mb-6 opacity-60">
        <LogoIconsS />
      </Link>
      <nav className=" justify-center items-center self-center ">
        <ul className="flex flex-col items-center justify-center font-montserrat text-[#FFFFFF]/80 md:flex-row md:gap-x-8">
          {navigationList.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.nav}
                className="pb-8 hover:text-white"
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      </nav>
      {!isVisibleAppBtn && (
        <div className="w-full md:flex md:max-w-[650px]">
          <PlayMarketButton className="mb-4 md:mb-0 md:mr-6 rtl:mr-0 rtl:ml-6" />
          <AppStoreButton />
        </div>
      )}
      {socialLinks && (
        <ul className="flex mx-auto items-center justify-center mt-8 gap-x-6">
          <li>
            <Link href={socialLinks.facebook_url} target="blank">
              <FacebookIcons />
            </Link>
          </li>
          <li>
            <Link href={socialLinks.twitter_url} target="blank">
              <TwitterIcons />
            </Link>
          </li>
          <li>
            <Link href={socialLinks.linkedin_url} target="blank">
              <LinkedInIcons />
            </Link>
          </li>
          <li>
            <Link href={socialLinks.instagram_url} target="blank">
              <InstagramIcons />
            </Link>
          </li>
        </ul>
      )}
    </footer>
  );
};
