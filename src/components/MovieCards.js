import React from 'react'
import { NavLink } from 'react-router-dom'

const MovieCards = ({ movie, clickHandler }) => {
  
  return (
      <NavLink to={`/movies/${movie.id}`}>
        <img src={movie.poster} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>
          <span>{movie.released}</span>|
          <span>{movie.imdb_rating}</span>|
          <span>{movie.rated}</span>
        </p>
      </NavLink>
  )
}

export default MovieCards
