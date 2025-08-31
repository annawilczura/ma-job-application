import { getDocsFromS3, getPresignedUrl } from '@/lib/aws';
import texts from '@/constants/texts.json';
import DocumentationClient from '@/components/DocumentationClient';

export default async function DocumentationPage() {
  let markdown = await getDocsFromS3();

  if (markdown) {
    const imageRegex = /!\[(.*?)\]\((images\/.*?)\)/g;
    const matches = [...markdown.matchAll(imageRegex)];

    for (const match of matches) {
      const originalPath = match[2];
      const presignedUrl = await getPresignedUrl(originalPath);
      if (presignedUrl) {
        markdown = markdown.replace(originalPath, presignedUrl);
      }
    }
  }

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 surface-0'>
      <div className='max-w-5xl mx-auto'>
        <div className='surface-100 p-6 rounded-lg shadow-md'>
          {markdown ? (
            <DocumentationClient markdown={markdown} />
          ) : (
            <p>{texts.documentation.loadError}</p>
          )}
        </div>
      </div>
    </section>
  );
}
