import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuizIdSetContext } from '../../layout/Main';

const QuizItem = ({quiz}) => {
    const quizBtnHandle = useContext(QuizIdSetContext)
    const {id, name, logo, total} = quiz;
    return (
      <div className="rounded-md bg-gray-200">
        <img className="" src={logo} alt="" />
        <p className="text-2xl text-gray-600 my-5">{name}</p>
        <div className="flex justify-between items-center px-3 py-4 border-t-2 border-sky-200">
          <p className="text-sky-400 font-bold">Quiz: {total}</p>
          <button>
            <Link
              to={"quiz/" + id}
              onClick={() => quizBtnHandle(id)}
              className="bg-sky-400 text-white font-semibold py-2 px-4 rounded-sm"
            >
              Start Practice
              <FontAwesomeIcon
                className="ml-2"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </Link>
          </button>
        </div>
      </div>
    );
};

export default QuizItem;