'use client';

import texts from '@/constants/texts.json';

export default function ContactPage() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-contrast'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-8'>
          {texts.contact.title}
        </h1>
        <p className='text-lg mb-8'>{texts.contact.description}</p>
        <div className='bg-primary-600 p-6 rounded-lg'>
          <p className='opacity-90'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contact
            information placeholder.
          </p>
        </div>
      </div>
    </section>
  );
}
