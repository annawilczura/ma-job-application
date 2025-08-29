'use client';

import texts from '@/constants/texts.json';

export default function DokumentacjaPage() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 surface-0'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl font-bold text-color mb-8 text-center'>
          {texts.documentation.title}
        </h1>
        <p className='text-lg text-color-secondary text-center mb-12'>
          {texts.documentation.description}
        </p>
        {/* AI documentation content */}
        <div className='space-y-8'>
          <div className='surface-100 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-color mb-4'>
              AI Tools Used in Project
            </h3>
            <p className='text-color-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
          <div className='surface-100 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-color mb-4'>
              AI Workflow Process
            </h3>
            <p className='text-color-secondary'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
