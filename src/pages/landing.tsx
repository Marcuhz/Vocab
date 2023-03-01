import React from 'react';
import { Nav } from '../components/nav';
import { Main } from '../components/main';
import { Fragment } from 'react';
import '../assets/style.scss';
export const Landing = () => {
  return (
    <Fragment>
      <Nav />
      <Main />
    </Fragment>
  );
};
