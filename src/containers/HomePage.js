import React from 'react'
import MoviesContainer from './MoviesContainer'

const HomePage = (props) => {
  return (
    <div className="margin">
      <h1>
        Welcome to MovieSpace!
      </h1>
      <hr/>
      <MoviesContainer user={props.user}/>
    </div>
  )
}

export default HomePage
