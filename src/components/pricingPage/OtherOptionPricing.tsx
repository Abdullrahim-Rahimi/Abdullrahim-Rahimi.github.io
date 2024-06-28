import { CheckIconPricing } from '@/assets/icons/checkIconPricing/CheckIconPricing';
import { cn } from '@/lib/utils';

export const OtherOptionPricing = ({
  options,
  showAll,
}: {
  options: string[];
  showAll: boolean;
}) => {
  return options.map((item: string, index: number) => {
    return (
      <li
        key={index}
        className={cn(
          'justify-start items-center p-4 border bg-white rounded-[8px]',
          index > 4 && !showAll ? 'hidden md:flex' : 'flex',
        )}
      >
        <span className="w-[22px] mr-[10px]">
          <CheckIconPricing style="mr-[10px]" />
        </span>
        <span className="text-left">{item}</span>
      </li>
    );
  });
};
