'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ArrowRightIcon } from '@/assets/icons/arrowRightIcon/ArrowRightIcon';

export const BreadcrumbWithCustomSeparator = ({
  bredCrumbTitle = 'Legal',
  bredCrumbDesription = 'Blog posts',
  bredCrumbHref = '/',
}: {
  bredCrumbTitle?: string;
  bredCrumbDesription?: string;
  bredCrumbHref?: string;
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={bredCrumbHref}
            className="text-white hover:text-[#C5C8C8] font-montserrat text-sm md:font-inter md:font-medium !cursor-pointer"
          >
            {bredCrumbDesription}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ArrowRightIcon stroke="#C5C8C8" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="text-[#C5C8C8] hover:text-white font-montserrat text-sm md:font-inter md:font-medium"
          >
            {bredCrumbTitle}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
