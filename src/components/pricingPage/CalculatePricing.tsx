import React, { useState, useRef } from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';
import { Calculater } from './Calculater';
import { ResultCalculate } from './ResultCalculate';
import { cn } from '@/lib/utils';
import { useCalculate } from '@/store/calculateResult';

export const CalculatePricing = ({
  activePricingPage,
  dataPricing,
  onScrollToGrid,
  setIsRecommended,
}: any) => {
  const [homeService, setHomeService] = useState(false);
  const [onboarding, setOnboarding] = useState(false);
  const [conciergeService, setConciergeService] = useState(false);
  const [onCalculates, setOnCalculates] = useState(true);
  const [onCheckedYear, setCheckedYear] = useState(false);

  const calculationFormRef = useRef<HTMLDivElement>(null);

  const scrollToCalculationForm = () => {
    if (calculationFormRef.current) {
      calculationFormRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const onCalculate = () => {
    scrollToCalculationForm();
  };

  const onResetCalculation = () => {
    scrollToCalculationForm();
  };

  const titleTypeCalculate =
    activePricingPage === 'business'
      ? dataPricing?.business
      : dataPricing?.professional;
  const {
    assistantOnboard,
    available,
    branch,
    country,
    provideHome,
    setDefaults,
    staff,
  } = useCalculate();


  return (
    <div className="bg-[#828E8E] rounded-[16px] p-0 md:p-8 w-full">
      <div className="p-6 md:p-8 rounded-[16px] bg-white">
        <div className="flex justify-between">
          <div>
            <h2 className="text-[#172524] font-semibold text-[18px] leading-7 ltr:font-montserrat">
              {titleTypeCalculate?.title}
            </h2>
            <p className="ltr:font-montserrat text-[#455150]">
              {titleTypeCalculate?.subtitle}
            </p>
          </div>
          <Button
            onClick={() => {
              setOnCalculates(!onCalculates);
              setIsRecommended((prev: boolean) => !prev);
              if (!onCalculates) setDefaults();
            }}
            className="hidden md:inline-flex ltr:font-montserrat border border-[#2E4342] text-primary hover:text-white font-semibold px-[89px] py-[12px] bg-white hover:bg-primary text-center"
          >
            {onCalculates ? dataPricing?.textCalculate : dataPricing?.textReset}
          </Button>
        </div>
        <Separator
          className="mt-6 bg-[#E8E9E9] -mx-4 w-full"
          style={{ width: 'calc(100% + 32px)' }}
        />
        {onCalculates ? (
          <Calculater
            calculationFormRef={calculationFormRef}
            homeService={homeService}
            setHomeService={setHomeService}
            onboarding={onboarding}
            setOnboarding={setOnboarding}
            conciergeService={conciergeService}
            setConciergeService={setConciergeService}
            titleTypeCalculate={titleTypeCalculate?.calculate}
            overflowText={dataPricing}
          />
        ) : (
          <ResultCalculate
            calculationFormRef={calculationFormRef}
            onCheckedYear={onCheckedYear}
            setCheckedYear={setCheckedYear}
            onScrollToGrid={onScrollToGrid}
            dataPricing={dataPricing}
          />
        )}

        <Separator
          className="my-6 bg-[#E8E9E9] -mx-4 w-full md:hidden"
          style={{ width: 'calc(100% + 32px)' }}
        />
        <Button
          className={cn(
            'inline-flex md:hidden w-full p-6  ltr:font-montserrat border border-[#2E4342]  font-semibold px-[89px] py-[12px] mb-3',
            { hidden: onCalculates },
          )}
        >
          {dataPricing?.textFreeTrial}
        </Button>
        <Button
          onClick={() => {
            if (onCalculates) {
              onCalculate();
            } else {
              onResetCalculation();
            }
            if (!onCalculates) setDefaults();
            setOnCalculates(!onCalculates);
            setIsRecommended((prev: boolean) => !prev);
          }}
          className="inline-flex md:hidden w-full p-6 ltr:font-montserrat border border-[#2E4342] text-primary hover:text-white font-semibold px-[89px] py-[12px] bg-white hover:bg-primary"
        >
          {onCalculates ? dataPricing?.textCalculate : dataPricing?.textReset}
        </Button>
      </div>
    </div>
  );
};
