import React from 'react';

const Question = (props) => {
  
  const {question} = props;

  return(
    <div>
      {question}
    </div>
  );
};

export default Question;