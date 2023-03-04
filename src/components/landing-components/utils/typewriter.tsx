import { useState, useEffect } from 'react';
const Typewriter = ({ words }: { words: string }) => {
	let [displayedWords, setDisplayedWords] = useState('');
	let [index, setIndex] = useState(0);

	useEffect(() => {
		if (displayedWords.length < words.length) {
			setTimeout(() => {
				setDisplayedWords((displayedWords += words[index]));
				setIndex((index += 1));
			}, (Math.random() + 20) * 10);
		}
	});

	return <span>{displayedWords}</span>;
};

export default Typewriter;
