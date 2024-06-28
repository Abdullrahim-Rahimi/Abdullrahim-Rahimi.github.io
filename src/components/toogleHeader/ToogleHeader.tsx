'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { optionsToogle } from '@/lib/constants/headernavigationList';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { Button } from '../ui/button';

const ToggleButton = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedPath = localStorage.getItem('activePage');

      if (pathname.includes('business') && !pathname.includes('features'))
        setActive('/business');
      if (pathname.includes('customer') && !pathname.includes('features'))
        setActive('/customer');
      if (pathname.includes('professional') && !pathname.includes('features'))
        setActive('/professional');

      if (pathname.startsWith('/features') && storedPath) {
        const newPath = `/features/${storedPath}`;
        if (pathname !== newPath) {
          router.replace(newPath);
        }
      }
    }
  }, [pathname, router]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let currentPath: string | undefined;
      if (pathname.startsWith('/business')) currentPath = '/business';
      if (pathname.startsWith('/customer')) currentPath = '/customer';
      if (pathname.startsWith('/professional')) currentPath = '/professional';

      if (currentPath) {
        localStorage.setItem('activePage', currentPath);
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined' && active) {
      localStorage.setItem('activePage', active);
    }
  }, [active]);

  const handleClick = (path: string) => {
    if (path.startsWith('/features/business')) setActive('business');
    if (path.startsWith('/features/customer')) setActive('customer');
    if (path.startsWith('/features/professional')) setActive('professional');
    setActive(path);
    if (typeof window !== 'undefined') {
      localStorage.setItem('activePage', path);
    }
    if (pathname.includes('/features')) {
      router.push(`/features${path}`);
    } else {
      router.push(path);
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = localStorage.getItem('activePage');

      if (currentPath) setActive(currentPath);
    }
  }, []);

  return (
    <div
      className={cn(
        'hidden md:flex border rounded-lg p-1 bg-customWhite border-primaryBtn max-w-content ml-auto mr-2 rtl:mr-auto rtl:ml-0',
        className,
      )}
    >
      {optionsToogle.map((option) => {
        return (
          <Button
            key={option.path}
            onClick={() => handleClick(option.path)}
            className={clsx(
              'px-6 rounded-lg font-semibold cursor-pointer bg-transparent',
              {
                'bg-white text-black': active === option.path,
                'text-[#ABB4B3] hover:text-white': active !== option.path,
              },
            )}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
};

export default ToggleButton;
