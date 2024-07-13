import { ItemCardPricing } from './ItemPricing';

export const GridPricingCard = ({
  listChangePricing,
  chechedAnnualy,
  activePricingPage,
  isRescomennded,
  dataPricing = [],
}: {
  listChangePricing?: any;
  chechedAnnualy: boolean;
  activePricingPage: string;
  isRescomennded: boolean;
  dataPricing: any;
}) => {
  return (
    <>
      <div className="w-full bg-primary h-[420px] md:block hidden"></div>
      <ul className="flex flex-col md:grid md:grid-cols-[repeat(3,1fr)] gap-[25px] mt-8 md:mt-0  -translate-y-0 md:-translate-y-[401px] items-start  pb-[114px] px-4 md:px-16 md:-mb-[419px] ">
        {dataPricing &&
          dataPricing.map((item: any, index: number) => {
            return (
              <ItemCardPricing
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
              />
            );
          })}
      </ul>
    </>
  );
};
