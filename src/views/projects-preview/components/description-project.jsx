import React from 'react';

const specialWordsInDescription = ['mobile', 'web', 'front-end', 'back-end', 'ios', 'android'];

export const HighlightSpecialWords = ({ text, especialWords = specialWordsInDescription }) => {
  const highlightedText = text.split(' ').map((word, index) => {
    const cleanWord = word.replace(/[^a-zA-Z-]/g, ''); // Para limpiar puntuación si es necesario
    if (especialWords.includes(cleanWord.toLowerCase())) {
      return (
        <span key={index} className="text-yellow-200">
          {word}{' '}
        </span>
      );
    }
    return word + ' ';
  });

  return (
    <p className="dark:text-neutral-100/60 text-[0.8rem] max-w-[600px] text-pretty source-code-pro animate-fade-up animate-delay-[400ms]">
      {highlightedText}
    </p>
  );
};
