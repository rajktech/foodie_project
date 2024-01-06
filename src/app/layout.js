import {Inter} from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/main-header/main-header';

const inter = Inter ({subsets: ['latin']});

export const metadata = {
  title: 'Next Level Food',
  description: 'Next Level Food description',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
