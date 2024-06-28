'use client';
import { featuresCustomerList } from '@/lib/constants/features/featuresCustomerList';
import { FeaturesCustomerItem } from './FeaturesCustomer';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export const FeaturesCustomerList = ({
  setScroll,
}: {
  setScroll: Dispatch<SetStateAction<any>>;
}) => {
  const blockRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setScroll(blockRef);
  }, [setScroll]);
  return (
    <ul
      ref={blockRef}
      className="bg-primary md:grid md:grid-cols-3 md:gap-6 md:px-[60px] md:pb-[192px]"
    >
      {featuresCustomerList.map((item, index) => {
        return <FeaturesCustomerItem key={index} item={item} index={index} />;
      })}
    </ul>
  );
};
