import React from 'react';
import icon from '../assets/icons';

export const Nav = () => {
  return (
    <nav>
      <a href="/" id="logo">
        <h1>Vocab</h1>
        {icon.keyboard}
      </a>
    </nav>
  );
};
