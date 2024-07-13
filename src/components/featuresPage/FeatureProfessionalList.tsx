import Image from 'next/image';
import { Separator } from '../ui/separator';
import leaf from '../../assets/images/features/professional/Group.png';
import { baseURLImage } from '@/helpers/axiosConfig';

export const FeatureProfessionalList = ({
  title,
  desription,
  dataList,
}: {
  title: string;
  desription: string;
  dataList: any;
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center ">
      <p className="text-[#F2DAD4] font-semibold uppercase text-[16px] leading-6 text-center">
        {title}
      </p>
      <h2 className="text-white mt-3 font-bold text-[24px] leading-[30px] capitalize">
        {desription}
      </h2>
      <ul className="mt-[48px] mx-auto">
        {dataList &&
          dataList.map((item: any, index: number) => {
            const imageBlock = new URL(
              item.attributes.picture.data[0].attributes.formats.small.url,
              baseURLImage,
            ).href;

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
                    src={imageBlock}
                    alt="item"
                    width={200}
                    height={200}
                    className={`mx-auto px-[10px] pt-10 h-[320px] w-[${item.attributes.picture.data[0].attributes.formats.small.width}px] absolute bottom-0 left-1/2 transform -translate-x-1/2`}
                  />
                </div>
                <h3 className="mt-6 ltr:font-montserrat font-semibold text-[20px] leading-[30px] text-white">
                  {item.attributes.title}
                </h3>
                <p className="mt-1 text-[#D5D9D9]">
                  {item.attributes.description}
                </p>
                <Separator className="my-20 bg-[#586968]" />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
