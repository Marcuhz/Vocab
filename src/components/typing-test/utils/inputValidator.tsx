const isValidInput = (code: string) => {
  return (
    code.startsWith('Key') ||
    code.startsWith('Digit') ||
    code === 'Backspace' ||
    code === 'Space'
  );
};

export default isValidInput;
