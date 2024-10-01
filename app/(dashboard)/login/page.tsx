import { cn } from '@/lib/utils';
import LoginForm from '@/components/forms/auth/login-form';
export const dynamic = 'force-dynamic';

export default async function LogIn() {
  return (
    <main className=''>
      <section className='flex bg-gray-50 min-h-[48rem] flex-col items-center h-full w-full'>
        {/* form */}
        <div className='flex-1 flex flex-col items-center w-full px-4'>
          <div className='flex flex-col items-center justify-center pb-4 pt-2 w-full'>
            <div className='flex flex-col items-center justify-center text-center w-full mt-20'>
              <h2 className={cn('text-2xl font-bold py-4')}>Admin</h2>
            </div>
            {/* icon */}
            <div className='h-24 w-24 rounded-full border border-gray-200 bg-white relative overflow-hidden flex flex-col items-center justify-center z-0'>
              <div className='absolute z-[1] bg-gradient-to-b from-transparent to-gray-100 inset-0' />
              <div className='h-16 relative z-[2] w-16 rounded-full bg-white border border-gray-200 flex flex-col items-center justify-center'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-8 h-8'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* message */}
            <div className='text-center space-y-1'>
              <h2 className={cn('text-2xl font-bold')}>
                Login to your account
              </h2>
              <p className='text-gray-400'>Enter your details to login.</p>
            </div>
          </div>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
