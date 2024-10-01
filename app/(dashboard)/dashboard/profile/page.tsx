'use client';
import ProfileForm from '@/components/forms/profile';
import { useUserStore } from '@/lib/store/user';
import { supabaseClient } from '@/lib/supabase/auth/client';
import { Database } from '@/lib/supabase/db/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type psd = Database['public']['Tables']['profiles']['Row'];
type pd = Database['public']['Tables']['JOIN_US_TABLE']['Row'];

export default function Page() {
  const { user } = useUserStore();
  const [profile, setProfile] = useState<psd>();
  const [profileDetails, setProfileDetails] = useState<pd>();

  useEffect(() => {
    const supabase = supabaseClient();

    supabase
      .from('profiles')
      .select('*')
      .eq('id', user?.id!)
      .single()
      .then(({ data }) => {
        if (data) setProfile(data);
      });

    supabase
      .from('JOIN_US_TABLE')
      .select('*')
      .eq('email', user?.email!)
      .single()
      .then(({ data }) => {
        if (data) setProfileDetails(data);
      });

    const channel = supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'profiles' },
        (payload) => {
          setProfile(payload.new as psd);
        }
      )
      .subscribe();

    // Cleanup
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  console.log(profile?.email!);
  return (
    <main className='mx-auto max-w-7xl w-full'>
      <section className='p-4 flex flex-col items-center w-full'>
        {!profile ? (
          'No Profile Data'
        ) : (
          <div>
            {!profile.avatar_url ? (
              <ProfileForm p={profile} />
            ) : (
              <div className='flex flex-col items-center space-y-4'>
                {/* <p>Profile Has Been Updated</p> */}
                {profile?.avatar_url ? (
                  <Image
                    width={176}
                    height={176}
                    src={profile.avatar_url}
                    alt='Avatar'
                    className='border border-neutral-200 object-cover rounded-full object-center'
                    style={{ height: '176px', width: '176px' }}
                  />
                ) : (
                  <div
                    className='border border-neutral-200'
                    style={{ height: '176px', width: '176px' }}
                  />
                )}
                <p className='text-xl font-medium'>{profile.username}</p>
                <p className='px-4 py-2 bg-accent-100 text-accent-400 text-lg rounded-lg font-medium uppercase'>
                  {profileDetails?.position === 'Other'
                    ? profileDetails?.position_other
                    : profileDetails?.position}
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
