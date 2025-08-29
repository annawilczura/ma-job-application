'use client';

import texts from '@/constants/texts.json';

export default function ProjectsPage() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 surface-0'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl font-bold text-color mb-8 text-center'>
          {texts.projects.title}
        </h1>
        <p className='text-lg text-color-secondary text-center mb-12'>
          {texts.projects.description}
        </p>
        {/* Projects grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className='surface-100 rounded-lg overflow-hidden shadow-lg'
            >
              <div className='bg-primary h-48 flex items-center justify-center'>
                <span className='text-primary-contrast text-2xl font-bold'>
                  Project {item}
                </span>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-color mb-3'>
                  Project Name {item}
                </h3>
                <p className='text-color-secondary mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className='text-primary hover:text-primary-600 font-medium'>
                  {texts.buttons.viewProject} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
