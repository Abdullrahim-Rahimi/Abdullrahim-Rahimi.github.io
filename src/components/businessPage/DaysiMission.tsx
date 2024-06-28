'use list';
import { MissionIcon } from '@/assets/icons/missioIcon/MissionIcon';
import axiosInstance from '@/helpers/axiosConfig';

import { useEffect, useState } from 'react';

import { StarsIcons } from '../../assets/icons/starsIcon/StarIcons';
import { StrategyIcons } from '../../assets/icons/strategyIcon/StrategyIcon';

export const DaysiMission = () => {
  const [daisyMissions, setDaisyMission] = useState<any>();

  useEffect(() => {
    (async function getJoinDaisy() {
      try {
        const response = await axiosInstance.get('/daisymissions');
        setDaisyMission(response.data.data?.[0].attributes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className="bg-[#F8F5F3] pt-[80px] pb-[112px] md:px-[64px]">
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center mx-[20px] md:mx-0  text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          {daisyMissions?.title}
        </h1>
        <p className="text-center text-[#455150] mt-3 font-montserrat md:text-base md:font-normal">
          {daisyMissions?.subtitle}
        </p>
      </div>
      <ul className="px-4 mt-12 space-y-6 md:flex rtl:md:gap-6 md:gap-6 md:justify-center md:space-y-0">
        <li className="bg-white rounded-[12px] p-6 border">
          <span className="px-[23px]  py-[18px] rounded-[8px] border inline-block">
            {<MissionIcon />}
          </span>
          <h4 className="font-semibold text-2xl mt-6">
            {daisyMissions?.listDaisyMission[0].title}
          </h4>
          <p className="mt-2 font-montserrat font-normal">
            {daisyMissions?.listDaisyMission[0].description}
          </p>
        </li>
        <li className="bg-white rounded-[12px] p-6 border">
          <span className="px-[23px]  py-[18px] rounded-[8px] border inline-block">
            {<StarsIcons />}
          </span>
          <h4 className="font-semibold text-2xl mt-6">
            {daisyMissions?.listDaisyMission[1].title}
          </h4>
          <p className="mt-2 font-montserrat font-normal">
            {daisyMissions?.listDaisyMission[1].description}
          </p>
        </li>
        <li className="bg-white rounded-[12px] p-6 border">
          <span className="px-[23px]  py-[18px] rounded-[8px] border inline-block">
            {<StrategyIcons />}
          </span>
          <h4 className="font-semibold text-2xl mt-6">
            {daisyMissions?.listDaisyMission[2].title}
          </h4>
          <p className="mt-2 font-montserrat font-normal">
            {daisyMissions?.listDaisyMission[2].description}
          </p>
        </li>
      </ul>
    </div>
  );
};
