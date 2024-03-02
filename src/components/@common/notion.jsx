import { Image } from '@nextui-org/react';
import { CodeBlock } from './code';

export function Notion({ type, data }) {
  try {
    if (type === 'paragraph') return <Paragraph content={data.rich_text} />;
    if (type === 'heading_1') return <Heading1 content={data.rich_text} />;
    if (type === 'heading_2') return <Heading2 content={data.rich_text} />;
    if (type === 'heading_3') return <Heading3 content={data.rich_text} />;
    if (type === 'quote') return <Quote content={data.rich_text} />;
    if (type === 'image') return <Image src={data.external.url} width={'100%'} />;
    if (type === 'callout') return <Callout content={data.rich_text} />;
    if (type === 'numbered_list_item') return <NumberedItem content={data.rich_text} />;
    if (type === 'bulleted_list_item') return <BulletedItem content={data.rich_text} />;
    if (type === 'code')
      return <CodeBlock color={'default'} code={data.rich_text[0].plain_text} lang={data.language} />;
  } catch {
    return <></>;
  }
}

function BulletedItem({ content }) {
  return (
    <div className="pl-5 flex items-center gap-2">
      <div className="rounded-full min-w-2 min-h-2 bg-neutral-800/70 dark:bg-neutral-200/80"></div>
      <Paragraph content={content} />
    </div>
  );
}

function NumberedItem({ content }) {
  return (
    <div className="pl-5 flex items-center gap-2">
      <div className="rounded-full min-w-2 min-h-2 border-[2px] border-neutral-800/70 dark:border-neutral-200/80"></div>
      <Paragraph content={content} />
    </div>
  );
}

function Paragraph({ content }) {
  // style={{ whiteSpace: 'pre' }}
  return (
    <p className="text-md text-neutral-950/70 dark:text-neutral-200/70">
      {content?.map((p) => {
        if (p.type === 'text') {
          const type = p.annotations;
          if (type.bold)
            return (
              <span key={p.plain_text} className="font-bold">
                {p.plain_text}
              </span>
            );
          if (type.italic)
            return (
              <span key={p.plain_text} className="italic">
                {p.plain_text}
              </span>
            );
          if (type.code)
            return (
              <span
                key={p.plain_text}
                className="p-[3px] bg-neutral-300 text-danger dark:bg-neutral-800 dark:text-red-300/70 scale-95 rounded-lg"
              >
                {p.plain_text}
              </span>
            );
          if (type.underline) {
            return <u key={p.plain_text}>{p.plain_text}</u>;
          } else return p.plain_text;
        } else if (p.type == 'equation') {
          return (
            <span
              key={p.plain_text}
              className="p-[4px] bg-neutral-300 font-bold text-neutral-950/60 dark:bg-neutral-800 dark:text-neutral-200/70 rounded-lg"
            >
              {p.plain_text}
            </span>
          );
        }
      })}
    </p>
  );
}

function Heading1({ content }) {
  return (
    <h1 className="text-3xl text-neutral-950/80 dark:text-neutral-200/90 font-bold">
      {content?.map((p) => {
        if (p.type === 'text') {
          const type = p.annotations;
          if (type.bold)
            return (
              <span key={p.plain_text} className="font-bold">
                {p.plain_text}
              </span>
            );
          if (type.italic)
            return (
              <span key={p.plain_text} className="italic">
                {p.plain_text}
              </span>
            );
          if (type.code)
            return (
              <span key={p.plain_text} className="p-1 bg-neutral-900 text-danger rounded-lg">
                {p.plain_text}
              </span>
            );
          else return p.plain_text;
        }
      })}
    </h1>
  );
}

function Heading2({ content }) {
  return (
    <h2 className="text-2xl text-neutral-950/80 dark:text-neutral-200/90 font-bold">
      {content?.map((p) => {
        if (p.type === 'text') {
          const type = p.annotations;
          if (type.bold)
            return (
              <span key={p.plain_text} className="font-bold">
                {p.plain_text}
              </span>
            );
          if (type.italic)
            return (
              <span key={p.plain_text} className="italic">
                {p.plain_text}
              </span>
            );
          if (type.code)
            return (
              <span key={p.plain_text} className="p-1 bg-neutral-900 text-danger rounded-lg">
                {p.plain_text}
              </span>
            );
          else return p.plain_text;
        }
      })}
    </h2>
  );
}

function Heading3({ content }) {
  return (
    <h3 className="text-xl text-neutral-950/80 dark:text-neutral-200/90 font-bold">
      {content?.map((p) => {
        if (p.type === 'text') {
          const type = p.annotations;
          if (type.bold)
            return (
              <span key={p.plain_text} className="font-bold">
                {p.plain_text}
              </span>
            );
          if (type.italic)
            return (
              <span key={p.plain_text} className="italic">
                {p.plain_text}
              </span>
            );
          if (type.code)
            return (
              <span key={p.plain_text} className="p-1 bg-neutral-900 text-danger rounded-lg">
                {p.plain_text}
              </span>
            );
          else return p.plain_text;
        }
      })}
    </h3>
  );
}

function Quote({ content }) {
  return (
    <blockquote className="w-full border-l-3 border-neutral-950/60 dark:border-neutral-200/40 p-2 my-4">
      <Paragraph content={content} />
    </blockquote>
  );
}

function Callout({ content }) {
  return (
    <div className="px-2 py-4 bg-primary/50 rounded-lg">
      <Paragraph content={content} />
    </div>
  );
}
