import { Logo_3d_orange } from '@/lib/imgs';
import Image from 'next/image';
import { permanentRedirect } from 'next/navigation';

const users = ['julius', 'ekow'];

export default function Page({ params }: { params: { username: string } }) {
  const username = params.username;
  const userNameAvailability = users.includes(params.username)
    ? 'user-available'
    : 'no-user';

  if (userNameAvailability === 'user-available') {
    return (
      <main className='mx-auto max-w-7xl w-full flex flex-col items-center justify-center h-full'>
        <section className='flex flex-col items-center justify-center p-4 mt-40 space-y-4'>
          <Image
            alt='thehuefactory logo'
            src={Logo_3d_orange}
            className='size-44'
          />
          <div className='flex flex-col items-center text-center'>
            <h1 className='text-2xl font-bold '>Thehuefactory Collaborators</h1>
            <p className='text-neutral-600'>
              User profile details of {username}
            </p>
          </div>
        </section>
      </main>
    );
  } else {
    permanentRedirect('/');
  }
}
