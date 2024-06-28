import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Separator from '../separator/Separator';
import { cn } from '@/lib/utils';

export const QAAccordion = ({
  value,
  item,
  stylesAcoordion,
  stylesAccordionItem,
  sectionFQ,
}: {
  value: any;
  item: any;
  stylesAcoordion?: string;
  stylesAccordionItem?: string;
  sectionFQ?: boolean;
}) => {
  return (
    <Accordion
      type="multiple"
      className={`w-full bg-white rounded-[16px] space-x-4 mt-4 border ${stylesAcoordion} `}
    >
      <AccordionItem
        value={`item-${value}`}
        className={`group focus:bg-primary focus:text-white data-[state=open]:bg-primary data-[state=open]:text-white data-[state=open]:rounded-[16px] px-4 ${stylesAccordionItem}`}
      >
        <AccordionTrigger className="font-montserrat text-base font-semibold text-start !no-underline">
          {item?.question}
        </AccordionTrigger>
        <Separator className="hidden group-data-[state=open]:block data-[state=open]:bg-white group-data-[state=open]:my-4 group-data-[state=open]:mb-10" />
        <AccordionContent className="md:text-base  text-[#EAECEC] font-montserrat md:font-normal pb-6">
          <div
            className={cn('', { 'text-primaryBtn': sectionFQ })}
            dangerouslySetInnerHTML={{ __html: item?.answer }}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
