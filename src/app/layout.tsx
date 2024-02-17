import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
// import { Footer } from '@/components/Footer';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: 'variable',
});

export const metadata: Metadata = {
  title: 'Anderson Kauer',
  description: 'Portfolio de Anderson Kauer, desenvolvedor front-end',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={jetBrainsMono.className}>{children}</body>
    </html>
  );
}
