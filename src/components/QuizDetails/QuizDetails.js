import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
const quiz = useLoaderData();
 const {name, questions} = quiz.data;
  return (
    <div>
      <h2 className="text-2xl font-bold text-sky-400 my-10">Quiz of {name}</h2>
      <div>
        {questions &&
          questions.map((questionDetails, index) => (
            <Questions
              key={questionDetails.id}
              questionDetails={questionDetails}
              index={index}
            ></Questions>
          ))}
      </div>
    </div>
  );
};

export default QuizDetails;