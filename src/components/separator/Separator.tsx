import { cn } from '@/lib/utils';

const Separator = ({ className }: { className?: string }) => {
  return <p className={cn('w-full h-[1px] bg-primaryBtn', className)}> </p>;
};
export default Separator;
