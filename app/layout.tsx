import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from '@/lib/utils';
import { FONT_CHAKRA_PETCH } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Affiliates Thehuefactory',
  description: 'Affiliates of thehuefactory.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(FONT_CHAKRA_PETCH.className, 'antialiased')}>
        {children}
      </body>
    </html>
  );
}
