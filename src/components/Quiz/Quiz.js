import React, {useContext} from 'react';
import { QuizContext } from '../../layout/Main';
import QuizItem from '../QuizItem/QuizItem';

const Quiz = () => {

    const quizes = useContext(QuizContext);
    
    return (
        <div>
          <div className="grid grid-cols-4 gap-5 px-20 my-20">
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