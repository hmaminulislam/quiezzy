import React, { createContext, useContext, useState } from 'react';
import { QuizContext } from '../../layout/Main';
import QuizDetails from '../QuizDetails/QuizDetails';
import QuizItem from '../QuizItem/QuizItem';

export const QuizIdGetContext = createContext()

const Quiz = () => {

    const quizes = useContext(QuizContext);
    const [quizId, setQuizId] = useState()
    const quizBtnHandle = (id) => {
         setQuizId(id)
    }
    return (
      <QuizIdGetContext.Provider value={quizId}>
        <div>
          <div className="grid grid-cols-4 gap-5 px-20 my-20">
            {quizes.map((quiz) => (
              <QuizItem
                quiz={quiz}
                key={quiz.id}
                quizBtnHandle={quizBtnHandle}
              ></QuizItem>
            ))}
          </div>
          <QuizDetails quizBtnHandle={quizId}></QuizDetails>
        </div>
      </QuizIdGetContext.Provider>
    );
};

export default Quiz;