'use client';

import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import texts from '@/constants/texts.json';

export default function AuthPage() {
  const [password, setPassword] = useState('');

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-8 sm:p-12 md:p-24'>
      <div className='text-center w-full max-w-lg'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-8'>
          {texts.auth.heading}
        </h1>
        <div className='w-full'>
          <InputText
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={texts.auth.placeholder}
            className='w-full p-4 text-xl sm:text-2xl md:text-3xl rounded-lg border-2'
          />
        </div>
      </div>
    </main>
  );
}
