
import React, { Fragment } from 'react'
import NavBar from './components/NavBar'
import './App.css';
import HomePage from './containers/HomePage'
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import MoviesContainer from './containers/MoviesContainer';


const App = () => {
  
  return (
    <BrowserRouter>
      <Fragment>
      <NavBar />
        <Route exact path='/home' component={HomePage} />
        <Route path='/movies' component={MoviesContainer} />
      </Fragment> 
    </BrowserRouter>
  );



}

export default App;
