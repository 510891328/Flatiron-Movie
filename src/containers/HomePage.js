import React from 'react'
import MoviesContainer from './MoviesContainer'
import { BrowserRouter, Route } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>
        This is HomePage!
        <BrowserRouter>
          <Route path="/movies" components={MoviesContainer}/>
        </BrowserRouter>
      </h1>
    </div>
  )
}

export default HomePage
