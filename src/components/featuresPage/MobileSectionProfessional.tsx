import { CarouselBusinessMobile } from './CarouselBusinessMobile';
import { Separator } from '@/components/ui/separator';
import { FeatureProfessionalList } from './FeatureProfessionalList';
import {
  listManegamentFeatures,
  listMarketingFeatures,
  listPerfomanceFeatures,
} from '@/lib/constants/features/featuresProfessionalList';

export const MobileViewProfessional = () => {
  return (
    <div className="md:hidden">
      <CarouselBusinessMobile />
      <Separator className="bg-[#586968] my-20" />
      <FeatureProfessionalList
        title="Marketing tools  to attract new & retain current customers"
        desription="marketing"
        item={listMarketingFeatures}
      />
      <FeatureProfessionalList
        title="Collect Payments, sync Calendars and automate daily processes"
        desription="management"
        item={listManegamentFeatures}
      />
      <FeatureProfessionalList
        title="performance reports and business Analytics to help you grow!"
        desription="performance"
        item={listPerfomanceFeatures}
      />
    </div>
  );
};
