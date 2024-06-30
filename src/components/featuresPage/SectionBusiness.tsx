import { Button } from '../ui/button';

export const SectionBusiness = ({ listOption }: any) => {
  return (
    <div>
      <ul className="hidden md:flex mx-auto space-x-4 justify-center items-center mt-[33px]">
        {listOption &&
          listOption.map((item: any, index: number) => {
            return (
              <li key={index}>
                <Button className="py-3 px-[67px] border border-[#586968] bg-white/10  text-white">
                  {item}
                </Button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
