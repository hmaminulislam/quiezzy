import React from "react";
import './Statistics.css';
import { useLoaderData } from "react-router-dom";
import {
  BarChart, 
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const quiz = useLoaderData();
  const data = quiz.data;
  return (
    <div className="chart-container">
      <h2 className="text-5xl font-bold text-sky-400 mt-10 mb-5">Quiz Chart</h2>
      <BarChart width={400} height={400} data={data}>
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};

export default Statistics;
