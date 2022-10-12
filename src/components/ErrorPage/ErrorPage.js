import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
      <div className="mt-20">
        <h2 className="text-6xl font-bold text-red-600">{error.status}</h2>
        <h2 className="text-3xl font-semibold mt-4">{error.statusText}</h2>
        <button className="py-2 px-5 bg-sky-400 text-semibold text-xl text-white mt-6">
          <Link to="/">Home</Link>
        </button>
      </div>
    );
};

export default ErrorPage;