export const ArrowRightIcon = ({
  className,
  stroke = 'white',
}: {
  className?: string;
  stroke?: string;
}) => {
  return (
    <svg
      className={className}
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L1 13"
        stroke={stroke}
        strokeWidth="1.40196"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
