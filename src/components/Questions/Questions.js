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
    <div className="mb-16 bg-gray-100 border border-gray-200 mx-auto p-10 option-container">
      <div className="flex items-start justify-between">
        <p className="text-xl text-sky-600 py-5">{question}</p>
        <FontAwesomeIcon
          onClick={eyeBtnHandle}
          className="text-sky-600 cursor-pointer"
          icon={faEye}
        ></FontAwesomeIcon>
        <ToastContainer />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        {options.map((option, index) => (
          <div key={index}>
            <label
              onChange={() => selectBtnHandle(option)}
              key={id}
              className="bg-teal-200 hover:bg-teal-300 rounded-md text-gray-500 font-bold h-24 py-2 flex items-center text-left pl-4 quiz-question-option cursor-pointer"
            >
              <input
                className="mr-3"
                type="radio"
                value={id}
                name="qu"
                key={id}
              />
              {option}
            </label>
            <ToastContainer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;