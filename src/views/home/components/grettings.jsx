import React, { useState, useEffect } from 'react';

export const RandomizedGreeting = ({ gretting, time = 200 }) => {
  const [displayedText, setDisplayedText] = useState(gretting.split('').map(() => ''));

  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%&&!@#$^&*()_+-=';
    const textArray = gretting.split('');

    textArray.forEach((char, index) => {
      if (char === ' ') {
        // Si el carácter es un espacio, directamente lo asignamos y continuamos
        setDisplayedText((prev) => {
          const newText = [...prev];
          newText[index] = char;
          return newText;
        });
        return;
      }

      const interval = setInterval(() => {
        setDisplayedText((prev) => {
          const newText = [...prev];
          newText[index] = letters[Math.floor(Math.random() * letters.length)];
          return newText;
        });
      }, 50);

      setTimeout(() => {
        clearInterval(interval);
        setDisplayedText((prev) => {
          const newText = [...prev];
          newText[index] = char;
          return newText;
        });
      }, time * (index + 1)); // Delay increases with each character
    });
  }, [gretting]);

  return (
    <h1 className="text-3xl mb-5 capitalize source-code-pro dark:text-neutral-100/80 flex items-center gap-3 animate-fade-up">
      {displayedText.join('')}
    </h1>
  );
};
