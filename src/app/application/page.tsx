'use client';

import Navbar from '@/components/Navbar';
import texts from '@/constants/texts.json';

export default function ApplicationPage() {
  return (
    <div className='min-h-screen surface-ground'>
      <Navbar />

      {/* Main Content with proper spacing for fixed navbar */}
      <main className='pt-16'>
        {/* Hero Section */}
        <section
          id='home'
          className='bg-primary text-primary-contrast py-20 px-4 sm:px-6 lg:px-8'
        >
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'>
              {texts.home.title}
            </h1>
            <h2 className='text-xl sm:text-2xl lg:text-3xl font-light mb-8 opacity-90'>
              {texts.home.subtitle}
            </h2>
            <p className='text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed'>
              {texts.home.description}
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id='about' className='py-20 px-4 sm:px-6 lg:px-8 surface-0'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-color mb-8 text-center'>
              {texts.about.title}
            </h2>
            <div className='prose prose-lg max-w-none'>
              <p className='text-lg text-color-secondary leading-relaxed mb-6'>
                {texts.about.description}
              </p>
              {/* Placeholder for actual about content */}
              <div className='surface-100 p-6 rounded-lg'>
                <p className='text-color-secondary italic'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id='skills' className='py-20 px-4 sm:px-6 lg:px-8 surface-100'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-color mb-8 text-center'>
              {texts.skills.title}
            </h2>
            <p className='text-lg text-color-secondary text-center mb-12'>
              {texts.skills.description}
            </p>
            {/* Placeholder for skills grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className='surface-0 p-6 rounded-lg shadow-md'>
                  <div className='surface-200 h-12 w-12 rounded-lg mb-4 flex items-center justify-center'>
                    <span className='text-primary text-xl font-bold'>
                      {item}
                    </span>
                  </div>
                  <h3 className='text-xl font-semibold text-color mb-2'>
                    Skill Name {item}
                  </h3>
                  <p className='text-color-secondary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='py-20 px-4 sm:px-6 lg:px-8 surface-0'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-color mb-8 text-center'>
              {texts.projects.title}
            </h2>
            <p className='text-lg text-color-secondary text-center mb-12'>
              {texts.projects.description}
            </p>
            {/* Placeholder for projects grid */}
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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

        {/* AI Documentation Section */}
        <section
          id='ai-documentation'
          className='py-20 px-4 sm:px-6 lg:px-8 surface-100'
        >
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-color mb-8 text-center'>
              {texts.aiDocumentation.title}
            </h2>
            <p className='text-lg text-color-secondary text-center mb-12'>
              {texts.aiDocumentation.description}
            </p>
            {/* Placeholder for AI documentation content */}
            <div className='space-y-8'>
              <div className='surface-0 p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-color mb-4'>
                  AI Tools Used in Project
                </h3>
                <p className='text-color-secondary'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
              <div className='surface-0 p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-color mb-4'>
                  AI Workflow Process
                </h3>
                <p className='text-color-secondary'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Q&A Section */}
        <section id='qa' className='py-20 px-4 sm:px-6 lg:px-8 surface-0'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-color mb-8 text-center'>
              {texts.qa.title}
            </h2>
            <p className='text-lg text-color-secondary text-center mb-12'>
              {texts.qa.description}
            </p>
            {/* Placeholder for Q&A content */}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id='contact'
          className='py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-contrast'
        >
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold mb-8'>
              {texts.contact.title}
            </h2>
            <p className='text-lg mb-8'>{texts.contact.description}</p>
            <div className='bg-primary-600 p-6 rounded-lg'>
              <p className='opacity-90'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contact
                information placeholder.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='surface-900 text-surface-0 py-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <p>&copy; 2024 {texts.home.title}. Job Application Website.</p>
        </div>
      </footer>
    </div>
  );
}
