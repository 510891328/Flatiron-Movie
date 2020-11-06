import React from 'react'
import MoviesContainer from './MoviesContainer'
import { BrowserRouter, Route } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>
        This is HomePage!
      </h1>
      <MoviesContainer />
    </div>
  )
}

export default HomePage
