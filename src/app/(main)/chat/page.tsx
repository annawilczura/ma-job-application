'use client';

import Chat from '@/components/Chat';
import texts from '@/constants/texts.json';

export default function ChatPage() {
  return (
    <section className='flex h-[70vh] max-h-[600px] min-h-[400px] flex-col items-center py-8 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-4xl text-center mb-[10vh]'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
          {texts.chat.heading}
        </h1>
      </div>
      <Chat />
    </section>
  );
}
