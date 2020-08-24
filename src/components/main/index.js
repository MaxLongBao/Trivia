import React from 'react';
import Topics from '../topics';
import Level from '../level';
import Question from '../question';

const Main = () => {
  return (
    <div>
      Trivia App
      <Topics />
      <Level />
      <Question />
    </div>
  )
};

export default Main;