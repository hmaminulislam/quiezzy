import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <div className="header-container flex items-center z-0">
        <div className="max-w-screen-sm mx-auto">
          <h2 className="text-5xl font-semibold text-white mb-7">
            English Grammar Quiz
          </h2>
          <p className="text-white">
            Iguru has a first rate academic program, a fully qualified. With
            over 50 years of experience teaching English around the world, we
            know that no two learners are the same. That’s why we tailor our
            course to your learning level, motivations and lifestyle. Set your
            level!
          </p>
        </div>
      </div>
    );
};

export default Header;