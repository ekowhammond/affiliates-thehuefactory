import { buttonVariants } from '@/components/ui/button';
import { Twitter } from '@/components/ux/icons';
import { navlinks, socials } from '@/lib/constants/urls';
import { Logo_3d_orange } from '@/lib/imgs';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const now = new Date();
  return (
    <footer className='flex flex-col items-center w-full bg-white border-t pt-6 rounded-t-3xl overflow-hidden z-[200] -mt-6 relative '>
      <div className='flex flex-col items-center max-w-7xl  w-full p-4 '>
        {/* top */}
        <div className='flex flex-col items-center justify-center'>
          {/* brand logo */}
          <div className=''>
            <Image alt='logo' src={Logo_3d_orange} className='w-32' />
          </div>
          {/* socials */}
          <div className='flex items-center space-x-4 py-4 my-2'>
            {socials.map((s) => (
              <Link
                key={s.id}
                href={s.link}
                target='_blank'
                className={cn('text-neutral-500')}
              >
                <s.icon className='size-5' />
              </Link>
            ))}
            <Link
              href={'https://www.twitter.com/thehuefactory/'}
              target='_blank'
              className={cn('text-neutral-500')}
            >
              <Twitter className='size-4' />
            </Link>
          </div>
          {/* nav links */}
          <div className='p-4 flex items-center space-x-4 justify-center'>
            {navlinks.map((data) => (
              <div key={data.id} className=''>
                <Link
                  href={data.url}
                  className={cn(
                    'text-center  transition-all duration-300 ease-linear hover:underline text-sm font-semibold text-neutral-500 hover:text-black uppercase'
                  )}
                >
                  {data.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className='py-4'>
          <p className='text-sm font-semibold text-neutral-500 uppercase'>
            © {now.getFullYear()} thehuefactory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
