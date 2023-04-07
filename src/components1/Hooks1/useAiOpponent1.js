import { useEffect, useState } from 'react';

export const useAIOpponent1 = turn => {
  const [aiChoice, setAIChoice] = useState('');

  useEffect(() => {
    if (turn === 1) {
      const options = ['drain','kisameshark','kisameattack','sharkRain'];
      setAIChoice(options[Math.floor(Math.random() * options.length)]);
    }
  }, [turn]);

  return aiChoice;
};
