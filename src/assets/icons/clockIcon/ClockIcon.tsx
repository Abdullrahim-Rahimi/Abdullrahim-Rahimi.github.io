export const ClockIcon = ({
  className,
  fill = '#172524',
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg
      className={className}
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.80078 0C3.49238 0 0.800781 2.6916 0.800781 6C0.800781 9.3084 3.49238 12 6.80078 12C10.1092 12 12.8008 9.3084 12.8008 6C12.8008 2.6916 10.1092 0 6.80078 0ZM6.80078 10.8C4.15418 10.8 2.00078 8.6466 2.00078 6C2.00078 3.3534 4.15418 1.2 6.80078 1.2C9.44738 1.2 11.6008 3.3534 11.6008 6C11.6008 8.6466 9.44738 10.8 6.80078 10.8Z"
        fill={fill}
      />
      <path
        d="M7.40117 3H6.20117V6.2484L8.17697 8.2242L9.02537 7.3758L7.40117 5.7516V3Z"
        fill={fill}
      />
    </svg>
  );
};