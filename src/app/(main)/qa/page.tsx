'use client';

import texts from '@/constants/texts.json';

export default function QAPage() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 surface-0'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl font-bold text-color mb-8 text-center'>
          {texts.qa.title}
        </h1>
        <p className='text-lg text-color-secondary text-center mb-12'>
          {texts.qa.description}
        </p>
        {/* Q&A content */}
        <div className='space-y-6'>
          {[
            'Category 1',
            'Category 2',
            'Category 3',
            'Category 4',
            'Category 5',
            'Category 6',
            'Category 7',
          ].map((category, index) => (
            <div key={index} className='surface-100 p-6 rounded-lg'>
              <h3 className='text-xl font-semibold text-color mb-4'>
                {category}
              </h3>
              <p className='text-color-secondary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
