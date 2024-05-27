import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typeCharacter = () => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
        setTimeout(typeCharacter, speed);
      }
    };
    typeCharacter();

    // Cleanup function to clear the timeout if the component unmounts
    return () => {
      clearTimeout(typeCharacter);
    };
  }, [text, speed]);

  return displayText;
};

export default useTypewriter;
