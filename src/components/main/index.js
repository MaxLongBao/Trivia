import React, { useState, useEffect } from 'react';
import Topics from '../topics';
import Level from '../level';
import Question from '../question';

const Main = () => {

  const [question, setQuestion] = useState();

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=1&category=22&difficulty=medium&type=multiple')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.results[0]);
          setQuestion(result.results[0].question);
        }
      )
  }, []);

  return (
    <div>
      Trivia App
      <Topics />
      <Level />
      <Question question={question} />
    </div>
  )
};

export default Main;