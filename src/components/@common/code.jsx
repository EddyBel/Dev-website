import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code, Button } from '@nextui-org/react';
import { IoCopy } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';

export function CodeBlock({ code, theme, lang, color }) {
  const [copy, setCopy] = useState(false);
  const style = !theme ? dracula : theme;
  const background = !color ? 'primary' : color;
  console.log(lang);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => setCopy(false), 5000);
  };

  return (
    <Code color={background} className="relative">
      <div className="p-2 bg-neutral-950 rounded-md w-[fit-content] mt-2 capitalize opacity-85">{lang}</div>
      <SyntaxHighlighter
        language={!lang ? 'javascript' : FormatterLang(lang)}
        style={style}
        customStyle={{ background: 'transparent' }}
        showLineNumbers={true}
      >
        {code}
      </SyntaxHighlighter>
      <Button
        isIconOnly
        color={copy ? 'success' : background}
        variant="shadow"
        aria-label="Take a photo"
        className="absolute right-2 top-3"
        onPress={copyCode}
      >
        {copy ? <FaCheck /> : <IoCopy />}
      </Button>
    </Code>
  );
}

function FormatterLang(lang) {
  if (lang === 'c++') return 'cpp';
  if (lang === 'c#') return 'csharp';
  if (lang === 'visual basic') return 'vb';
  if (lang == 'assembly') return 'python';
  return lang;
}
