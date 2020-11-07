import React from 'react'
import MoviesContainer from './MoviesContainer'

const HomePage = (props) => {
  console.log(props.user.jwt)
  return (
    <div>
      <h1>
        This is HomePage!
      </h1>
      <MoviesContainer user={props.user}/>
    </div>
  )
}

export default HomePage
