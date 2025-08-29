'use client';

import texts from '@/constants/texts.json';

export default function ChatPage() {
  return (
    <section className='bg-primary text-primary-contrast py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'>
          {texts.chat.title}
        </h1>
        <h2 className='text-xl sm:text-2xl lg:text-3xl font-light mb-8 opacity-90'>
          {texts.chat.subtitle}
        </h2>
        <p className='text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed'>
          {texts.chat.description}
        </p>
      </div>
    </section>
  );
}
