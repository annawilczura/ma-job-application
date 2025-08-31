'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeSlug from 'rehype-slug';

interface DocumentationClientProps {
  markdown: string;
}

export default function DocumentationClient({
  markdown,
}: DocumentationClientProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeSlug]}
      components={{
        h1: ({ node, ...props }) => (
          <h1
            className='text-3xl sm:text-4xl font-bold text-color mt-8 mb-4 scroll-mt-20'
            {...props}
          />
        ),
        h2: ({ node, ...props }) => (
          <h2
            className='text-2xl sm:text-3xl font-bold text-color mt-6 mb-4 scroll-mt-20'
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <h3
            className='text-xl sm:text-2xl font-semibold text-color mt-4 mb-4 scroll-mt-20'
            {...props}
          />
        ),
        h4: ({ node, ...props }) => (
          <h4
            className='text-lg sm:text-xl font-semibold text-color mt-4 mb-3 scroll-mt-20'
            {...props}
          />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote
            className='border-l-4 border-gray-400 text-gray-500 p-4 my-4 rounded-r-lg'
            {...props}
          />
        ),
        p: ({ node, ...props }) => (
          <p className='text-color-secondary mb-4 pl-4' {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul
            className='list-disc list-inside text-color-secondary mb-4 [&_ul]:list-[circle] [&_ul]:my-2 [&_ul]:ml-4 pl-4'
            {...props}
          />
        ),
        ol: ({ node, ...props }) => (
          <ol
            className='list-decimal list-inside text-color-secondary mb-4 pl-4'
            {...props}
          />
        ),
        li: ({ node, ...props }) => <li className='mb-2' {...props} />,
        a: ({ node, ...props }) => {
          if (
            props.href &&
            (props.href.startsWith('http') || props.href.startsWith('//'))
          ) {
            return (
              <a
                className='text-primary-500 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
                {...props}
              />
            );
          }

          if (!props.href) {
            return <a {...props} />;
          }

          return (
            <Link
              className='text-primary-500 hover:underline'
              {...props}
              href={props.href}
            />
          );
        },
        img: ({ node, ...props }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className='rounded-lg shadow-md my-8'
            alt={props.alt || ''}
            {...props}
          />
        ),
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              style={coldarkDark}
              language={match[1]}
              PreTag='div'
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code
              className={
                className
                  ? `${className} bg-surface-200 text-color px-1 rounded`
                  : 'bg-surface-200 text-color px-1 rounded'
              }
              {...props}
            >
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
