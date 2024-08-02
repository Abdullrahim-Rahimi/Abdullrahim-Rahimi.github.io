'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Separator from '../separator/Separator';
import { Button } from '../ui/button';
import { tutorialsList } from '@/lib/constants/tutorialsList';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useChangeLanguage } from '@/store/language';

export const TabsTutorials = ({
  dataTabs,
  listDataTabs,
  infoTutorials,
}: {
  dataTabs: any;
  listDataTabs: any;
  infoTutorials: any;
}) => {
  const router = useRouter();
  const { lang } = useChangeLanguage();
  const [defaultValue, setDefaultValue] = useState<string>('');
  useEffect(() => {
    if (listDataTabs && listDataTabs.length > 0) {
      setDefaultValue(listDataTabs[0].attributes.titleListTab);
    }
  }, [listDataTabs, lang]);

  if (!defaultValue) {
    return null;
  }
  return (
    <Tabs
      value={defaultValue}
      onValueChange={setDefaultValue}
      className="flex bg-[#F8F5F3] rtl:flex-row-reverse"
    >
      <TabsList className="flex flex-col py-6  mr-6 ml-16 bg-white px-6 h-fit">
        <p className=" font-semibold text-base text-[#A67F6B] pt-6 uppercase w-full ">
          {infoTutorials?.title}
        </p>
        <ul className=" flex flex-col text-start bg-white pb-6 rounded-xl  w-[310px]">
          {dataTabs &&
            listDataTabs.map((item: any, index: number) => {
              return (
                <TabsTrigger
                  key={index}
                  className="hover:bg-[#E8E9E9] w-full text-[16px] text-[#172524] mt-[10px] text-start justify-start rounded-lg cursor-pointer capitalize whitespace-nowrap py-3 hover:font-semibold "
                  value={item?.attributes.titleListTab}
                >
                  <span className="w-fit">{item?.attributes.titleListTab}</span>
                </TabsTrigger>
              );
            })}
        </ul>
        <Separator className="bg-[#E8E9E9] mt-4" />
        <Button
          type="button"
          onClick={() => router.push('/contact')}
          className="hover:bg-white text-primary rtl:font-cairo border border-primary w-full px-4 rounded-lg text-base mt-6 bg-primary ltr:font-montserrat font-semibold text-white hover:text-primary md:py-4 md:h-auto"
        >
          {infoTutorials?.gotAQ}
        </Button>
      </TabsList>
      {listDataTabs &&
        listDataTabs.map((item: any, index: number) => {
          return (
            <TabsContent
              key={index}
              value={item.attributes.titleListTab}
              defaultValue={defaultValue}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: item?.attributes.fieldInfoTabs,
                }}
              />
            </TabsContent>
          );
        })}
    </Tabs>
  );
};
{
}
