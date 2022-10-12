import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid grid-cols-2 items-center bg-sky-500 py-6 md:px-20">
      <div className="flex sm:ml-0 ml-5">
        <p className="text-4xl text-white font-bold">
          <Link to="/">Quiezzy</Link>
        </p>
      </div>
      <div className="md:hidden text-right sm:mr-0 mr-5">
        {isOpen ? (
          <FontAwesomeIcon
            className="cursor-pointer text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
            icon={faXmark}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            className="cursor-pointer text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
            icon={faBarsStaggered}
          ></FontAwesomeIcon>
        )}
      </div>
      <ul
        className={`md:flex justify-end items-center absolute mb-display md:static z-20 duration-500 ease-in-out ${
          isOpen ? "top-[85px] bg-sky-500" : "top-[-150px]"
        }`}
      >
        <li className="mr-3 text-white font-semibold pb-2">
          <NavLink to="/">Home</NavLink>
        </li>
        <li
          className={`mr-3 text-white font-semibold pb-2`}
        >
          <NavLink to="/statistics">Statistics</NavLink>
        </li>
        <li
          className={`mr-3 text-white font-semibold pb-2`}
        >
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;