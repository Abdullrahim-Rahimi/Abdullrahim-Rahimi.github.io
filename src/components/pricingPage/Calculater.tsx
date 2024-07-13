import { useCalculate } from '@/store/calculateResult';
import { Input } from '../ui/input';
import { ToggleButton } from './ToggleButton';

export const Calculater = ({
  homeService,
  setHomeService,
  onboarding,
  setOnboarding,
  conciergeService,
  setConciergeService,
  calculationFormRef,
  titleTypeCalculate,
  overflowText,
}: any) => {
  const { branch, country, setCalculate, staff } = useCalculate();

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between"
        ref={calculationFormRef}
      >
        <div className="mt-6 w-full ltr:mr-12">
          <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-6">
            <div className="md:min-h-[56px]">
              <h2 className="ltr:font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.firstInput.title}
              </h2>
              <p className="ltr:font-montserrat text-[#455150] mt-1 md:mt-0">
                {titleTypeCalculate?.firstInput.description}
              </p>
            </div>
            <Input
              onChange={(e) => setCalculate({ staff: e.target.value })}
              type="number"
              className="w-full md:w-20 ml-0 md:ml-8 mt-2 md:mt-0 focus:border-[#A67F6B] text-center py-[14px] md:py-2"
              defaultValue={staff}
              min="1"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-6">
            <div className="md:min-h-[84px]">
              <h2 className="ltr:font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.secondInput.title}
              </h2>
              <p className="ltr:font-montserrat text-[#455150] mt-1 md:mt-0">
                {titleTypeCalculate?.secondInput.description}
              </p>
            </div>
            <Input
              onChange={(e) => setCalculate({ branch: e.target.value })}
              className="w-full md:w-20 md:ml-8 mt-4 md:mt-0 focus:border-[#A67F6B] text-center py-2"
              type="number"
              defaultValue={branch}
              min="1"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:min-h-[56px]">
              <h2 className="ltr:font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.thirdInput.title}
              </h2>
              <p className="ltr:font-montserrat text-[#455150] mt-1 md:mt-0">
                {titleTypeCalculate?.thirdInput.description}
              </p>
            </div>
            <Input
              onChange={(e) => setCalculate({ country: e.target.value })}
              className="w-full md:w-20 md:ml-8 mt-4 md:mt-0 focus:border-[#A67F6B] text-center py-2"
              type="number"
              defaultValue={country}
              min="1"
            />
          </div>
        </div>
        <div className="mt-6 w-full">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="min-h-[56px]">
              <h2 className="ltr:font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.toggleFirst.title}
              </h2>
              <p className="ltr:font-montserrat text-[#455150]">
                {titleTypeCalculate?.toggleFirst.description}
              </p>
            </div>
            <ToggleButton
              name="provideHome"
              homeService={homeService}
              setHomeService={setHomeService}
              textButton={overflowText?.btnTextCalculate}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="min-h-[84px]">
              <h2 className="ltr:font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.toggleSecond.title}
              </h2>
              <p className="ltr:font-montserrat text-[#455150]">
                {titleTypeCalculate?.toggleSecond.description}
              </p>
            </div>
            <ToggleButton
              name="assistantOnboard"
              homeService={onboarding}
              setHomeService={setOnboarding}
              textButton={overflowText?.btnTextCalculate}
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="min-h-[56px]">
              <h2 className="ltr:font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.toggleThird.title}
              </h2>
              <p className="ltr:font-montserrat text-[#455150]">
                {titleTypeCalculate?.toggleThird.description}
              </p>
            </div>
            <ToggleButton
              name="available"
              homeService={conciergeService}
              setHomeService={setConciergeService}
              textButton={overflowText?.btnTextCalculate}
            />
          </div>
        </div>
      </div>
    </>
  );
};
