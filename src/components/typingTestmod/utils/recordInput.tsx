import { useCallback, useEffect, useState } from 'react';
import isValidInput from './inputValidator';
const recordInput = () => {
  const [input, setInput] = useState<string>('');
  const [typed, setTyped] = useState<string>('');

  const keydownHandler = useCallback(({ key, code }: KeyboardEvent) => {
    if (!isValidInput(code)) return;
    switch (key) {
      case 'Backspace':
        setInput('backSpace');
        setTyped((prev) => prev.slice(0, -1));
        break;
      default:
        setInput(key);
        setTyped((prev) => prev.concat(key));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);

    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [keydownHandler]);
  return { input, typed };
};

export default recordInput;
