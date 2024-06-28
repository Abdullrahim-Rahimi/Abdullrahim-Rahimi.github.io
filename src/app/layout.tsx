import type { Metadata } from 'next';
import { Open_Sans, Montserrat, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--open-sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});
export const metadata: Metadata = {
  title: 'Daisy',
  description: 'The Daisy app',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} ${inter.variable} font-openSans`}
        dir="ltr"
      >
        <div className="">
          <Header />
          <div className="pt-[100px]"> {children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
