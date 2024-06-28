'use client';
import { Constants } from '@/helpers/oldApi';
import { QAAccordion } from '../qaAccordion/QAAccordion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

enum PageType {
  Customer = 'Customer',
  Business = 'Business',
}

interface FAQ {
  id: number;
  type: string;
  question: string;
  answer: string;
}
interface GetFAQResponse {
  status: boolean;
  message: string;
  error: any[];
  data: FAQ[];
}

export const QASection = ({
  pageType = 'Customer',
  styles,
  stylesAcoordion,
  stylesAccordionItem,
  titleHidden,
  blockTop,
  sectionFQ,
}: {
  pageType: any;
  styles?: string;
  stylesAcoordion?: string;
  stylesAccordionItem?: string;
  titleHidden?: boolean;
  blockTop?: string;
  sectionFQ?: boolean;
}) => {
  const [qaList, setQAlist] = useState<any>();
  useEffect(() => {
    (async () => {
      const data = await getData('en', pageType);
      setQAlist(data);
    })();
  }, [pageType]);

  return (
    <div className={`bg-[#F8F5F3] px-4 pb-28 md:pt-[200px] ${styles}`}>
      <h1
        className={cn(
          'text-primary font-bold text-center text-[32px] leading-[40px] pt-[112px] md:text-[40px] md:leading-[50px] md:font-bold',
          { hidden: titleHidden },
        )}
      >
        Frequently Asked Question
      </h1>
      <div className={`md:mt-12 md:px-[288px] ${blockTop}`}>
        {qaList?.map((item: any, index: number) => {
          return (
            <QAAccordion
              key={index}
              value={index}
              item={item}
              stylesAcoordion={stylesAcoordion}
              stylesAccordionItem={stylesAccordionItem}
              sectionFQ={sectionFQ}
            />
          );
        })}
      </div>
    </div>
  );
};

const getData = async (locale: string, pageType: PageType) => {
  try {
    const res =
      pageType == PageType.Business
        ? await fetch(`${Constants.BASE_URL}account/faq/vendor/list`, {
            cache: 'no-store',
            headers: { 'Content-Language': locale },
          })
        : await fetch(`${Constants.BASE_URL}account/faq/user/list`, {
            cache: 'no-store',
            headers: { 'Content-Language': locale },
          });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const responseData: GetFAQResponse = await res.json();

    if (!responseData.status) throw new Error('No data found');

    return responseData.data;
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
    // You can return a default value or throw the error to handle it in the component
    return null;
  }
};
