import Image from 'next/image';
import { Separator } from '../ui/separator';
import leaf from '../../assets/images/features/professional/Group.png';

export const FeatureProfessionalList = ({
  title,
  desription,
  item,
}: {
  title: string;
  desription: string;
  item: any;
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center ">
      <p className="text-[#F2DAD4] font-semibold uppercase text-[16px] leading-6 text-center">
        {desription}
      </p>
      <h2 className="text-white mt-3 font-bold text-[24px] leading-[30px] capitalize">
        {title}
      </h2>
      <ul className="mt-[48px] mx-auto">
        {item.map((item: any, index: number) => {
          return (
            <li key={index} className="text-start mx-auto ">
              <div className="bg-[#586968]  h-[320px] relative rounded-[9px] overflow-hidden ">
                <Image
                  src={leaf}
                  alt=""
                  className="absolute bottom-0 left-0 -z-1"
                  width={150}
                  height={240}
                />
                <Image
                  src={item.image}
                  alt="item"
                  width={200}
                  height={200}
                  className="mx-auto pt-10"
                />
              </div>
              <h3 className="mt-6 font-montserrat font-semibold text-[20px] leading-[30px] text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-[#D5D9D9]">{item.desription}</p>
              <Separator className="my-20 bg-[#586968]" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
