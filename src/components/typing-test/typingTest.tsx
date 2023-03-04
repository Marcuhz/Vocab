import { Fragment } from 'react';
import GeneratedWords from './utils/generatedWords';
import { faker } from '@faker-js/faker';
import UserInput from './userInput';

let words = faker.random.words(10).toLowerCase();
let letter: string[] = words.split('');

const TypingTest = () => {
	return (
		<div className="test-container">
			<GeneratedWords words={words} />
			<UserInput letter={letter} />
		</div>
	);
};

export default TypingTest;
