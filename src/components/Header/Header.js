import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <div className="header-container flex items-center bg-skey-300">
        <div className="max-w-screen-sm mx-auto">
          <h2 className="text-5xl font-semibold text-white mb-7">
            Get Ready to Quiz
          </h2>
          <p className="text-white">
            JavaScript is the world's most popular programming language.React is
            a JavaScript library for building user interfaces. React is used to
            build single-page applications. React allows us to create reusable
            UI components. CSS is the language we use to style an HTML
            document.Git is a version control system. Git helps you keep track
            of code changes. Git is used to collaborate on code.
          </p>
        </div>
      </div>
    );
};

export default Header;