
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movie">Movies</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </div>
  );
};

export default NavBar;

