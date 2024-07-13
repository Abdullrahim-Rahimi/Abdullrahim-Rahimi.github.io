import { useEffect, useState } from 'react';
import { ArrowDownIcon } from '@/assets/icons/arrowDown/ArrowDownIcon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { usePathname, useRouter } from 'next/navigation';
import { useChangePage } from '@/store/currentPage';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';

interface PropsDropDownHeader {
  state: string;
  setState: any;
  list?: { label: string; path: string }[];
  classNames?: string;
  classNameContent?: string;
  link?: boolean;
}

export const ChangeUserTypeMobile = ({
  state,
  setState,
  list,
  classNames,
  classNameContent,
  link,
}: PropsDropDownHeader) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState('');
  const [currentPage, setCurrentPage] = useState<any>();
  const [dataList, setDataList] = useState<any>();
  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        `/options-toogles?locale=${lang}`,
      );
      const [data] = response?.data?.data;
      setDataList(data?.attributes?.optionsToogle);
      //   setCurrentPage(data?.attributes?.optionsToogle[0].label);
    })();
  }, [lang]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedPath = localStorage.getItem('activePage');

      if (pathname.includes('business') && !pathname.includes('features'))
        setActive('/business');
      if (pathname.includes('customer') && !pathname.includes('features'))
        setActive('/customer');
      if (pathname.includes('professional') && !pathname.includes('features'))
        setActive('/professional');

      if (pathname.startsWith('/features') && storedPath) {
        const newPath = `/features/${storedPath}`;
        if (pathname !== newPath) {
          router.replace(newPath);
        }
      }
    }
  }, [pathname, router]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let currentPath: string | undefined;
      if (pathname.startsWith('/business')) currentPath = '/business';
      if (pathname.startsWith('/customer')) currentPath = '/customer';
      if (pathname.startsWith('/professional')) currentPath = '/professional';

      if (currentPath) {
        localStorage.setItem('activePage', currentPath);
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined' && active) {
      localStorage.setItem('activePage', active);
    }
  }, [active]);

  const handleClick = (path: string) => {
    if (path.startsWith('/features/business')) setActive('/business');
    if (path.startsWith('/features/customer')) setActive('/customer');
    if (path.startsWith('/features/professional')) setActive('/professional');
    setActive(path);
    if (typeof window !== 'undefined') {
      localStorage.setItem('activePage', path);
    }
    if (pathname.includes('/features')) {
      router.push(`/features${path}`);
    }
    if (pathname.startsWith('/business')) {
      router.push(path);
    }
    if (pathname.startsWith('/customer')) {
      router.push(path);
    }
    if (pathname.startsWith('/professional')) {
      router.push(path);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = localStorage.getItem('activePage');
      if (currentPath) setActive(currentPath);
      if (currentPath === '/business' && lang === 'en')
        setCurrentPage('Business');
      if (currentPath === '/customer' && lang === 'en')
        setCurrentPage('Customer');
      if (currentPath === '/professional' && lang === 'en')
        setCurrentPage('Professional');
      //
      if (currentPath === '/business' && lang === 'ar') setCurrentPage('شركات');
      if (currentPath === '/customer' && lang === 'ar') setCurrentPage('أفراد');
      if (currentPath === '/professional' && lang === 'ar')
        setCurrentPage('محترفين');
    }
  }, [lang]);
  const { changePage } = useChangePage();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger
        className={cn(
          'min-w-[45px] mr-2 bg-customWhite border text-white px-4 py-2 border-primaryBtn inline-flex text-center items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group md:hover:bg-white md:hover:text-primary',
          classNames,
        )}
      >
        <p className="mr-2 rtl:mr-0 rtl:">{currentPage}</p>
        <ArrowDownIcon className=" stroke-white group-hover:stroke-primary rtl:mr-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        defaultValue={dataList?.[0].label}
        className={cn(
          'text-center flex flex-col items-center',
          classNameContent,
        )}
      >
        {dataList &&
          dataList?.map((item: any, index: any) => (
            <DropdownMenuItem
              className="w-full flex flex-col self-center text-center justify-center !items-center ltr:font-montserrat font-normal text-base group rtl:font-cairo"
              onClick={() => setCurrentPage(item.label)}
              key={index}
            >
              <Button
                className="w-full bg-white text-primary group-hover:bg-[#F2F4F4]"
                onClick={() => {
                  handleClick(item.path), changePage(item.path);
                }}
              >
                {item.label}
              </Button>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
