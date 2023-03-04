import recordInput from './utils/recordInput';
import LetterElements from './letters';

const UserInput = ({ letter }: { letter: string[] }) => {
  const { typed } = recordInput();
  let expected = letter[typed.length - 1];

  return (
    <LetterElements
      letters={typed.split('')}
      expected={expected}
      words={letter}
    />
  );
};

export default UserInput;
