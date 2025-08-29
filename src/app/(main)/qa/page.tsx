import texts from '@/constants/texts.json';
import { getQADataFromS3 } from '@/lib/aws';
import QAList from '@/components/QAList';

export default async function QAPage() {
  const qaData = await getQADataFromS3();

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 surface-0'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl font-bold text-color mb-8 text-center'>
          {texts.qa.title}
        </h1>
        <p className='text-lg text-color-secondary text-center mb-12'>
          {texts.qa.description}
        </p>
        <QAList data={qaData} />
      </div>
    </section>
  );
}
