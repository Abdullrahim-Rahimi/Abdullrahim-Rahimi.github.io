import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Separator from '../separator/Separator';
import Image from 'next/image';

export const TabsFeaturesProfessional = ({
  itemsList,
  styleLeaf,
  bgImage,
  title,
  description,
}: {
  itemsList: any;
  styleLeaf: string;
  bgImage: any;
  title: string;
  description: string;
}) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-[#F2DAD4] font-semibold uppercase text-[16px] leading-6 text-center">
          {title}
        </p>
        <h2 className="text-white mt-3 font-bold text-[24px] leading-[30px] capitalize">
          {description}
        </h2>
      </div>
      <Tabs defaultValue={itemsList[0].title} className="flex bg-primary ">
        <TabsList className="flex flex-col justify-center py-6  mr-6 ml-16 bg-primary px-6 h-auto">
          <ul className=" flex flex-col text-start bg-primary  rounded-xl ">
            {itemsList.map((item: any, index: number) => {
              return (
                <li className="group" key={index}>
                  <TabsTrigger
                    key={index}
                    className="!items-start !bg-transparent data-[state=active]:!border data-[state=active]:!bg-white/10 group hover:!bg-white/10 flex flex-col w-full text-[16px] !p-6 text-[#172524] mt-[10px] justify-start rounded-lg cursor-pointer capitalize whitespace-nowrap py-3"
                    value={item.title}
                  >
                    <span className="w-fit !text-start text-white font-montserrat  font-semibold text-[20px] leading-[30px] ">
                      {item.title}
                    </span>
                    <p className=" text-white">{item.desription}</p>
                  </TabsTrigger>
                  {/* <Separator className="bg-[#828E8E] group-hover:!hidden group-data-[state=active]:!hidden" /> */}
                </li>
              );
            })}
          </ul>
        </TabsList>
        {itemsList.map((item: any, index: number) => {
          return (
            <TabsContent
              defaultValue={item.title[0]}
              key={index}
              value={item.title}
              className="px-2 py-4 w-full pr-16"
            >
              <div className=" w-full h-[480px] bg-[#435655] rounded-[16px] border border-[#828E8E] relative overflow-hidden">
                {/* <Image src={item.image} alt="" className='w-[50%] h-auto' /> */}
                <Image src={bgImage} alt="" className={`${styleLeaf}`} />
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};
