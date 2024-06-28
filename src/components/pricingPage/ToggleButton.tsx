import { Button } from '../ui/button';

export const ToggleButton = ({
  setHomeService,
  homeService,
  setCalculate,
  name,
}: {
  setHomeService: any;
  homeService: any;
  setCalculate: any;
  name: string;
}) => {
  return (
    <div className="flex mt-4 md:mt-0 md:ml-auto">
      <Button
        className={`w-full md:w-16  md:ml-8 rounded-r-none cursor-pointer border border-r-0 ${homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'} focus:border-[#A67F6B]`}
        onClick={() => {
          setHomeService(!homeService),
            setCalculate((prev: any) => ({
              ...prev,
              [name]: true,
            }));
        }}
      >
        Yes
      </Button>
      <Button
        className={`w-full md:w-16 border-l-0 border rounded-l-none cursor-pointer ${!homeService ? 'bg-[#A67F6B] text-white' : 'bg-white text-primary'} focus:border-[#A67F6B]`}
        onClick={() => {
          setHomeService(!homeService),
            setCalculate((prev: any) => ({
              ...prev,
              [name]: false,
            }));
        }}
      >
        No
      </Button>
    </div>
  );
};

// onChange={(e) =>
//     setCalculate((prev) => ({
//       ...prev,
//       staff: e.target.value,
//     }))
//   }
