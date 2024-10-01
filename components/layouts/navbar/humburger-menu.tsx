'use client';
import React from 'react';

import { cn } from '@/lib/utils';

type NavMenuProps = {
  navMenuActive?: boolean;
  navMenuColor?: boolean;
  setNavMenuActive?: React.Dispatch<React.SetStateAction<boolean>>;
  handleNavMenu: () => void;
  className?: string;
};

export function HumburgerMenu({
  handleNavMenu,
  navMenuActive,
  className,
}: NavMenuProps) {
  return (
    <div className={cn(className, 'flex w-6 items-center justify-end')}>
      <div
        className='group flex h-6 w-6 cursor-pointer flex-col items-center justify-between'
        onClick={handleNavMenu}
      >
        {/* the btn */}
        <span
          className={cn(
            'h-[2px] w-full transform cursor-pointer rounded-lg transition duration-300 ease-in-out',
            'bg-black',
            navMenuActive ? 'translate-y-2.5 rotate-45' : ''
          )}
        />
        <span
          className={cn(
            'h-[2px] w-full transform cursor-pointer rounded-lg transition duration-300 ease-in-out',
            'bg-black',
            navMenuActive ? 'hidden w-0' : 'w-full'
          )}
        />
        <span
          className={cn(
            'h-[2px] w-full transform cursor-pointer rounded-lg transition duration-300 ease-in-out',
            'bg-black',
            navMenuActive ? '-translate-y-3 -rotate-45' : ''
          )}
        />
      </div>
    </div>
  );
}
