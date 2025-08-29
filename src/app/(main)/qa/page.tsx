'use client';

import { Accordion, AccordionTab } from 'primereact/accordion';
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
        <Accordion className='w-full'>
          {texts.qa.qaContent.map((category, categoryIndex) => (
            <AccordionTab
              key={categoryIndex}
              header={category.category}
              className='mb-4'
            >
              <Accordion className='w-full mt-4'>
                {category.questions.map((qa, questionIndex) => (
                  <AccordionTab
                    key={questionIndex}
                    header={qa.question}
                    className='mb-2'
                  >
                    <div className='p-4 text-color-secondary leading-relaxed'>
                      {qa.answer}
                    </div>
                  </AccordionTab>
                ))}
              </Accordion>
            </AccordionTab>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
