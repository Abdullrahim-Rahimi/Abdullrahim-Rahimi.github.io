'use client';
import { MessageIcons } from '@/assets/icons/messageIcons/MessageIcons';

export const OurValue = ({ heroAbout }: { heroAbout: any }) => {
  return (
    <div className=" px-6 py-[112px] bg-[#F8F5F3]">
      <div className="flex flex-col mx-auto text-center">
        <h1 className="text-center text-[32px] leading-10 md:text-[40px] md:leading-[50px] md:font-bold">
          Our Values
        </h1>
        <p className="text-center text-[#455150] mt-3 font-montserrat text-base font-normal"></p>
        <div className="md:flex md:px-[40px]">
          <ul className="mt-8 md:w-[70%] md:grid md:grid-cols-2 md:gap-6 space-y-6 md:space-y-0">
            {heroAbout?.aboutValues.map((item: any, index: number) => (
              <li
                key={index}
                className="flex flex-col justify-start items-start text-start border rounded-[12px] px-6 py-8 bg-white"
              >
                <span>
                  <MessageIcons />
                </span>
                <h2 className="mt-6 text-[30px] leading-6">{item.title}</h2>
                <p className="mt-2 text-[#455150] font-montserrat">
                  {item.subtitle}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col mt-6  justify-start md:justify-center md:items-center md:text-center items-start text-start border rounded-[12px] px-6 py-8 bg-white md:w-[30%] md:ml-6 md:mt-[32px]">
            <span>
              <MessageIcons />
            </span>
            <h2 className="mt-6 text-[30px] leading-6">
              {heroAbout?.lastBottomBlock.title}
            </h2>
            <p className="mt-2 text-[#455150] font-montserrat">
              {heroAbout?.lastBottomBlock.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
