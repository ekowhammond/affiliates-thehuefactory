'use client';

import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import { AdminNav } from '@/components/admin/nav';
import { FONT_CHAKRA_PETCH, FONT_DM_SANS } from '@/lib/constants';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn(FONT_DM_SANS.className, '')}>
      <div className='fixed top-0 inset-x-0 z-[400]'>
        <AdminNav />
      </div>
      <div className='pt-24'>{children}</div>
      <Toaster position='bottom-right' />
    </div>
  );
}
