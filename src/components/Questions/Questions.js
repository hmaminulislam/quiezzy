import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Questions.css';

const Questions = ({ questionDetails }) => {

  const {correctAnswer, options, question, id} = questionDetails;
  // const [btnSelect, setBtnSelect] = useState()
  const selectBtnHandle = (option) => {
    if(correctAnswer === option) {
      toast.success("Correct Answer")
      // setBtnSelect(true)
    }
    else {
      toast.error("Wrong Answer")
      // setBtnSelect(false)
    }
  };
  const eyeBtnHandle = () => {
    toast.info(correctAnswer)
  }

  return (
    <div className="mb-16 bg-gray-100 border border-gray-200 w-[750px] mx-auto p-10">
      <div className="flex items-start justify-between">
        <p className="text-xl text-sky-600 py-5">{question}</p>
        <FontAwesomeIcon
          onClick={eyeBtnHandle}
          className="text-sky-600 cursor-pointer"
          icon={faEye}
        ></FontAwesomeIcon>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {options.map((option, index) => (
          <div
            key={index}
            className="bg-sky-200 rounded-md text-gray-500 font-bold h-24 py-2 flex items-center text-left pl-4 quiz-question-option"
          >
            <label onChange={() => selectBtnHandle(option)} htmlFor={id}>
              <ToastContainer />
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