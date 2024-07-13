import Image from 'next/image';
import { Separator } from '../ui/separator';
import { TabsFeaturesProfessional } from './TabsFeturesPagw';
import imageLeaf from '../../assets/images/features/business/LeafBusinessFeature.png';
import imageLeafRight from '../../assets/images/features/business/LeafBusinessRight.png';
import imageLeafLast from '../../assets/images/features/business/LeafBusinessBottom.png';

import {
  listManegamentFeatures,
  listMarketingFeatures,
  listPerfomanceFeatures,
} from '@/lib/constants/features/featuresProfessionalList';
import { ColumnTabsDesctop } from './ColumnTabsDesctop';
import { baseURLImage } from '@/helpers/axiosConfig';

export const DesctopViewProfessional = ({
  dataBusiness,
  dataListManagm,
  dataListPayment,
  dataListReports,
}: {
  dataBusiness: any;
  dataListManagm: any;
  dataListPayment: any;
  dataListReports: any;
}) => {
  const firstImage = new URL(
    dataBusiness?.firstImage.data[0].attributes.url,
    baseURLImage,
  ).href;
  const secondImage = new URL(
    dataBusiness?.secondImage.data[0].attributes.url,
    baseURLImage,
  ).href;
  const thirdImage = new URL(
    dataBusiness?.thirdImage.data[0].attributes.url,
    baseURLImage,
  ).href;

  return (
    <div className="mx-auto hidden md:block mb-[192px]">
      <ul className="flex space-x-5 rtl:space-x-reverse mx-auto justify-center mt-[66px] ">
        <li className="px-[65px] pt-[55px] bg-[#435655] rounded-[16px] border border-[#586968]">
          <Image
            src={firstImage}
            className={'w-[220px] h-[320px]'}
            style={dataBusiness?.firstImageStyle}
            alt="item"
            width={1000}
            height={1000}
          />
        </li>
        <li className="px-[65px] pt-[55px] bg-[#435655] rounded-[16px] border border-[#586968]">
          <Image
            src={secondImage}
            className={'w-[220px] h-[320px]'}
            style={dataBusiness?.secondImageStyle}
            alt="item"
            width={1000}
            height={1000}
          />
        </li>
        <li className="px-[65px] pt-[55px] bg-[#435655] rounded-[16px] border border-[#586968]">
          <Image
            src={thirdImage}
            className={'w-[220px] h-[320px]'}
            style={dataBusiness?.thirdImageStyle}
            alt="item"
            width={1000}
            height={1000}
          />
        </li>
      </ul>
      <div className="px-20">
        <Separator className="my-[164px] bg-[#586968]" />
      </div>
      <TabsFeaturesProfessional
        idFeatures={dataBusiness?.listBusinessOptions[0]?.path}
        title={dataBusiness?.marketingTools.title}
        description={dataBusiness?.marketingTools.description}
        bgImage={imageLeaf}
        styleLeaf="absolute bottom-0 left-0 w-[500px]"
        itemsList={listMarketingFeatures}
        dataList={dataListManagm}
      />
      <div className="px-20">
        <Separator className="my-[164px] bg-[#586968]" />
      </div>
      <TabsFeaturesProfessional
        idFeatures={dataBusiness?.listBusinessOptions[1]?.path}
        dataList={dataListPayment}
        title={dataBusiness?.collectPayments.title}
        description={dataBusiness?.collectPayments.description}
        bgImage={imageLeafRight}
        styleLeaf="absolute bottom-0 right-0 w-[500px]"
        itemsList={listManegamentFeatures}
      />
      <div className="px-20">
        <Separator className="my-[164px] bg-[#586968]" />
      </div>
      <ColumnTabsDesctop
        idFeatures={dataBusiness?.listBusinessOptions[2]?.path}
        title={dataBusiness?.performanceReports.title}
        description={dataBusiness?.performanceReports.description}
        bgImage={imageLeafLast}
        styleLeaf="absolute top-0 left-0 h-[300px] w-[200px]"
        itemsList={listPerfomanceFeatures}
        dataList={dataListReports}
      />
    </div>
  );
};
