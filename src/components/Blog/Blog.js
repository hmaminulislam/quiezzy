import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
      <div className="my-20">
        <h2 className="text-5xl text-sky-500 font-semibold mb-4">Blog</h2>
        <h3 className="text-3xl text-gray-500 text-semibold">
          Question and Answer
        </h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 px-20">
          <div className="mt-12 bg-gray-200 p-10">
            <p className="text-lg text-sky-700 mb-5">
              What is the purpose of react-router?
            </p>
            <p>
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL. Let us create a simple application to
              React to understand how the React Router works. The application
              will contain three components: home component, about a component,
              and contact component. We will use React Router to navigate
              between these components.
            </p>
          </div>
          <div className="mt-12 bg-gray-200 p-10">
            <p className="text-lg text-sky-700 mb-5">
              How does the Context Api work?
            </p>
            <p>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </div>
          <div className="mt-12 bg-gray-200 p-10">
            <p className="text-lg text-sky-700 mb-5">How does useRef work?</p>
            <p>
              useRef returns a mutable ref object whose .current property is
              initialized to the passed argument ( initialValue ). The returned
              object will persist for the full lifetime of the component.
              Essentially, useRef is like a “box” that can hold a mutable value
              in its .current property.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;