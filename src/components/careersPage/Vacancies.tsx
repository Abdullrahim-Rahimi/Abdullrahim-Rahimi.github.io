'use client';
import { DoteIcon } from '@/assets/icons/doteIcon/DoteIcon';
import { Button } from '../ui/button';
import { AccordionVacancies } from './Acoordion';
import { ModalCV } from './ModalCV';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export const Vacansies = ({
  setScroll,
  dataCareers,
}: {
  setScroll: Dispatch<SetStateAction<any>>;
  dataCareers: any;
}) => {
  const [openCV, setOpenCV] = useState(false);

  const blockRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setScroll(blockRef);
    window.scrollTo(0, 0);
  }, [setScroll]);

  return (
    <div
      className=" px-4 py-20 bg-[#F8F5F3] md:flex md:justify-between"
      ref={blockRef}
    >
      <div className="bg-white p-8 border rounded-[12px] md:mr-6 md:h-fit">
        <p className="uppercase text-[#A67F6B] font-bold">
          {dataCareers?.getInTouch}
        </p>
        <p className="font-montserrat font text-[#2E3B3A] mt-2">
          {dataCareers?.fillSpeak}
        </p>
        <span className="text-[#A67F6B] font-montserrat">
          {dataCareers?.email}
        </span>
        <Button
          type="submit"
          className="hover:bg-white text-primary border border-primary w-full px-4 rounded-lg text-base mt-6 bg-primary font-montserrat font-semibold text-white hover:text-primary md:py-4 md:h-auto"
        >
          <Link href={'/contact'}> {dataCareers?.question}</Link>
        </Button>
      </div>
      <ul className="space-y-6 mt-6 md:flex md:flex-col md:w-full md:mt-0">
        {dataCareers &&
          dataCareers.vacanciesList.map((item: any, index: any) => {
            return (
              <li
                key={index}
                className="bg-white p-8 border rounded-[12px] w-full md:flex md:justify-between md:flex-col"
              >
                <div className="md:flex md:justify-between">
                  <div>
                    <p className="font-bold text-2xl">{item.position}</p>
                    <div className="md:flex md:justify-center md:items-center">
                      <p className="flex justify-start items-center font-montserrat text-[#2E3B3A] my-2">
                        <span>{item.levelEnglish} </span>
                        <DoteIcon /> <span>{item.jobType}</span>
                      </p>
                      <DoteIcon className="hidden md:block" />
                      <span className="text-[#14736F] bg-[#E7F1F1] px-[10px] py-[1px] font-montserrat rounded-[20px] block w-full md:w-fit">
                        {item.experience} experience
                      </span>
                    </div>
                  </div>
                  <Button
                    type="button"
                    onClick={() => setOpenCV(!openCV)}
                    className="bg-white mb-8 text-primary border border-primary w-full px-4 rounded-lg text-base mt-6 hover:bg-primary font-montserrat font-semibold hover:text-white md:mt-0  md:w-fit md:h-fit md:py-2 md:px-4"
                  >
                    Apply
                  </Button>
                </div>
                <AccordionVacancies listExperience={item.aboutExperience} />
              </li>
            );
          })}
      </ul>
      <ModalCV openCV={openCV} setOpenCV={setOpenCV} />
    </div>
  );
};
