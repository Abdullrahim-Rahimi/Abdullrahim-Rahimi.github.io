import { listImageBusinessDesctop } from '@/lib/constants/features/listBusinessOptions';
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

export const DesctopViewProfessional = () => {
  return (
    <div className="mx-auto hidden md:block mb-[192px]">
      <ul className="flex space-x-5 mx-auto justify-center mt-[66px]">
        {listImageBusinessDesctop.map((item, index) => {
          return (
            <li
              key={index}
              className="px-[65px] pt-[55px] bg-[#435655] rounded-[16px] border border-[#586968]"
            >
              <Image src={item.src} className={item.style} alt="item" />
            </li>
          );
        })}
      </ul>
      <div className="px-20">
        <Separator className="my-[164px] bg-[#586968]" />
      </div>
      <TabsFeaturesProfessional
        title="marketing"
        description="Marketing tools  to attract new & retain current customers"
        bgImage={imageLeaf}
        styleLeaf="absolute bottom-0 left-0 w-[500px]"
        itemsList={listMarketingFeatures}
      />
      <div className="px-20">
        <Separator className="my-[164px] bg-[#586968]" />
      </div>
      <TabsFeaturesProfessional
        title="marketing"
        description="Collect Payments, sync Calendars and automate daily processes"
        bgImage={imageLeafRight}
        styleLeaf="absolute bottom-0 right-0 w-[500px]"
        itemsList={listManegamentFeatures}
      />
      <div className="px-20">
        <Separator className="my-[164px] bg-[#586968]" />
      </div>
      <ColumnTabsDesctop
        title="performance"
        description="performance reports and business Analytics to help you grow!"
        bgImage={imageLeafLast}
        styleLeaf="absolute top-0 left-0 h-[300px] w-[200px]"
        itemsList={listPerfomanceFeatures}
      />
    </div>
  );
};
