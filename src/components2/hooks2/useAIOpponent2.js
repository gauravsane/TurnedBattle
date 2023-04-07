import { useEffect, useState } from 'react';

export const useAIOpponent2 = turn => {
  const [aiChoice, setAIChoice] = useState('');

  useEffect(() => {
    if (turn === 1) {
      const options = ['snekclone','bodyreplacement','snekstriking','sagejutsu','wind'];
      setAIChoice(options[Math.floor(Math.random() * options.length)]);
    }
  }, [turn]);

  return aiChoice;
};