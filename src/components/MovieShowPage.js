
import React from 'react'


const MovieShowPage = ({ movie }) => {
  console.log(movie);
  return (
  <>
  <h1>Hello! Here are details for {movie.title}</h1>
  <hr/>
    <div>
      <div className="left">
        <h3>{movie.title}</h3>
        <img alt="" src={movie.poster} />
      </div>
      <ul className="right">
        <li>Plot: {movie.plot}</li>
        <li>Actor: {movie.actors}</li>
        {
          movie.awards === 'N/A'? null :<li> award:{movie.awards} </li>
        }
        <li>Country: {movie.country}</li>
        <li>Directors: {movie.director}</li>
        <li>Writer: {movie.writer}</li>
        <li>Runtime: {movie.runtime}</li>
        <li>Released Date: {movie.released}</li>
        <li>Genre: {movie.genre}</li>
        {
          movie.metascore === 'N/A' ? null : <li>Metascore: {movie.metascore}/100</li>
        }
      </ul>
    </div>
  </>
  )
}

export default MovieShowPage;
