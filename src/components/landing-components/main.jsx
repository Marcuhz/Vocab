import { useEffect, useState } from 'react';
import { easeInOut, motion } from 'framer-motion';
import { Fragment } from 'react';
import Typewriter from './utils/typewriter';
import TypingTest from '../typing-test/typingTest';
import Cursor from './utils/caret';
const Main = () => {
	let [start, setStart] = useState(false);
	//prettier-ignore
	return (
        <Fragment>
            <main>
            {!start && <header>
            welcome to {' '}
            <span className='text'>
                <Typewriter words='vocab' />
            </span>
            <Cursor/>
                </header>}
                
                <motion.button className='start-button'
                    whileHover={{ scale: 1.1}}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.currentTarget.remove();  setStart(current => !current)}}
                >start</motion.button>


                {start && (
                    <motion.div
                        className='game-container'
                        initial={{ opacity: 0 }}
                        animate={{opacity: 1}}
                    >
                        <TypingTest/>              
                    </motion.div>
                )}
            </main>
        </Fragment>
	);
};
export default Main;
