import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import Separator from '../separator/Separator';
import { resourcesLinkList } from '@/lib/constants/resourcesLink';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import { usePathname } from 'next/navigation';
import { resourcesDropDownList } from '@/lib/constants/resources/resourcesList';

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

  const handleMouseEnter = (index: any) => {
    setCurrentImage(resourcesDropDownList[index]);
  };

  const handleMouseLeave = () => {
    setCurrentImage(resourcesDropDownList[3]);
  };
  const path = usePathname();

  return (
    <DropdownMenu
      open={openBlog}
      onOpenChange={() => {
        setOpenBlog(!openBlog);
        if (setActive) setActive(path);
      }}
    >
      <DropdownMenuContent className="w-[100vw] top-[110px] absolute hidden md:block py-10 px-16">
        <div className="flex">
          <div className="w-[420px] h-[290px] border relative bg-[#E8E9E9] rounded-lg mr-6 overflow-hidden">
            <Image
              src={currentImage}
              alt="sdasd"
              className="h-full object-cover"
            />
          </div>
          <div className="w-[70%]">
            <h2 className="font-semibold text-2xl text-primary">
              Stay Updated With The Daisy News
            </h2>
            <Separator className="my-6 bg-[#E8E9E9]" />
            <ul className="grid grid-cols-2 gap-x-[100px] gap-y-4 w-[70%]">
              {resourcesLinkList.map((item, index) => (
                <li
                  key={index}
                  className="pl-4 py-[18px] hover:bg-[#E8E9E9] rounded-xl hover:outline-gray-300 hover:outline"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={item.nav} onClick={() => setOpenBlog(!openBlog)}>
                    <h3 className="text-base font-montserrat font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-base font-montserrat text-primaryBtn">
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
