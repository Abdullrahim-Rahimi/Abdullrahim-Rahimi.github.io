'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { PlusIcon } from 'lucide-react';
import { OptionPricing } from '@/assets/icons/optionPricing/optionPricing';
import { OtherOptionPricing } from './OtherOptionPricing';
import { cn } from '@/lib/utils';

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
}: {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  options: string[];
  optionPlus: string;
  chechedAnnualy: boolean;
  priceYear: string;
  activePricingPage: string;
  isRescomennded: boolean;
}) => {
  const [showAll, setShowAll] = useState(false);

  const currentPrice = !chechedAnnualy ? price : priceYear;
  const isRecommended = title === 'Starter' || title === 'Basic';
  return (
    <>
      <li
        className={cn(
          'flex bg-white flex-col justify-center items-center text-center first:mt-0 mt-10 md:mt-0 pt-10 md:pt-10 border rounded-[16px] relative overflow-hidden first-border-[2px] ',
          { 'first:border-[#A67F6B]': isRecommended && isRescomennded },
        )}
      >
        {isRecommended && isRescomennded && (
          <p className="absolute first:block hidden top-0 left-0 right-0 text-center text-[#A67F6B] bg-[#EDE5E1]">
            Recommended
          </p>
        )}
        <div
          className="relative bg-primary -top-[81px]"
          style={{ width: 'calc(100% + 34px)' }}
        >
          <div className=" md:hidden w-full bg-primary h-[441px] -z-10 absolute top-0 "></div>
        </div>

        <div className="flex flex-col justify-center items-center mb-6 px-4">
          <h2 className="font-semibold text-2xl text-[#242424] ">{title}</h2>
          <p className="font-inter w-fit text-[12px] mt-3 leading-3 text-[#2543AD] bg-[#E9ECF7] rounded-[20px] px-[9px] py-[4px] font-medium">
            {subtitle}
          </p>
          <p className="font-montserrat text-[#455150] mt-1 text-center leading-[24px] min-h-[72px]">
            {description}
          </p>
          <div className="bg-[#F8F5F3] rounded-[8px] p-4 w-full mt-4">
            <div className="p-4 rounded-[8px] border flex flex-col justify-center text-center bg-white">
              <h2 className="font-bold text-[#242424] text-[32px] leading-10">
                {currentPrice && currentPrice !== 'Free'
                  ? `$ ${currentPrice}`
                  : 'Free'}
              </h2>
              <p className="font-montserrat text-[#242424] text-[12px] leading-[18px]">
                per month / billed {chechedAnnualy ? 'annualy' : 'monthly'}
                <span
                  className={cn(
                    'bg-[#E9ECF7] text-[#2543AD] rounded-[16px] px-[7px] py-[3px] hidden text-[12px] leading-[12px] font-inter font-medium w-fit ml-1 text-nowrap',
                    {
                      inline:
                        chechedAnnualy && activePricingPage === 'business',
                    },
                  )}
                >
                  17% discount
                </span>
              </p>
              <Button className="font-montserrat font-semibold mt-4 bg-white text-primary hover:text-white hover:bg-primary border border-primary">
                Get Started Now
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
                  <span className="ml-2 font-montserrat font-semibold">
                    Everything in the &quot;{optionPlus}&quot;
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
              className="md:hidden font-montserrat font-semibold py-4 bg-white text-primary rounded-none border-t -mx-4 rounded-b-[16px]"
              onClick={() => setShowAll(true)}
            >
              View all
            </Button>
          )}
          {showAll && (
            <Button
              className="md:hidden font-montserrat font-semibold py-4 bg-white text-primary rounded-none border-t -mx-4 rounded-b-[16px]"
              onClick={() => setShowAll(false)}
            >
              Hide
            </Button>
          )}
        </ul>
      </li>
    </>
  );
};
