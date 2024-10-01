'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useUserStore } from '@/lib/store/user';
import { supabaseClient } from '@/lib/supabase/auth/client';
import { Database } from '@/lib/supabase/db/types';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const formSchema = z.object({
  profile_img: z.instanceof(File).optional(),
  username: z.string().min(2, {
    message: 'Last Name must be at least 2 characters.',
  }),
});

type psd = Database['public']['Tables']['profiles']['Row'];

export default function ProfileForm({ p }: { p: psd }) {
  const [submit, setSubmit] = useState('Send Message');
  const [uploading, setUploading] = useState(false);
  const supabase = supabaseClient();
  const { user } = useUserStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmit('Updating..');

    let profileUrl = '';

    if (values.profile_img) {
      setUploading(true);
      const { data, error } = await supabase.storage
        .from('avatars')
        .upload(`${values.username}-avatar`, values.profile_img);

      if (error) {
        console.error('Error uploading file:', error);
        setSubmit('⛔ Try Again...');
        setUploading(false);
        return;
      }

      profileUrl = supabase.storage.from('avatars').getPublicUrl(data.path)
        .data.publicUrl;
    }

    setUploading(false);

    const { error } = await supabase
      .from('profiles')
      .update({
        avatar_url: profileUrl,
        username: values.username,
      })
      .eq('id', user?.id!);

    if (!error) {
      setSubmit('🎉 Profile Updated');
    } else {
      setSubmit('⛔ Try Again...');
      console.log(error);
    }
  }

  return (
    <div className='w-full flex flex-col max-w-md mx-auto p-4 items-center'>
      <div className='p-4 flex flex-col space-y-2 items-center'>
        <p className='text-xl font-semibold'>Update Your Profile</p>
        <div>
          {!p ? 'No Url' : p.avatar_url}
          {p?.avatar_url ? (
            <Image
              width={176}
              height={176}
              src={p.avatar_url!}
              alt='Avatar'
              className='border border-neutral-200'
              style={{ height: '176px', width: '176px' }}
            />
          ) : (
            <div
              className='border border-neutral-200'
              style={{ height: '176px', width: '176px' }}
            />
          )}
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 items-center flex flex-col'
        >
          <FormField
            control={form.control}
            name='profile_img'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='flex flex-col space-y-4 items-center'>
                    <Input
                      type='file'
                      accept='image/*'
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                      className={cn(buttonVariants())}
                    />
                  </div>
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder='Username'
                    className='border rounded-lg h-auto w-full outline-none border-[#252525] text-neutral-400'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-xs' />
              </FormItem>
            )}
          />
          {/* submitbtn */}

          <Button
            variant={'main'}
            size={'none'}
            type='submit'
            className='ring-offset-accent-100 hover:bg-white hover:text-accent-100 '
          >
            <span>{submit}</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
