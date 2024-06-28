import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ArrowRightIcon } from '@/assets/icons/arrowRightIcon/ArrowRightIcon';

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
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            onClick={() => setBackMenu(!backmenu)}
            className="text-white hover:text-[#C5C8C8] font-montserrat text-sm md:font-inter md:font-medium"
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
