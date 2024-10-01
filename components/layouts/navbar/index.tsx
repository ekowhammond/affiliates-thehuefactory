'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { HumburgerMenu } from './humburger-menu';
import { usePathname } from 'next/navigation';
import { NavMenu } from './menu';
import { Logo } from '@/lib/imgs';
import { navlinks } from '@/lib/constants/urls';
import useMeasure from 'react-use-measure';
import { motion, MotionConfig } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();
  const [navColor, setNavColor] = useState(false);
  const [navMenuActive, setNavMenuActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentRef, { width, height }] = useMeasure();

  const changeBackground = () => {
    if (window.scrollY >= 16) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  const handleNavMenu = () => {
    setNavMenuActive((n) => !n);
  };
  const handleHideNavMenu = () => {
    setNavMenuActive((n) => false);
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <nav className={cn('relative z-[450] flex flex-col items-center')}>
      <NavMenu
        navColor={navColor}
        handleHideNavMenu={handleHideNavMenu}
        navMenuActive={navMenuActive}
      />
      <div
        className={cn('fixed top-0 z-[450] flex w-full flex-col items-center')}
      >
        {/* desktop */}
        <div className={cn('flex w-full flex-col items-center')}>
          <div className='mx-auto grid w-full max-w-7xl grid-cols-2 gap-10 items-center p-4 sm:grid-cols-5'>
            {/* Logo */}
            <div className=' flex items-center justify-start'>
              <motion.div
                animate={{ opacity: navColor ? 0 : 1 }}
                className={cn('hidden md:flex md:animate-out')}
              >
                <Link
                  href={'/'}
                  onClick={handleHideNavMenu}
                  className='w-10 items-center justify-center flex flex-col'
                >
                  <Image src={Logo} alt='LogoSquare' className='md:w-7 ' />
                </Link>
              </motion.div>
              <Link
                href={'/'}
                onClick={handleHideNavMenu}
                className='w-10 items-center md:hidden justify-center flex flex-col'
              >
                <Image src={Logo} alt='LogoSquare' className='md:w-7 ' />
              </Link>
            </div>
            {/* desktop nav links */}
            <div className='hidden items-center justify-center space-x-4 sm:flex w-full sm:col-span-3 '>
              <MotionConfig>
                <motion.div
                  animate={{
                    width: navColor ? '440px' : '280px',
                  }}
                  initial={false}
                  transition={{ type: 'tween', bounce: 0.2, duration: 0.1 }}
                  className='inline-flex items-center justify-between bg-white rounded-full border w-full border-neutral-200 overflow-hidden '
                >
                  <div
                    ref={contentRef}
                    className='flex items-center py-2 justify-between w-full '
                  >
                    <Link
                      href={'/'}
                      onClick={handleHideNavMenu}
                      className={cn(
                        !navColor ? 'hidden' : '',
                        'w-10 items-center justify-center flex flex-col ml-2'
                      )}
                    >
                      <Image src={Logo} alt='LogoSquare' className='w-6' />
                    </Link>

                    <div className='flex items-center space-x-2 px-4'>
                      {navlinks.map((l, i) => (
                        <motion.div key={i} className=''>
                          <Link
                            href={l.url}
                            onClick={handleHideNavMenu}
                            className={cn(
                              'text-center  transition-all duration-300 ease-linear hover:underline text-sm font-semibold text-neutral-500 hover:text-black uppercase'
                            )}
                          >
                            {l.title}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    {/* {navColor && ( */}
                    <motion.div animate={{ opacity: !navColor ? 0 : 1 }}>
                      <Link
                        href={'/join'}
                        className={cn(
                          buttonVariants({
                            // size: 'sm',
                          }),
                          'mr-2 bg-accent-100 uppercase'
                        )}
                      >
                        Join Us
                      </Link>
                    </motion.div>
                    {/* )} */}
                  </div>
                </motion.div>
              </MotionConfig>
            </div>
            {/* contact and hamburger menu */}
            <div className='flex items-center justify-end space-x-4'>
              <div
                className={cn(
                  'transition-all duration-200 flex flex-row items-center space-x-4 '
                )}
              >
                <motion.div
                  animate={{ opacity: navColor ? 0 : 1 }}
                  className={cn('hidden md:flex md:animate-out')}
                >
                  <Link
                    href={'/join'}
                    className={cn(buttonVariants(), 'bg-accent-100 uppercase')}
                  >
                    Join Us
                  </Link>
                </motion.div>
                <Link
                  href={'/join'}
                  className={cn(buttonVariants(), 'md:hidden')}
                >
                  Join Us
                </Link>
                <HumburgerMenu
                  handleNavMenu={handleNavMenu}
                  navMenuActive={navMenuActive}
                  navMenuColor={navColor}
                  className='sm:hidden '
                />
              </div>
            </div>
          </div>
        </div>
        {/* content toggle */}
      </div>
    </nav>
  );
}
