'use client';

import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import texts from '@/constants/texts.json';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const currentYear = new Date().getFullYear();
  return (
    <div className='min-h-screen surface-ground flex flex-col'>
      <Navbar />

      {/* Main Content with proper spacing for fixed navbar and flex-grow for sticky footer */}
      <main className='pt-16 flex-grow'>{children}</main>

      {/* Footer */}
      <footer className='surface-900 text-surface-0 py-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <p>
            &copy; {currentYear} {texts.navigation.title}.{' '}
            {texts.footer.subtitle}
          </p>
        </div>
      </footer>
    </div>
  );
}
