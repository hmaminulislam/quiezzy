import React, {useContext} from 'react';
import { QuizContext } from '../../layout/Main';
import QuizItem from '../QuizItem/QuizItem';

const Quiz = () => {

    const quizes = useContext(QuizContext);
    
    return (
        <div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 md:px-20 px-5 my-20">
            {quizes.map((quiz) => (
              <QuizItem
                quiz={quiz}
                key={quiz.id}
              ></QuizItem>
            ))}
          </div>
        </div>
    );
};

export default Quiz;