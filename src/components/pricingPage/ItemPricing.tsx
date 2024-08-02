'use client';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { PlusIcon } from 'lucide-react';
import { OptionPricing } from '@/assets/icons/optionPricing/optionPricing';
import { OtherOptionPricing } from './OtherOptionPricing';
import { cn } from '@/lib/utils';
import { useCalculate } from '@/store/calculateResult';
import { useCurrentPlan } from '@/store/storeCurrentPlan';

export const ItemCardPricing = ({
  title,
  subtitle,
  description,
  price,
  options,
  optionPlus,
  chechedAnnualy,
  priceYear,
  activePricingPage,
  isRescomennded,
  textRecomended,
  titlePricing,
  currentPrices,
  refGridCardRef,
}: {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  options: any;
  optionPlus: string;
  chechedAnnualy: boolean;
  priceYear: string;
  activePricingPage: string;
  isRescomennded: boolean;
  textRecomended: any;
  titlePricing: string[];
  currentPrices: string[];
  refGridCardRef: any;
}) => {
  const [showAll, setShowAll] = useState(false);
  const [currentPlanBus, setCurrentPlanBus] = useState('');
  const [currentPlanProf, setCurrentPlanProf] = useState('');
  const { changePlan, setPricing } = useCurrentPlan();
  const { staff, branch } = useCalculate();
  const currentPrice = !chechedAnnualy ? price : priceYear;
  const isRecommended = title === currentPlanBus;
  const defaulText = textRecomended?.textItemPricing;
  useEffect(() => {
    if (staff <= 3 || branch <= 1) {
      setCurrentPlanBus(titlePricing[0]);
      changePlan(titlePricing[0]);
      setPricing(currentPrices[0]);
      setCurrentPlanProf('Starter');
    }
    if ((staff > 3 && staff <= 8) || (branch > 1 && branch < 3)) {
      setCurrentPlanBus(titlePricing[1]);
      changePlan(titlePricing[1]);
      setPricing(currentPrices[1]);

      setCurrentPlanProf('Professional');
    }
    if (staff > 8 || branch > 5) {
      setCurrentPlanBus(titlePricing[2]);
      changePlan(titlePricing[2]);
      setPricing(currentPrices[2]);

      setCurrentPlanProf('Elite');
    }
  }, [staff, branch]);
  return (
    <>
      <li
        // ref={isRecommended && isRescomennded ? refGridCardRef : null}
        className={cn(
          'flex bg-white flex-col justify-center items-center text-center first:mt-0 mt-10 md:mt-0 pt-10 md:pt-10 border rounded-[16px] relative overflow-hidden first-border-[2px] ',
          {
            'first:border-[#A67F6B] scroll-mt-[1000px]':
              isRecommended && isRescomennded,
          },
        )}
      >
        {isRecommended && isRescomennded && (
          <p
            className="absolute first:block hidden top-0 left-0 right-0 text-center text-[#A67F6B] bg-[#EDE5E1] "
            ref={refGridCardRef}
          >
            {textRecomended?.textRecomended}
          </p>
        )}
        <div
          className="relative bg-primary -top-[81px]"
          style={{ width: 'calc(100% + 34px)' }}
        >
          <div className=" md:hidden w-full bg-primary h-[441px] -z-10 absolute top-0 "></div>
        </div>

        <div className="flex flex-col justify-center items-center mb-6 px-4">
          <h2 className="font-semibold text-2xl text-[#242424]">{title}</h2>
          <p className="ltr:font-inter w-fit text-[12px] mt-3 leading-3 text-[#2543AD] bg-[#E9ECF7] rounded-[20px] px-[9px] py-[4px] font-medium">
            {subtitle}
          </p>
          <p className="ltr:font-montserrat text-[#455150] mt-1 text-center leadin-6 min-h-[6rem] ">
            {description}
          </p>
          <div className="bg-[#F8F5F3] rounded-[8px] p-4 w-full mt-4">
            <div className="p-4 rounded-[8px] border flex flex-col justify-center text-center bg-white">
              <h2 className="font-bold text-[#242424] text-[32px] leading-10">
                {currentPrice && currentPrice !== 'Free'
                  ? ` ${currentPrice}`
                  : 'Free'}
              </h2>
              <p className="ltr:font-montserrat text-[#242424] text-[12px] leading-[18px]">
                {defaulText?.perPeriod}
                {chechedAnnualy ? defaulText?.annualy : defaulText?.monthly}
                <span
                  className={cn(
                    'bg-[#E9ECF7] text-[#2543AD] rounded-[16px] px-[7px] py-[3px] hidden text-[12px] leading-[12px] ltr:font-inter font-medium w-fit ml-1 text-nowrap',
                    {
                      inline: chechedAnnualy,
                    },
                  )}
                >
                  {defaulText?.discount}
                </span>
              </p>
              <Button className="ltr:font-montserrat font-semibold mt-4 bg-white text-primary hover:text-white hover:bg-primary border border-primary ">
                {defaulText?.textStarted}
              </Button>
            </div>
          </div>
        </div>
        <ul className="flex flex-col bg-[#F8F5F3] pt-10 md:py-10 space-y-4 w-full px-4 -mx-6 rounded-b-[16px]">
          {optionPlus !== '' && (
            <>
              <div className="flex justify-center items-center py-3 border bg-white rounded-[8px]">
                <div className="flex justify-center items-center">
                  <OptionPricing />
                  <span className="ltr:ml-2 rtl:mr-2 ltr:font-montserrat font-semibold">
                    {defaulText?.everything} &quot;{optionPlus}&quot;
                  </span>
                </div>
              </div>
              <span className="flex justify-center mx-auto p-[18px] rounded-full bg-white w-fit border">
                <PlusIcon />
              </span>
            </>
          )}
          <OtherOptionPricing showAll={showAll} options={options} />

          {!showAll && options.length > 5 && (
            <Button
              className="md:hidden ltr:font-montserrat font-semibold py-4 bg-white text-primary rounded-none border-t -mx-4 rounded-b-[16px]"
              onClick={() => setShowAll(true)}
            >
              {defaulText?.mobileView}
            </Button>
          )}
          {showAll && (
            <Button
              className="md:hidden ltr:font-montserrat font-semibold py-4 bg-white text-primary rounded-none border-t -mx-4 rounded-b-[16px]"
              onClick={() => setShowAll(false)}
            >
              {defaulText?.mobileHide}
            </Button>
          )}
        </ul>
      </li>
    </>
  );
};
