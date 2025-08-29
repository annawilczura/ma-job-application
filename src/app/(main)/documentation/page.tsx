import { getDocsFromS3 } from '@/lib/aws';
import texts from '@/constants/texts.json';
import DocumentationClient from '@/components/DocumentationClient';

export default async function DokumentationPage() {
  const markdown = await getDocsFromS3();

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 surface-0'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl font-bold text-color mb-8 text-center'>
          {texts.documentation.title}
        </h1>
        <p className='text-lg text-color-secondary text-center mb-12'>
          {texts.documentation.description}
        </p>
        <div className='surface-100 p-6 rounded-lg shadow-md'>
          {markdown ? (
            <DocumentationClient markdown={markdown} />
          ) : (
            <p>Failed to load documentation.</p>
          )}
        </div>
      </div>
    </section>
  );
}
