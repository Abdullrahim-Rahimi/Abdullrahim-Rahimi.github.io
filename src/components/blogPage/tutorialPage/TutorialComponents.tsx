'use client';
import { useEffect, useState } from 'react';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { useChooseTabs } from '@/store/chooseTabs';

export const TutorialComponents = ({ tabsList }: { tabsList: any }) => {
  const [dataInfo, setDataInfo] = useState<any>();

  const { lang } = useChangeLanguage();
  const { tabsTitle } = useChooseTabs();
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        `/tabs-components?locale=${lang}`,
      );
      const [data] = response?.data?.data;
      setDataInfo(data?.attributes);
    })();
  }, [lang]);
  const currentItem = tabsList?.filter(
    (item: any) => item.attributes.titleListTab === tabsTitle,
  );

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: currentItem?.[0]?.attributes?.fieldInfoTabs,
      }}
    />
    // <div>
    //   <h2 className="capitalize font-bold text-2xl mb-4 text-primary">
    //     {dataInfo?.title}
    //   </h2>
    //   <p className="ltr:font-montserrat text-[#455150] mb-4">
    //     {dataInfo?.tutorialTextDown}
    //   </p>
    //   <p className="ltr:font-montserrat mb-4 text-[#455150]">
    //     {dataInfo?.provisions}
    //   </p>
    //   <h2 className="capitalize font-bold text-2xl mb-4 text-primary">
    //     {dataInfo?.secondTitle}
    //   </h2>
    //   <ol className="list-decimal px-4 ml-4">
    //     {dataInfo &&
    //       dataInfo?.secondoryTheme.map((item: string, index: number) => {
    //         return (
    //           <li
    //             className="ltr:font-montserrat text-[#455150] mb-4"
    //             key={index}
    //           >
    //             {item}
    //           </li>
    //         );
    //       })}
    //   </ol>
    //   <div className="flex flex-col justify-center">
    //     <Image
    //       src={ImageTutorialsTop}
    //       alt="image block"
    //       className="h-[205px] w-[343px] mx-auto md:w-full md:h-[400px]"
    //     />
    //     <span className="ltr:font-montserrat text-[#586968] mx-auto">
    //       {dataInfo?.branded}
    //     </span>
    //   </div>
    //   <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-8">
    //     {dataInfo?.titleUserPrivacy}
    //   </h2>
    //   <ol className="list-decimal px-4 ml-4 ">
    //     {dataInfo &&
    //       dataInfo.userPrivacy.map((item: string, index: number) => {
    //         return (
    //           <li
    //             className="ltr:font-montserrat text-[#455150] mb-4"
    //             key={index}
    //           >
    //             {item}
    //           </li>
    //         );
    //       })}
    //   </ol>
    //   <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
    //     {dataInfo &&
    //       dataInfo.alphaListPrimary.map((item: string, index: number) => {
    //         return (
    //           <li
    //             className="ltr:font-montserrat text-[#455150] mb-4"
    //             key={index}
    //           >
    //             {item}
    //           </li>
    //         );
    //       })}
    //   </ol>
    //   <div className="flex flex-col justify-center">
    //     <Image
    //       src={ImageTutorialsSecond}
    //       alt="image block"
    //       className="h-[205px] w-[343px] mx-auto  md:w-full md:h-[400px]"
    //     />
    //     <span className="ltr:font-montserrat text-[#586968] mx-auto">
    //       {dataInfo?.spanBranded}
    //     </span>
    //   </div>
    //   <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-8">
    //     {dataInfo?.titlePersonalyInfo}
    //   </h2>
    //   <ol className=" px-4 ml-4  list-decimal">
    //     {dataInfo &&
    //       dataInfo.personalyInfoList.map((item: number, index: number) => {
    //         return (
    //           <li
    //             className="ltr:font-montserrat text-[#455150] mb-4"
    //             key={index}
    //           >
    //             {item}
    //           </li>
    //         );
    //       })}
    //   </ol>
    //   <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
    //     {dataInfo &&
    //       dataInfo.alphaListMiddle.map((item: string, index: number) => {
    //         return (
    //           <li
    //             className="ltr:font-montserrat text-[#455150] mb-4"
    //             key={index}
    //           >
    //             {item}
    //           </li>
    //         );
    //       })}
    //   </ol>
    //   <p className="ltr:font-montserrat text-[#455150] mb-4">
    //     {dataInfo?.caseupload}
    //   </p>
    //   <p className="ltr:font-montserrat mb-4 text-[#455150]">
    //     {dataInfo?.comunicationText}
    //   </p>
    //   <ol className=" px-4 ml-4  list-decimal">
    //     {dataInfo &&
    //       dataInfo.unlessList.map((item: string, index: number) => {
    //         return (
    //           <li
    //             className="ltr:font-montserrat text-[#455150] mb-4"
    //             key={index}
    //           >
    //             {item}
    //           </li>
    //         );
    //       })}
    //   </ol>
    //   <p className="ltr:font-montserrat text-[#455150] mb-4">
    //     {dataInfo?.appUse}
    //   </p>
    //   <p className="ltr:font-montserrat mb-4 text-[#455150]">
    //     {dataInfo?.willHandle}
    //   </p>
    //   <h2 className="capitalize font-bold text-2xl mb-4 text-primary">
    //     {dataInfo?.titleUnless}
    //   </h2>
    //   <p className="ltr:font-montserrat text-[#455150] mb-4">
    //     {dataInfo?.unlessPersonal}
    //   </p>
    // </div>
  );
};
