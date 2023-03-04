import cn from 'classnames';
import { motion, easeInOut } from 'framer-motion';

const LetterElements = ({
	letters,
	expected,
	words,
}: {
	letters: string[];
	expected: string;
	words: string[];
}) => {
	return (
		<div className={'typed-characters'}>
			{letters.map((char, index) => (
				<Letter
					key={`${char}_${index}`}
					letters={char}
					expected={words[index]}></Letter>
			))}
			<motion.span
				className="cursor"
				initial={{ opacity: 1 }}
				animate={{ opacity: 0 }}
				transition={{ duration: 0.8, repeat: Infinity, ease: easeInOut }}>
				{' '}
				|
			</motion.span>
		</div>
	);
};

const Letter = ({
	letters,
	expected,
}: {
	letters: string;
	expected: string;
}) => {
	const correct = letters === expected;
	const whiteSpace = expected === ' ';

	return (
		<span
			className={cn({
				correct: correct,
				incorrect: !correct,
				'white-space': whiteSpace && !correct,
			})}>
			{expected}
		</span>
	);
};

export default LetterElements;
