'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { login } from '@/app/actions';
import texts from '@/constants/texts.json';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      label={texts.auth.submitButton}
      className='w-full p-4 mt-4 text-xl sm:text-2xl md:text-3xl rounded-lg'
      disabled={pending}
    />
  );
}

export default function AuthPage() {
  const [errorMessage, dispatch] = useFormState(login, undefined);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-8 sm:p-12 md:p-24'>
      <div className='text-center w-full max-w-lg'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-8'>
          {texts.auth.heading}
        </h1>
        <form action={dispatch} className='w-full'>
          <InputText
            id='password'
            name='password'
            type='password'
            placeholder={texts.auth.placeholder}
            className='w-full p-4 text-xl sm:text-2xl md:text-3xl rounded-lg border-2'
            required
          />
          <SubmitButton />
          {errorMessage && <p className='text-red-500 mt-4'>{errorMessage}</p>}
        </form>
      </div>
    </main>
  );
}
