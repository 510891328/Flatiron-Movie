import React from 'react'
import { NavLink } from 'react-router-dom'

const MovieCards = ({ movie, clickHandler }) => {

  return (
      <NavLink to={`/movies/${movie.id}`}>
        <h3>{movie.title}</h3>
      </NavLink>
  )
}

export default MovieCards
