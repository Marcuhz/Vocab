import { Fragment } from 'react';
import GeneratedWords from './typingTestmod/generatedWords';
import { faker } from '@faker-js/faker';
import UserInput from './typingTestmod/userInput';

let words = faker.random.words(10).toLowerCase();
let letter: string[] = words.split('');

const TypingTest = () => {
  return (
    <Fragment>
      <GeneratedWords words={words} />
      <UserInput letter={letter} />
    </Fragment>
  );
};

export default TypingTest;
