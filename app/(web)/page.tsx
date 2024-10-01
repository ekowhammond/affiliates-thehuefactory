import { buttonVariants } from '@/components/ui/button';
import { Logo_3d_orange } from '@/lib/imgs';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className='mx-auto max-w-7xl w-full flex flex-col items-center justify-center h-full'>
      <section className='flex flex-col items-center justify-center p-4 mt-40 space-y-4'>
        <Image
          alt='thehuefactory logo'
          src={Logo_3d_orange}
          className='size-44'
        />
        <div className='flex flex-col items-center text-center space-y-16'>
          <div className='flex flex-col items-center space-y-2'>
            <h1 className='text-2xl font-bold '>Thehuefactory Affiliates</h1>
            <p className='text-neutral-600'>
              Welcome to the page of{' '}
              <a
                href='http://thehuefacory.co'
                target='_blank'
                rel='noopener noreferrer'
                className='text-accent-100 hover:underline'
              >
                thehuefacory.
              </a>
            </p>
          </div>
          <div className='flex items-center space-x-4'>
            <Link
              href={'/login'}
              className={cn(buttonVariants({ variant: 'main', size: 'none' }))}
            >
              Login
            </Link>
            <Link
              href={'https://www.thehuefactory.co/join'}
              target='_blank'
              className={cn(
                buttonVariants({ variant: 'main', size: 'none' }),
                'bg-black text-white hover:bg-accent-100'
              )}
            >
              Join
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
