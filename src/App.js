
import React, { Fragment } from 'react'
import NavBar from './components/NavBar'
import './App.css';
import HomePage from './containers/HomePage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MoviesContainer from './containers/MoviesContainer';
import Login from './components/Login'

class App extends React.Component {

  state = {
    loggedIn: false
  }


  render () {
    
    return (
      <BrowserRouter>
        <Fragment>

        <NavBar />
          <Route path='/movies' component={MoviesContainer} />
          <Route exact path='/' component={HomePage} />
          <Route path ='/login' component={Login} />
        </Fragment>
      </BrowserRouter>
    );
  }




}

export default App;
