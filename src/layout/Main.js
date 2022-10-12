import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export const QuizContext = createContext();

const Main = () => {
  const quizes = useLoaderData();
  return (
    <div>
      <QuizContext.Provider value={quizes.data}>
          <Navbar></Navbar>
          <Outlet></Outlet>
      </QuizContext.Provider>
    </div>
  );
};

export default Main;
