'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { navlinks } from '@/lib/constants/urls';

type NavMenuProps = {
  navMenuActive?: boolean;
  navColor?: boolean;
  setNavMenuActive?: React.Dispatch<React.SetStateAction<boolean>>;
  handleNavMenu?: () => void;
  handleHideNavMenu?: () => void;
};

export function NavMenu({
  navMenuActive,
  handleHideNavMenu,
  navColor,
}: NavMenuProps) {
  return (
    <AnimatePresence mode='sync'>
      {navMenuActive && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          className={cn('fixed inset-0 z-[400]', 'bg-white')}
        >
          <div className='mt-16 flex h-full w-full flex-col'>
            <div className='flex h-[78vh] w-full flex-col items-center justify-center'>
              <div className='flex h-full w-full max-w-4xl flex-col items-center justify-center'>
                <div className='grid space-y-10'>
                  <div className='flex flex-col items-center text-2xl font-medium'>
                    <Link
                      href={'/'}
                      onClick={handleHideNavMenu}
                      className={cn(
                        'hover:text-accent-green/30 text-center text-black transition-all duration-300 ease-linear',
                        'text-black'
                      )}
                    >
                      Home
                    </Link>
                  </div>
                  {navlinks.map((l, i) => (
                    <div
                      key={i}
                      className='flex flex-col items-center text-2xl font-medium'
                    >
                      <Link
                        href={l.url}
                        onClick={handleHideNavMenu}
                        className={cn(
                          'hover:text-accent-green/30 text-center transition-all duration-300 ease-linear',
                          'text-black'
                        )}
                      >
                        {l.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
