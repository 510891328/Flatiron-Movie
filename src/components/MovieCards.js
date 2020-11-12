import React from 'react'
import { NavLink } from 'react-router-dom'
import imdb from '../images/imdb_rating.png'
const MovieCards = ({ movie, clickHandler, purchased }) => {

  return (
      <div class="card">
      <NavLink to={ { pathname:`/movies/${movie.id}`, state:{purchased: purchased} }}>
        <img src={movie.poster} alt={movie.title} />
        <div class="card-detail">
        <h3>Title: {movie.title}</h3>
          <div>Released Date: {movie.released}</div>
          <div className="imdb_rating"><img src={imdb} alt=""/>{movie.imdb_rating}</div>
          <div>Movie Rated: {movie.rated}</div>
          <div>Price: ${movie.price}</div>
        </div>
      </NavLink>
      </div>
  )
}

export default MovieCards
