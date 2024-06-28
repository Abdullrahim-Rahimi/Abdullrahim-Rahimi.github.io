import { cn } from '@/lib/utils';

export const GooglePlayIcons = ({
  w = '16',
  h = '17',
  className,
}: {
  w: string;
  h: string;
  className: string;
}) => {
  return (
    <svg
      className={cn('fill-white', className)}
      width={w}
      height={h}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.2033 7.47038L12.1107 5.56305L3.17799 0.413255L10.2033 7.47038ZM1.36603 0C0.952772 0.222522 0.666672 0.635777 0.666672 1.1444V15.1633C0.666672 15.6719 0.952772 16.0852 1.36603 16.2759L9.50398 8.13795L1.36603 0ZM14.8763 7.18428L13.0008 6.10346L10.9027 8.13795L13.0008 10.2042L14.9081 9.1234C15.4803 8.67836 15.4803 7.62933 14.8763 7.18428ZM3.17799 15.8626L12.1107 10.7446L10.2033 8.83731L3.17799 15.8626Z" />
    </svg>
  );
};
