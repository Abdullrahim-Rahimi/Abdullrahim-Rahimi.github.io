'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';

export const AccordionVacancies = ({
  listExperience,
}: {
  listExperience: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Accordion
      type="single"
      collapsible
      className=" ml-auto py-6 border-t md:mt-6 md:ml-0 pb-0"
    >
      <AccordionItem value="item-1">
        <AccordionContent className="bg-[#F8F5F3] rounded-[8px] px-4 py-6 ">
          <ul className="list-disc pl-4">
            {listExperience.map((item, index) => {
              return (
                <li key={index} className="font-montserrat text-primary ">
                  {item}
                </li>
              );
            })}
          </ul>
        </AccordionContent>
        <AccordionTrigger
          onClick={handleToggle}
          className="font-montserrat font-semibold text-base justify-end pb-0"
        >
          {isOpen ? 'Hide' : 'View more info'}
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  );
};
