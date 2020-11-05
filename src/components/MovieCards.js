import React from 'react'
import Link from 'react-router-dom'

const MovieCards = ({ movie }) => {

  return (
  <div onClick={null}>
    <h3 >{movie.title}</h3>
  </div> 
  
  )
}

export default MovieCards