import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Separator from '../separator/Separator';
import { Button } from '../ui/button';
import { tutorialsListOne } from '@/lib/constants/tutorialsList';
import { useRouter } from 'next/navigation';

export const TabsTutorials = () => {
  const router = useRouter();
  return (
    <Tabs
      defaultValue={tutorialsListOne[0].title}
      className="flex bg-[#F8F5F3] "
    >
      <TabsList className="flex flex-col py-6  mr-6 ml-16 bg-white px-6 h-fit">
        <p className=" font-semibold text-base text-[#A67F6B] pt-6 uppercase w-full ">
          Tutorials
        </p>
        <ul className=" flex flex-col text-start bg-white pb-6 rounded-xl  w-[310px]">
          {tutorialsListOne.map((item, index) => {
            return (
              <TabsTrigger
                key={index}
                className="hover:bg-[#E8E9E9] w-full text-[16px] text-[#172524] mt-[10px] text-start justify-start rounded-lg cursor-pointer capitalize whitespace-nowrap py-3 hover:font-semibold"
                value={item.title}
              >
                <span className="w-fit">{item.title}</span>
              </TabsTrigger>
            );
          })}
        </ul>
        <Separator className="bg-[#E8E9E9] mt-4" />
        <Button
          type="button"
          onClick={() => router.push('/contact')}
          className="hover:bg-white text-primary border border-primary w-full px-4 rounded-lg text-base mt-6 bg-primary font-montserrat font-semibold text-white hover:text-primary md:py-4 md:h-auto"
        >
          Got a question? Contact us
        </Button>
      </TabsList>
      {tutorialsListOne.map((item, index) => {
        return (
          <TabsContent key={index} value={item.title}>
            <item.compone />
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
