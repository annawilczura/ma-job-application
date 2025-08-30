'use client';

import Chat from '@/components/Chat';
import texts from '@/constants/texts.json';

export default function ChatPage() {
  return (
    <section className='flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-4xl text-center mb-8'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
          {texts.chat.title}
        </h1>
        <h2 className='text-xl sm:text-2xl lg:text-3xl font-light opacity-90'>
          {texts.chat.subtitle}
        </h2>
      </div>
      <Chat />
    </section>
  );
}
