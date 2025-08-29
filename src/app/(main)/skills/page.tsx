'use client';

import texts from '@/constants/texts.json';

export default function SkillsPage() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 surface-0'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl font-bold text-color mb-8 text-center'>
          {texts.skills.title}
        </h1>
        <p className='text-lg text-color-secondary text-center mb-12'>
          {texts.skills.description}
        </p>
        {/* Skills grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className='surface-100 p-6 rounded-lg shadow-md'>
              <div className='surface-200 h-12 w-12 rounded-lg mb-4 flex items-center justify-center'>
                <span className='text-primary text-xl font-bold'>{item}</span>
              </div>
              <h3 className='text-xl font-semibold text-color mb-2'>
                Skill Name {item}
              </h3>
              <p className='text-color-secondary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
