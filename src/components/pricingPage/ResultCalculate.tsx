import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';
import { CheckIconPricing } from '@/assets/icons/checkIconPricing/CheckIconPricing';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { useCalculate } from '@/store/calculateResult';
import { useCurrentPlan } from '@/store/storeCurrentPlan';

export const ResultCalculate = ({
  setCheckedYear,
  onCheckedYear,
  calculationFormRef,
  onScrollToGrid,
  dataPricing,
}: {
  onCheckedYear: boolean;
  setCheckedYear: any;
  calculationFormRef: any;
  onScrollToGrid: any;
  dataPricing: any;
}) => {
  const resultList = dataPricing?.resetCalculation?.resultOption;
  const { branch, country, staff } = useCalculate();

  const { plan, price } = useCurrentPlan();
  const staffCount = staff > 1 ? (staff - 1) * 10 : 0;
  const branchCount = branch > 1 ? (branch - 1) * 25 : 0;
  const countryCount = country > 1 ? (country - 1) * 50 : 0;
  const totalCount = staffCount + branchCount + countryCount;

  let cleanedAmount = price ? price.replace('$', '') : 60;
  return (
    <div ref={calculationFormRef} className=" scroll-mt-[300px]">
      <div className="mt-6 md:p-6 md:border md:rounded-[16px]">
        <div className="md:flex md:justify-between md:items-center ">
          <div className="flex justify-between md:justify-start">
            <h2 className="ltr:font-montserrat font-semibold text-[#242424] text-[16px] leading-6">
              {plan}
            </h2>
            <p className="bg-[#E9ECF7] px-[9px] py-[4px] ltr:font-inter text-[#2543AD] rounded-[20px] w-fit text-[12px] leading-[12px] font-medium self-center ltr:md:ml-3 rtl:md:mr-3">
              {dataPricing?.resetCalculation?.tryPeriod}
            </p>
          </div>
          <Button
            className="ltr:font-montserrat font-semibold bg-transparent border-none text-[#2543AD] pl-0 "
            onClick={() => onScrollToGrid()}
          >
            {dataPricing?.resetCalculation?.details}
          </Button>
        </div>
        <Separator
          className="my-6 md:mb-0 bg-[#E8E9E9] -mx-4 w-full spacing-custom-width md:spacing-custom-width-md"
          style={{ width: 'calc(100% + 32px)' }}
        />
        <div className="md:flex md:justify-between">
          <ul className="md:grid md:grid-cols-2  md:w-[50%] md:py-[20px] grid gap-3">
            {resultList &&
              resultList?.map((item: string, index: number) => {
                return (
                  <li key={index} className="flex items-center ">
                    <CheckIconPricing style="w-[14px] h-[14px]" />
                    <span className="text-[#455150] ltr:font-montserrat font-medium ml-2">
                      {item}
                    </span>
                  </li>
                );
              })}
          </ul>
          <Separator
            className="my-6 bg-[#E8E9E9] -mx-4 w-full md:hidden"
            style={{ width: 'calc(100% + 32px)' }}
          />
          <div className=" md:w-[50%]  md:border-l md:py-[20px] md:px-6">
            <div className="flex justify-between">
              <h3 className="text-[#455150] ltr:font-montserrat text-base font-medium">
                {plan}:
              </h3>
              <p className="text-[#172524] text-[14px] leading-5 ltr:font-montserrat font-medium ">
                {price}
                <span className="text-[#455150] font-normal">
                  / {dataPricing?.resetCalculation?.month}
                </span>
              </p>
            </div>
            <div className="flex justify-between mt-3">
              <h3 className="text-[#455150] ltr:font-montserrat text-base font-medium">
                {staff} {dataPricing?.resetCalculation?.staff}:
              </h3>
              <p className="text-[#172524] text-[14px] leading-5 ltr:font-montserrat font-medium ">
                ${staffCount}
                <span className="text-[#455150] font-normal">
                  / {dataPricing?.resetCalculation?.month}
                </span>
              </p>
            </div>
          </div>
        </div>
        <Separator
          className="my-6 md:mt-0 bg-[#E8E9E9] -mx-4 w-full"
          style={{ width: 'calc(100% + 32px)' }}
        />
        <div className="md:flex md:items-center md:self-center md:justify-between">
          <h2 className="ltr:font-montserrat font-semibold text-base">
            {dataPricing?.resetCalculation?.totalPrice}:
          </h2>
          <div className="md:ml-auto">
            <div className="md:flex md:items-center">
              <div className="flex justify-between  md:mt-0 items-center">
                <div
                  className={cn('md:flex md:items-baseline', {
                    ' opacity-60': onCheckedYear,
                  })}
                >
                  <p className="ltr:font-montserrat font-semibold text-[20px] leading-[30px]">
                    ${+cleanedAmount + staffCount + branchCount + countryCount}
                    <span className="ltr:font-montserrat text-[#455150] font-normal  md:text-[16px] md:leading-[18px] ml-2">
                      <span className="hidden md:inline">
                        {dataPricing?.resetCalculation?.per}
                      </span>
                      <span className="md:hidden">/</span>{' '}
                      {dataPricing?.resetCalculation?.month}
                    </span>
                  </p>
                  <p className=" ltr:font-montserrat text-[10px] leading-[15px] md:flex  md:text-[16px] md:leading-[18px] font-normal text-[#455150]">
                    <span className="hidden md:inline mx-1">/</span>
                    {dataPricing?.resetCalculation?.billed}
                  </p>
                </div>

                <Switch
                  className="data-[state=checked]:bg-[#A67F6B] bg-[#aab4b3] md:mx-4"
                  onCheckedChange={() => setCheckedYear(!onCheckedYear)}
                />

                <div
                  className={cn('md:flex md:items-baseline', {
                    ' opacity-60': !onCheckedYear,
                  })}
                >
                  <p className="ltr:font-montserrat font-semibold text-[20px] leading-[30px]">
                    $
                    {(+cleanedAmount +
                      staffCount +
                      branchCount +
                      countryCount) *
                      10}
                    <span className="ltr:font-montserrat text-[#455150] font-normal  md:text-[16px] md:leading-[18px] ml-2">
                      <span className="hidden md:inline">
                        {dataPricing?.resetCalculation?.per}
                      </span>
                      <span className="md:hidden">/</span>{' '}
                      {dataPricing?.resetCalculation?.year}
                    </span>
                  </p>
                  <p className=" ltr:font-montserrat text-[10px] leading-[15px] md:flex  md:text-[16px] md:leading-[18px] font-normal text-[#455150]">
                    <span className="hidden md:inline mx-1">/</span>
                    {dataPricing?.resetCalculation?.billed}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button className="ml-4 hover:bg-white hover:text-primary border hidden md:inline-flex rounded-[9px]">
            {dataPricing?.resetCalculation?.textStart}
          </Button>
        </div>
      </div>
    </div>
  );
};
