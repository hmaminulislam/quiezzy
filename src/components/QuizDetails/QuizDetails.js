import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { QuizIdGetContext } from '../Quiz/Quiz';

const QuizDetails = () => {
  const quizId = useContext(QuizIdGetContext);
  const [quiz, setquiz] = useState([])

 useEffect(() => {
   const loaderData = async () => {
     const res = await axios.get(
       `https://openapi.programming-hero.com/api/quiz/${quizId}`
     );
     setquiz(res.data.data);
   };
   loaderData();
 }, [quizId]);
 console.log(quiz)
  return (
    <div>
        
    </div>
  );
};

export default QuizDetails;