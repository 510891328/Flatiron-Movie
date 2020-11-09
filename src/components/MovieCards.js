import React from 'react'
import { NavLink } from 'react-router-dom'

const MovieCards = ({ movie, clickHandler, purchased }) => {
  
  return (
      <NavLink to={ { pathname:`/movies/${movie.id}`, state:{purchased: purchased} }}>
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
