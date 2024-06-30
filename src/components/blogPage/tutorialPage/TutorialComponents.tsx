'use client';
import Image from 'next/image';
import ImageTutorialsTop from '../../../assets/images/ImageTutorials.png';
import ImageTutorialsSecond from '../../../assets/images/ImagesecondTutorials.png';
import { useEffect, useState } from 'react';
import axiosInstance from '@/helpers/axiosConfig';

export const TutorialComponents = () => {
  const [dataInfo, setDataInfo] = useState<any>();
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get('tabs-components');
      const [data] = response.data.data;
      setDataInfo(data.attributes);
    })();
  }, []);
  return (
    <div>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary">
        {dataInfo?.title}
      </h2>
      <p className="font-montserrat text-[#455150] mb-4">
        {dataInfo?.tutorialTextDown}
      </p>
      <p className="font-montserrat mb-4 text-[#455150]">
        {dataInfo?.provisions}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary">
        {dataInfo?.secondTitle}
      </h2>
      <ol className="list-decimal px-4 ml-4">
        {dataInfo &&
          dataInfo?.secondoryTheme.map((item: string, index: number) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
      </ol>
      <div className="flex flex-col justify-center">
        <Image
          src={ImageTutorialsTop}
          alt="image block"
          className="h-[205px] w-[343px] mx-auto md:w-full md:h-[400px]"
        />
        <span className="font-montserrat text-[#586968] mx-auto">
          {dataInfo?.branded}
        </span>
      </div>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-8">
        {dataInfo?.titleUserPrivacy}
      </h2>
      <ol className="list-decimal px-4 ml-4 ">
        {dataInfo &&
          dataInfo.userPrivacy.map((item: string, index: number) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
      </ol>
      <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
        {dataInfo &&
          dataInfo.alphaListPrimary.map((item: string, index: number) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
      </ol>
      <div className="flex flex-col justify-center">
        <Image
          src={ImageTutorialsSecond}
          alt="image block"
          className="h-[205px] w-[343px] mx-auto  md:w-full md:h-[400px]"
        />
        <span className="font-montserrat text-[#586968] mx-auto">
          {dataInfo?.spanBranded}
        </span>
      </div>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary mt-8">
        {dataInfo?.titlePersonalyInfo}
      </h2>
      <ol className=" px-4 ml-4  list-decimal">
        {dataInfo &&
          dataInfo.personalyInfoList.map((item: number, index: number) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
      </ol>
      <ol className=" px-4 ml-4 " style={{ listStyle: 'lower-alpha' }}>
        {dataInfo &&
          dataInfo.alphaListMiddle.map((item: string, index: number) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
      </ol>
      <p className="font-montserrat text-[#455150] mb-4">
        {dataInfo?.caseupload}
      </p>
      <p className="font-montserrat mb-4 text-[#455150]">
        {dataInfo?.comunicationText}
      </p>
      <ol className=" px-4 ml-4  list-decimal">
        {dataInfo &&
          dataInfo.unlessList.map((item: string, index: number) => {
            return (
              <li className="font-montserrat text-[#455150] mb-4" key={index}>
                {item}
              </li>
            );
          })}
      </ol>
      <p className="font-montserrat text-[#455150] mb-4">{dataInfo?.appUse}</p>
      <p className="font-montserrat mb-4 text-[#455150]">
        {dataInfo?.willHandle}
      </p>
      <h2 className="capitalize font-bold text-2xl mb-4 text-primary">
        {dataInfo?.titleUnless}
      </h2>
      <p className="font-montserrat text-[#455150] mb-4">
        {dataInfo?.unlessPersonal}
      </p>
    </div>
  );
};
