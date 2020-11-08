
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  const logOutHandler = () => {
    props.logOutHandler()
  }

  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      {
        props.user ?
        <NavLink to="/" onClick={logOutHandler}>Log Out</NavLink>
        :
      <>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
      }
    </div>
  );
};

export default NavBar;
