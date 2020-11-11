
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  const logOutHandler = () => {
    props.logOutHandler()
  }

  return (
    <div className="navbar">
      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/movies" className="nav-item">Movies</NavLink>
      {
        props.user ?
        <>
        <NavLink to="/profile" className="nav-item">Profile</NavLink>
        <NavLink to="/" onClick={logOutHandler} className="nav-item">Log Out</NavLink>
        </>
        :
      <>
        <NavLink to="/login" className="nav-item">Login</NavLink>
        <NavLink to="/signup" className="nav-item">Sign Up</NavLink>
      </>
      }
    </div>
  );
};

export default NavBar;
