'use client';
import { useUserStore } from '@/lib/store/user';
import { supabaseClient } from '@/lib/supabase/auth/client';
import { useGetUser } from '@/lib/supabase/auth/getUser';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Button, buttonVariants } from '../ui/button';

const adminLinks = [
  { title: 'Dashboard', url: '/dashboard' },
  { title: 'Profile', url: '/dashboard/profile' },
];

export function AdminNav() {
  const router = useRouter();
  const supabase = supabaseClient();
  const { user } = useGetUser();

  const SignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  async function handleSignOut() {
    toast.promise(SignOut, {
      loading: 'Signing out..',
      success: (data) => {
        return 'Signed Out';
      },
      error: 'Error',
    });
    router.refresh();
  }
  return (
    <div className=' flex w-full'>
      {!user ? (
        <div className='px-4 py-2 flex items-center w-full justify-between  border-b border-neutral-200 bg-white'>
          <Link href={'/'} className='text-neutral-500 hover:text-black'>
            Go Back Home
          </Link>
          <Link href={'/'} className={cn(buttonVariants())}>
            Login
          </Link>
        </div>
      ) : (
        <div className='flex flex-col h-full justify-between w-full divide-y divide-neutral-200 border-b border-neutral-200 bg-white'>
          <div className='flex items-center justify-between w-full py-2 px-4'>
            <div className='flex flex-col'>
              <p>{user?.email!}</p>
            </div>
            <Button onClick={handleSignOut}>Log Out</Button>
          </div>
          <div className='flex flex-row space-x-4 w-full items-center justify-center py-2 px-4'>
            {adminLinks.map((l) => (
              <Link
                href={l.url}
                className='text-neutral-500 hover:text-black font-bold text-lg'
              >
                {l.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
