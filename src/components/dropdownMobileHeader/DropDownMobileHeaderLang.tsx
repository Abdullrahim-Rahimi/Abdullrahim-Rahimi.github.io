import { useState } from 'react';
import { ArrowDownIcon } from '@/assets/icons/arrowDown/ArrowDownIcon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

interface PropsDropDownHeader {
  state: string;
  setState: any;
  list?: { label: string; path: string }[];
  classNames?: string;
  classNameContent?: string;
  link?: boolean;
}

export const DropDownMobileHeaderLang = ({
  state,
  setState,
  list,
  classNames,
  classNameContent,
  link,
}: PropsDropDownHeader) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleSelect = (label: string) => {
    setState(label);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className={cn(
          'min-w-[45px] mr-2 bg-customWhite border text-white px-4 py-2 border-primaryBtn inline-flex text-center items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group md:hover:bg-white md:hover:text-primary',
          classNames,
        )}
      >
        <p className="mr-2 rtl:mr-0 rtl:">{state}</p>
        <ArrowDownIcon className=" stroke-white group-hover:stroke-primary" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          'text-center flex flex-col items-center',
          classNameContent,
        )}
      >
        {list?.map((item, index) => (
          <DropdownMenuItem
            className="w-full flex flex-col self-center text-center justify-center !items-center font-montserrat font-normal text-base group"
            onClick={() => handleSelect(item.label)}
            key={index}
          >
            <Button
              className="w-full bg-white text-primary group-hover:bg-[#F2F4F4]"
              onClick={() => {
                setOpen(false);
                if (link) router.push(item.path);
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
