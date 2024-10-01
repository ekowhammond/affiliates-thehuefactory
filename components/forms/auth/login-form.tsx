'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseClient } from '@/lib/supabase/auth/client';
import { useUserStore } from '@/lib/store/user';

const FormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6),
});

export default function LoginForm() {
  const router = useRouter();
  const { updateUser } = useUserStore((state) => state);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [submit, setSubmit] = useState('Login');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (d: z.infer<typeof FormSchema>) => {
    return new Promise(async (resolve, reject) => {
      const supabase = supabaseClient();

      const { data, error } = await supabase.auth.signInWithPassword({
        email: d.email,
        password: d.password,
      });

      if (error) {
        console.log(error);
        reject(error);
      }
      updateUser(data.user);
      resolve(data);
      router.push('/dashboard');
      router.refresh();
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          return toast.promise(onSubmit(data), {
            loading: 'Logging in...',
            success: (data: any) => `Logged in as ${data.user?.email}`,
            error: (err) => `Error: ${err.message}`,
          });
        })}
        className='w-full md:w-80 space-y-4 my-2'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='pl-2'>Email</FormLabel>
              <FormControl>
                <Input
                  className='w-full'
                  type='email'
                  placeholder='Email'
                  {...field}
                />
              </FormControl>
              <FormMessage className='pl-2' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='pl-2'>Password</FormLabel>
              <FormControl>
                <div className='flex h-10 w-full items-center space-x-2 relative'>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    className='w-full'
                    placeholder='Password'
                    {...field}
                  />
                  <span
                    className='p-2 cursor-pointer absolute right-0 top-0'
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className='h-6 w-6 text-gray-400' />
                    ) : (
                      <Eye className='h-6 w-6 text-gray-400' />
                    )}
                  </span>
                </div>
              </FormControl>
              <FormMessage className='pl-2' />
            </FormItem>
          )}
        />
        <Button className='w-full h-10' type='submit'>
          {submit}
        </Button>
      </form>
    </Form>
  );
}
