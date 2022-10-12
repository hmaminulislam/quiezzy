import React, { useState } from 'react';
import QuestionOption from '../QuestionOption/QuestionOption';
import './Questions.css';

const Questions = ({ questionDetails }) => {

  const {correctAnswer, options, question, id} = questionDetails;
  const [btnSelect, setBtnSelect] = useState()
  const selectBtnHandle = (option) => {
    if(correctAnswer === option) {
      setBtnSelect(true)
    }
    else {
      setBtnSelect(false)
    }
  };
  console.log(btnSelect)
  return (
    <div className="mb-16">
      <p className="text-xl text-sky-600 w-[500px] mx-auto py-5">{question}</p>
      <div className="grid grid-cols-2 mx-auto w-[750px] gap-3">
        {options.map((option) => (
          <div className="bg-sky-200 rounded-md text-gray-500 font-bold h-24 py-2 flex items-center text-left pl-4 quiz-question-option">
            <label onChange={()=> selectBtnHandle(option)} htmlFor={id}>
              <input className="mr-3" type="radio" name={id} id={id} />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;