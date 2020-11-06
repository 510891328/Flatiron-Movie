import React from 'react'


const MovieShowPage = ({ movie }) => {

  return (
  <>
  <h1>Hello! Here are details for {movie.title}</h1>
  <hr/>
    <div>
    <img alt="" src={movie.poster} />
      <h3 >{movie.title}</h3>
    </div> 
  </>
  )
}

export default MovieShowPage