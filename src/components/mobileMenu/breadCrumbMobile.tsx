'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ArrowRightIcon } from '@/assets/icons/arrowRightIcon/ArrowRightIcon';
import { ChevronLeft } from 'lucide-react';
import { useChangeLanguage } from '@/store/language';

export const BreadcrumbMobile = ({
  bredCrumbTitle = 'Legal',
  bredCrumbDesription = 'Blog posts',
  backmenu,
  setBackMenu,
}: {
  bredCrumbTitle?: string;
  bredCrumbDesription?: string;
  backmenu: boolean;
  setBackMenu: any;
}) => {
  const { lang } = useChangeLanguage();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            onClick={() => setBackMenu(!backmenu)}
            className="text-white hover:text-[#C5C8C8] ltr:font-montserrat text-sm md:ltr:font-inter md:font-medium rtl:font-cairo"
          >
            {bredCrumbDesription}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          {lang === 'ar' ? (
            <ChevronLeft className="text-[#C5C8C8]" />
          ) : (
            <ArrowRightIcon stroke="#C5C8C8" />
          )}
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="text-[#C5C8C8] hover:text-white ltr:font-montserrat text-sm md:ltr:font-inter md:font-medium rtl:font-cairo"
          >
            {bredCrumbTitle}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
