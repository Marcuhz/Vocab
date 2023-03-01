import React from 'react';
import { Word } from './word';
import TypingTest from './typingTest';
export const Main = () => {
  return (
    <main>
      <header>Typing Test</header>
      <div className="typing-test-container">
        <TypingTest />
      </div>
    </main>
  );
};
