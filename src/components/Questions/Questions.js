import React from 'react';
import './Questions.css';

const Questions = ({ questionDetails }) => {

  const {correctAnswer, options, question} = questionDetails;
  return (
    <div className='mb-16'>
      <p className="text-xl text-sky-600 w-[500px] mx-auto py-5">{question}</p>
      <div className="grid grid-cols-2 mx-auto w-[750px] gap-3">
        {options.map((option, index) => (
          <div key={index} className="">
            <div className="bg-sky-200 rounded-md text-gray-500 font-bold h-24 py-2 flex items-center text-left pl-4 quiz-question-option">
              <input className='mr-3' type="radio" name="ques" id="" />
              <div className='radio-btn'></div>
              <p>{option}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;