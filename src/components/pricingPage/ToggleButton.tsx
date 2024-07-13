import { Button } from '../ui/button';
import { useCalculate } from '@/store/calculateResult';

export const ToggleButton = ({
  setHomeService,
  homeService,
  name,
  textButton,
}: {
  setHomeService: any;
  homeService: any;
  name: string;
  textButton: any;
}) => {
  const { setCalculate } = useCalculate();

  return (
    <div className="flex mt-4 md:mt-0 ltr:md:ml-auto rtl:md:mr-auto">
      <Button
        className={`w-full md:w-16 ltr:md:ml-8 ltr:rounded-r-none capitalize rtl:rounded-l-none cursor-pointer border ltr:border-r-0 rtl:border-l-0 ${
          homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'
        } focus:border-[#A67F6B]`}
        onClick={() => {
          setHomeService(!homeService);
          setCalculate({ [name]: true });
        }}
      >
        {textButton?.yes}
      </Button>
      <Button
        className={`w-full md:w-16 ltr:border-l-0 border rtl:border-r-0 capitalize ltr:rounded-l-none rtl:rounded-r-none cursor-pointer ${
          !homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'
        } focus:border-[#A67F6B]`}
        onClick={() => {
          setHomeService(!homeService);
          setCalculate({ [name]: false });
        }}
      >
        {textButton?.no}
      </Button>
    </div>
  );
};
