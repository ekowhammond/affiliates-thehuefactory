// import localFont from 'next/font/local';

// Next Google Fonts
import { Montserrat, DM_Sans, Chakra_Petch } from 'next/font/google';

// Default Fonts
export const FONT_MONTSERRAT = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-montserrat',
});
export const FONT_DM_SANS = DM_Sans({
  weight: ['300', '400', '500', '600', '700'],
  preload: true,
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-dm_sans',
});
export const FONT_CHAKRA_PETCH = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  adjustFontFallback: false,
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  variable: '--font-chakra-petch',
});
