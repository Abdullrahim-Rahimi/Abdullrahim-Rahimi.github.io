'use client';
import { featuresCustomerList } from '@/lib/constants/features/featuresCustomerList';
import { FeaturesCustomerItem } from './FeaturesCustomer';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export const FeaturesCustomerList = ({
  setScroll,
  dataListBlog,
}: {
  setScroll: Dispatch<SetStateAction<any>>;
  dataListBlog: any;
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
      {dataListBlog &&
        dataListBlog.map((item: any, index: number) => {
          return (
            <FeaturesCustomerItem
              key={index}
              item={item.attributes}
              index={index}
            />
          );
        })}
    </ul>
  );
};
