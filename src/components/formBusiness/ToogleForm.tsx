import { Button } from '../ui/button';

export const ToggleButtonForm = ({
  setHomeService,
  homeService,
  firstValue,
  secondValue,
  setContent,
  name,
}: {
  setHomeService: any;
  homeService: any;
  firstValue: string;
  secondValue: string;
  setContent: any;
  name: string;
}) => {
  return (
    <div className="flex w-full">
      <Button
        type="button"
        className={`w-full rtl:rounded-l-none rtl:rounded-r-lg  rounded-r-none cursor-pointer border border-r-0 rtl:border-r rtl:border-l-0 ${homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'} focus:border-[#A67F6B]`}
        onClick={(e) => {
          const value = e.currentTarget.textContent;
          setContent((prevContent: any) => ({
            ...prevContent,
            [name]: value,
          }));
          setHomeService(true);
        }}
      >
        {firstValue}
      </Button>
      <Button
        type="button"
        className={`w-full rtl:rounded-r-none rtl:rounded-l-lg border-l-0 border rounded-l-none cursor-pointer rtl:border-l rtl:border-r-0 ${!homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'} focus:border-[#A67F6B]`}
        onClick={(e) => {
          const value = e.currentTarget.textContent;
          setContent((prevContent: any) => ({
            ...prevContent,
            [name]: value,
          }));
          setHomeService(false);
        }}
      >
        {secondValue}
      </Button>
    </div>
  );
};
