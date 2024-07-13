'use client';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import Separator from '../separator/Separator';
import { resourcesLinkList } from '@/lib/constants/resourcesLink';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { resourcesDropDownList } from '@/lib/constants/resources/resourcesList';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';

interface IPropsResources {
  openBlog: boolean;
  setOpenBlog: Dispatch<SetStateAction<boolean>>;
  setActive?: Dispatch<SetStateAction<string>>;
}

export const DropdownResources = ({
  openBlog,
  setOpenBlog,
  setActive,
}: IPropsResources) => {
  const [currentImage, setCurrentImage] = useState(resourcesDropDownList[3]);
  const [listResources, setListResources] = useState<any>();

  const handleMouseEnter = (index: any) => {
    setCurrentImage(resourcesDropDownList[index]);
  };

  const handleMouseLeave = () => {
    setCurrentImage(resourcesDropDownList[3]);
  };
  const path = usePathname();
  const { lang } = useChangeLanguage();
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        `/resources-lists?locale=${lang}`,
      );
      const [data] = response?.data?.data;
      setListResources(data?.attributes);
    })();
  }, [lang]);
  return (
    <DropdownMenu
      open={openBlog}
      modal={false}
      onOpenChange={() => {
        setOpenBlog(!openBlog);
        if (setActive) setActive(path);
      }}
    >
      <DropdownMenuContent className="w-[100vw] top-[110px] absolute hidden md:block py-10 px-16">
        <div className="flex rtl:md:flex-row-reverse">
          <div className="w-[420px] h-[290px] border relative bg-[#E8E9E9] rounded-lg mr-6 overflow-hidden">
            <Image
              src={currentImage}
              alt="sdasd"
              className="h-full object-cover"
            />
          </div>
          <div className="w-[70%] rtl:mr-6">
            <h2 className="font-semibold text-2xl text-primary rtl:text-end">
              {listResources?.title}
            </h2>
            <Separator className="my-6 bg-[#E8E9E9]" />
            <ul className="grid grid-cols-2 gap-x-[100px] gap-y-4 w-[70%] rtl:ml-auto">
              {listResources?.itemResources &&
                listResources?.itemResources.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="ltr:pl-4 rtl:pr-4 py-[18px] hover:bg-[#E8E9E9] rounded-xl hover:outline-gray-300 hover:outline"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.nav}
                      onClick={() => setOpenBlog(!openBlog)}
                    >
                      <h3 className="text-base ltr:font-montserrat font-semibold rtl:font-cairo rtl:md:text-end">
                        {item.title}
                      </h3>
                      <p className="text-base ltr:font-montserrat text-primaryBtn rtl:font-cairo rtl:md:text-end">
                        {item.description}
                      </p>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
