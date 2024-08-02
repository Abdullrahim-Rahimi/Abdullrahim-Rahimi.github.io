'use client';
import { useEffect, useState } from 'react';
import { ItemCardPricing } from './ItemPricing';
interface PricingData {
  title: string;
  description: string;
  price: string;
  subTitle: string;
  options: string[];
  optionPlus?: string;
  priceYear?: string;
}

interface GridPricingCardProps {
  listChangePricing?: string[];
  chechedAnnualy: boolean;
  activePricingPage: string;
  isRescomennded: boolean;
  dataPricing: PricingData[];
  refGridCardRef: any;
}

export const GridPricingCard = ({
  listChangePricing,
  chechedAnnualy,
  activePricingPage,
  isRescomennded,
  dataPricing = [],
  refGridCardRef,
}: GridPricingCardProps) => {
  const [titlePricing, setTitlePricing] = useState<string[]>([]);
  const [price, setPrice] = useState<string[]>([]);

  useEffect(() => {
    if (dataPricing.length > 0) {
      setTitlePricing(dataPricing.map((item) => item.title));
      setPrice(dataPricing.map((item) => item.price));
    }
  }, [dataPricing]);

  return (
    <>
      <div className="w-full bg-primary h-[420px] md:block hidden"></div>
      <ul className="flex flex-col md:grid md:grid-cols-[repeat(3,1fr)] gap-[25px] mt-8 md:mt-0  -translate-y-0 md:-translate-y-[401px] items-start  pb-[114px] px-4 md:px-16 md:-mb-[419px] ">
        {dataPricing &&
          dataPricing.map((item: any, index: number) => {
            return (
              <ItemCardPricing
                refGridCardRef={refGridCardRef}
                activePricingPage={activePricingPage}
                chechedAnnualy={chechedAnnualy}
                key={index}
                description={item.description}
                price={item.price}
                subtitle={item.subTitle}
                title={item.title}
                options={item.options}
                optionPlus={item.optionPlus}
                priceYear={item.priceYear}
                textRecomended={listChangePricing}
                isRescomennded={isRescomennded}
                titlePricing={titlePricing}
                currentPrices={price}
              />
            );
          })}
      </ul>
    </>
  );
};
