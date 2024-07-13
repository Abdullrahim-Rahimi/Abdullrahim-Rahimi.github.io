'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useChangePage } from '@/store/currentPage';

export const TogglePricing = ({
  className,
  setCurrentPricing,
  toogleName,
}: {
  className?: string;
  setCurrentPricing: any;
  toogleName: any;
}) => {
  const { page } = useChangePage();

  const [active, setActive] = useState('');
  useEffect(() => {
    if (page.includes('business')) {
      setActive('business');
    }
    if (page.includes('customer')) {
      setActive('business');
    }
    if (page.includes('professional')) {
      setActive('professional');
    }
  }, [page]);

  useEffect(() => {
    setCurrentPricing(active);
  }, [setCurrentPricing, active]);

  return (
    <div
      className={cn(
        'flex border rounded-lg p-2 bg-customWhite border-primaryBtn mb-8',
        className,
      )}
    >
      {toogleName &&
        toogleName.map((option: any) => (
          <button
            // href={`${option.path.toLowerCase()}`}
            onClickCapture={() => setActive(option.path)}
            key={option.path}
            onClick={() => setActive(option.path)}
            className={clsx(
              'px-6 py-1 rounded-lg font-semibold cursor-pointer w-[150px]',
              {
                'bg-white text-black ': active === option.path,
                'text-[#ABB4B3] hover:text-white': active !== option.path,
              },
            )}
          >
            {option.label}
          </button>
        ))}
    </div>
  );
};
