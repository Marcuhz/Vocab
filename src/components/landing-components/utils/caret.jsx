import { motion, easeInOut } from 'framer-motion';

const Cursor = () => {
	return (
		<motion.span
			className="cursor"
			initial={{ opacity: 1 }}
			animate={{ opacity: 0 }}
			transition={{ duration: 0.8, repeat: Infinity, ease: easeInOut }}>
			{' '}
			|
		</motion.span>
	);
};

export default Cursor;
