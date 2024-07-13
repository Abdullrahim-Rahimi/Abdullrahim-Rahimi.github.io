import { Button } from '../ui/button';

export const SectionBusiness = ({ listOption }: any) => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <ul className="hidden md:flex mx-auto space-x-4 rtl:space-x-reverse justify-center items-center mt-[33px]">
        {listOption &&
          listOption.map((item: any, index: number) => {
            return (
              <li key={index}>
                <Button
                  className="py-3 px-[67px] border border-[#586968] bg-white/10  text-white"
                  onClick={() => handleScroll(item.path)}
                >
                  {item.title}
                </Button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
