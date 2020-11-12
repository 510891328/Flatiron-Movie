import React from 'react'
import { NavLink } from 'react-router-dom'
import imdb from '../images/imdb_rating.png'
const MovieCards = ({ movie, clickHandler, purchased }) => {

  return (
      <div class="card">
      <NavLink to={ { pathname:`/movies/${movie.id}`, state:{purchased: purchased} }}>
        <img src={movie.poster} alt={movie.title} />
        <div class="card-detail">
        <h4 style={{textAlign: "center"}}>{movie.title}</h4>
          <div>Released Date: {movie.released}</div>
          <div className="imdb_rating">IMDB-Rating {movie.imdb_rating} <img src= {imdb} alt=""/></div>
          <div>MPA Rating: {movie.rated}</div>
          <div>Price: ${movie.price}</div>
        </div>
      </NavLink>
      </div>
  )
}

export default MovieCards
