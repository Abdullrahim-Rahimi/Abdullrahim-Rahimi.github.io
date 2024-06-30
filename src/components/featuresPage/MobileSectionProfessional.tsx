import { CarouselBusinessMobile } from './CarouselBusinessMobile';
import { Separator } from '@/components/ui/separator';
import { FeatureProfessionalList } from './FeatureProfessionalList';

export const MobileViewProfessional = ({
  dataFeatures,
  dataListManagm,
  dataListPayment,
  dataListReports,
}: {
  dataFeatures: any;
  dataListManagm: any;
  dataListPayment: any;
  dataListReports: any;
}) => {
  return (
    <div className="md:hidden">
      <CarouselBusinessMobile dataBusiness={dataFeatures} />
      <Separator className="bg-[#586968] my-20" />
      <FeatureProfessionalList
        title={dataFeatures?.marketingTools.title}
        desription={dataFeatures?.marketingTools.description}
        dataList={dataListManagm}
      />
      <FeatureProfessionalList
        title={dataFeatures?.collectPayments.title}
        desription={dataFeatures?.collectPayments.description}
        dataList={dataListPayment}
      />
      <FeatureProfessionalList
        title={dataFeatures?.performanceReports.title}
        desription={dataFeatures?.performanceReports.description}
        dataList={dataListReports}
      />
    </div>
  );
};
