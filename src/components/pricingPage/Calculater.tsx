import { Input } from '../ui/input';
import { ToggleButton } from './ToggleButton';
const text = {
  firstInput: {
    title: 'How many working staff do you have in your team?',
    description: '$10 per additional calendar',
  },
  thirdInput: {
    title: 'How many countries do you operate in?',
    description: '$50 per additional country',
  },
  secondInput: {
    title: 'How many branches or locations do you have?',
    description: '$25 per additional branch/location',
  },
  toggleFirst: {
    title: 'Do you provide home service visits?',
    description: '$25 per additional branch/location',
  },
  toggleThird: {
    title: 'Would you like to have the 24/7 concierge service?',
    description: '1$ per appointment',
  },
  toggleSecond: {
    title: 'Would you like assistance with onboarding and services setup?',
    description: 'One-time Fee $100',
  },
};

export const Calculater = ({
  calculate,
  setCalculate,
  homeService,
  setHomeService,
  onboarding,
  setOnboarding,
  conciergeService,
  setConciergeService,
  calculationFormRef,
  titleTypeCalculate,
}: any) => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between"
        ref={calculationFormRef}
      >
        <div className="mt-6 w-full mr-12">
          <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-6 ">
            <div className="md:min-h-[56px]">
              <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.firstInput.title}
              </h2>
              <p className="font-montserrat text-[#455150] mt-1 md:mt-0">
                {titleTypeCalculate?.firstInput.description}
              </p>
            </div>
            <Input
              onChange={(e) =>
                setCalculate((prev: any) => ({
                  ...prev,
                  staff: e.target.value,
                }))
              }
              type="number"
              className="w-full md:w-20 ml-0 md:ml-8 mt-2 md:mt-0 focus:border-[#A67F6B] text-center py-[14px] md:py-2"
              defaultValue={calculate.staff}
              min="1"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-6">
            <div className="md:min-h-[84px]">
              <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.secondInput.title}
              </h2>
              <p className="font-montserrat text-[#455150] mt-1 md:mt-0">
                {titleTypeCalculate?.secondInput.description}
              </p>
            </div>
            <Input
              onChange={(e) =>
                setCalculate((prev: any) => ({
                  ...prev,
                  branch: e.target.value,
                }))
              }
              className="w-full md:w-20 md:ml-8 mt-4 md:mt-0 focus:border-[#A67F6B] text-center py-2"
              type="number"
              defaultValue={calculate.branch}
              min="1"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:min-h-[56px]">
              <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.thirdInput.title}
              </h2>
              <p className="font-montserrat text-[#455150] mt-1 md:mt-0">
                {titleTypeCalculate?.thirdInput.description}
              </p>
            </div>
            <Input
              onChange={(e) =>
                setCalculate((prev: any) => ({
                  ...prev,
                  country: e.target.value,
                }))
              }
              className="w-full md:w-20 md:ml-8 mt-4 md:mt-0 focus:border-[#A67F6B] text-center py-2"
              type="number"
              defaultValue={calculate.country}
              min="1"
            />
          </div>
        </div>
        <div className="mt-6 w-full">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="min-h-[56px]">
              <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.toggleFirst.title}
              </h2>
              <p className="font-montserrat text-[#455150]">
                {titleTypeCalculate?.toggleFirst.description}
              </p>
            </div>
            <ToggleButton
              setCalculate={setCalculate}
              name="provideHome"
              homeService={homeService}
              setHomeService={setHomeService}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="min-h-[84px]">
              <h2 className="font-montserrat font-semibold text-[18px] leading-7 ">
                {titleTypeCalculate?.toggleSecond.title}
              </h2>
              <p className="font-montserrat text-[#455150]">
                {titleTypeCalculate?.toggleSecond.title}
              </p>
            </div>
            <ToggleButton
              setCalculate={setCalculate}
              name="assistantOnboard"
              homeService={onboarding}
              setHomeService={setOnboarding}
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="min-h-[56px]">
              <h2 className="font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.toggleThird.title}
              </h2>
              <p className="font-montserrat text-[#455150]">
                {titleTypeCalculate?.toggleThird.description}
              </p>
            </div>
            <ToggleButton
              setCalculate={setCalculate}
              name="available"
              homeService={conciergeService}
              setHomeService={setConciergeService}
            />
          </div>
        </div>
      </div>
    </>
  );
};
