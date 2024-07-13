import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { baseURLImage } from '@/helpers/axiosConfig';
import Image from 'next/image';
import { useChangeLanguage } from '@/store/language';

interface DataItem {
  id: number;
  attributes: {
    title: string;
    description: string;
    picture: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  };
}

interface TabsFeaturesProfessionalProps {
  itemsList: any;
  styleLeaf: any;
  bgImage: any;
  title: any;
  description: any;
  dataList: any;
  idFeatures: any;
}

export const TabsFeaturesProfessional: React.FC<
  TabsFeaturesProfessionalProps
> = ({
  itemsList,
  styleLeaf,
  bgImage,
  title,
  description,
  dataList,
  idFeatures,
}) => {
  const [activeTab, setActiveTab] = useState(dataList?.[0]?.attributes.title);

  const { lang } = useChangeLanguage();

  useEffect(() => {
    setActiveTab(dataList?.[0]?.attributes.title);
  }, [lang, dataList]);

  return (
    <>
      {dataList && (
        <div
          className="md:rtl:flex-row-reverse scroll-mt-[120px]"
          id={idFeatures}
        >
          <div className="flex flex-col justify-center items-center text-center ">
            <p className="text-[#F2DAD4] font-semibold uppercase text-[16px] leading-6 text-center">
              {title}
            </p>
            <h2 className="text-white mt-3 font-bold text-[24px] leading-[30px] capitalize">
              {description}
            </h2>
          </div>
          <Tabs
            defaultValue={activeTab}
            value={activeTab}
            onValueChange={(value) => setActiveTab(value)}
            className="flex bg-primary rtl:md:flex-row-reverse"
          >
            <TabsList className="flex flex-col justify-center py-6 ltr:mr-6 rtl:ml-6 ltr:ml-16 rtl:mr-16 bg-primary px-6 h-auto text-wrap">
              <ul className="flex flex-col text-start bg-primary rounded-xl w-[470px]">
                {dataList.map((item: any, index: any) => (
                  <li className="group" key={index}>
                    <TabsTrigger
                      className="!items-start rtl:!items-end !bg-transparent data-[state=active]:border-white data-[state=active]:!bg-white/10 group hover:!bg-white/10 flex flex-col w-full text-[16px] !p-6 text-[#172524] mt-[10px] justify-start rounded-lg cursor-pointer capitalize py-3 border-[1px] border-transparent"
                      value={item.attributes.title}
                    >
                      <span className="w-fit !text-start text-white ltr:font-montserrat rtl:font-cairo font-semibold text-[20px] leading-[30px]">
                        {item.attributes.title}
                      </span>
                      <p className="text-white rtl:font-cairo text-wrap rtl:text-end ltr:text-start">
                        {item.attributes.description}
                      </p>
                    </TabsTrigger>
                  </li>
                ))}
              </ul>
            </TabsList>
            {dataList.map((item: any, index: any) => {
              const imageBlock = new URL(
                item.attributes.picture.data[0].attributes.url,
                baseURLImage,
              ).href;

              return (
                <TabsContent
                  key={index}
                  value={item.attributes.title}
                  className="px-2 py-4 w-full pr-16 rtl:pr-0 rtl:pl-16"
                >
                  <div className="w-full h-[480px] bg-[#435655] rounded-[16px] border border-[#828E8E] relative overflow-hidden my-auto">
                    <Image
                      src={imageBlock}
                      alt=""
                      className="w-[300px] h-[420px] absolute bottom-0 left-[30%] z-20"
                      style={item?.attributes.stylePicture}
                      width={10000}
                      height={1000}
                    />
                    <Image
                      src={bgImage}
                      alt=""
                      className={`${styleLeaf} z-10`}
                    />
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      )}
    </>
  );
};
