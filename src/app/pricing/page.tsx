'use client';
import { EnterPrise } from '@/components/pricingPage/EnterpriseSection';
import { GridPricingCard } from '@/components/pricingPage/GridPricingCard';
import { PricingHero } from '@/components/pricingPage/HeroPricing';
import Separator from '@/components/separator/Separator';
import { Switch } from '@/components/ui/switch';
import axiosInstance from '@/helpers/axiosConfig';
import { cn } from '@/lib/utils';
import { useChangePage } from '@/store/currentPage';
import { useChangeLanguage } from '@/store/language';
import { useEffect, useRef, useState } from 'react';

const Pricing = () => {
  const [activePricingPage, setActivePricingPage] = useState('');
  const [checkedMonth, setCheckedMonth] = useState(true);
  const [isRescomennded, setIsRecommended] = useState(false);
  const [dataPricing, setDataPricing] = useState<any>();
  const { lang } = useChangeLanguage();
  const { page } = useChangePage();

  useEffect(() => {
    if (page.includes('business')) {
      setActivePricingPage('business');
    }
    if (page.includes('customer')) {
      setActivePricingPage('business');
    }
    if (page.includes('professional')) {
      setActivePricingPage('professional');
    }
  }, [page]);

  const currentPricing =
    activePricingPage === 'professional'
      ? dataPricing?.business.pricingCard
      : dataPricing?.professional.pricingCard;
  const gridCardRef = useRef<HTMLDivElement>(null);

  const handleScrollToGrid = () => {
    if (gridCardRef.current) {
      gridCardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(`/pricings?locale=${lang}`);
        setDataPricing(response?.data?.data[0]?.attributes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [lang]);

  const pay = dataPricing?.switchAnnually;

  return (
    <div className="bg-[#F8F5F3] pb-[180px]" style={{ display: 'none' }}>
      <PricingHero
        setActivePricingPage={setActivePricingPage}
        description={dataPricing?.title}
        heightScreen={false}
        styleSection="pb-[100px]"
        onScrollToGrid={handleScrollToGrid}
        setIsRecommended={setIsRecommended}
        activePricingPage={activePricingPage}
        dataPricing={dataPricing}
      />
      <div className="px-4 md:px-20 bg-primary">
        <Separator />
      </div>
      <div className="w-full bg-primary py-[44px]">
        <div className="flex mx-auto w-fit bg-primary ">
          <p
            className={cn(
              'font-normal text-[18px] leading-6 text-[#F8F5F3] text-right',
              {
                'text-[#F8F5F3]/60': checkedMonth,
              },
            )}
          >
            {pay?.monthly}
          </p>
          <Switch
            defaultChecked={checkedMonth}
            className="mx-4 data-[state=checked]:bg-[#A67F6B] my-auto bg-[#aab4b3]"
            onCheckedChange={() => setCheckedMonth(!checkedMonth)}
          />
          <p
            className={cn('font-normal text-[18px] leading-6 text-[#F8F5F3]', {
              'text-[#F8F5F3]/60': !checkedMonth,
            })}
          >
            {pay?.annually}
          </p>
        </div>
      </div>
      <div ref={gridCardRef} className="md:scroll-mt-[100px] scroll-mt-[120px]">
        <GridPricingCard
          isRescomennded={isRescomennded}
          activePricingPage={activePricingPage}
          chechedAnnualy={checkedMonth}
          dataPricing={currentPricing}
          listChangePricing={dataPricing}
        />
      </div>
      {activePricingPage === 'business' && (
        <EnterPrise data={dataPricing?.enterprise} />
      )}
    </div>
  );
};
export default Pricing;
