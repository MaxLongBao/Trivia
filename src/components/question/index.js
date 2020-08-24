import React, { useState, useEffect } from 'react';

const Question = (props) => {
  
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
  return(
    <div>
      {question}
    </div>
  );
};

export default Question;