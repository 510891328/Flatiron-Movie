import React from 'react'
import { NavLink } from 'react-router-dom'

const MovieCards = ({ movie }) => {

  return (
  <NavLink to={`/movies/${movie.id}`}>
    <div onClick={null}>
      <h3 >{movie.title}</h3>
    </div> 
  </NavLink>
  )
}

export default MovieCards