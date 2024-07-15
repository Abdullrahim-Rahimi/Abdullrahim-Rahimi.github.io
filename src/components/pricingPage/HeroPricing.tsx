'use client';
import Image from 'next/image';
import stars from '../../assets/images/starsBg.png';
import { cn } from '@/lib/utils';
import { TogglePricing } from './TooglePricing';
import { CalculatePricing } from './CalculatePricing';
import { Dispatch, SetStateAction } from 'react';

export const PricingHero = ({
  description,
  heightScreen,
  styleSection,
  setActivePricingPage,
  onScrollToGrid,
  setIsRecommended,
  activePricingPage,
  dataPricing,
}: {
  description: string;
  heightScreen: boolean;
  styleSection?: string;
  setActivePricingPage: Dispatch<SetStateAction<string>>;
  onScrollToGrid: any;
  setIsRecommended: any;
  activePricingPage: string;
  dataPricing: any;
}) => {
  const toogleName = dataPricing?.toggleBusinessProfessional;

  return (
    <div
      className={cn(
        `  w-full  bg-primary pt-[100px] flex flex-col justify-start items-center px-4 ${styleSection}`,
        { 'h-[95vh]': heightScreen },
      )}
    >
      <Image
        src={stars}
        alt="stars"
        className="mx-auto w-[60px] h-[60px] mt-20"
      />

      <h2 className="text-center capitalize mt-[46px] font-semibold text-[32px] leading-10 text-white md:px-[400px] md:text-[48px] md:leading-[60px]">
        {description}
      </h2>

      <div>
        <TogglePricing
          toogleName={toogleName}
          setCurrentPricing={setActivePricingPage}
          className="mt-[46px]"
        />
      </div>
      <div className=" md:px-16 w-full mt-[47px]" style={{ display: 'none' }}>
        <CalculatePricing
          onScrollToGrid={onScrollToGrid}
          setIsRecommended={setIsRecommended}
          activePricingPage={activePricingPage}
          dataPricing={dataPricing}
        />
      </div>
    </div>
  );
};
