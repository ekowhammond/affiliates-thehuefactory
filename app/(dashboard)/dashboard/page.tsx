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
      <section className='p-4'>
        <h2 className='text-2xl font-medium'>
          Hey, {profile?.full_name || 'There'}
        </h2>
      </section>
    </main>
  );
}
