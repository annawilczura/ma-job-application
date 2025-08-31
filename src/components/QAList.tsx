'use client';

import { Accordion, AccordionTab } from 'primereact/accordion';
import type { QACategory } from '@/lib/aws';
import texts from '@/constants/texts.json';

interface QAListProps {
  data: QACategory[];
}

export default function QAList({ data }: QAListProps) {
  if (!data || data.length === 0) {
    return <p>{texts.qa.loadError}</p>;
  }

  return (
    <Accordion className='w-full'>
      {data.map((category, categoryIndex) => (
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
  );
}
