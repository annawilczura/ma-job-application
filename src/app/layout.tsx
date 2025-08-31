import { PrimeReactProvider } from 'primereact/api';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'MA Job Application',
  description: 'Job application project for MA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
