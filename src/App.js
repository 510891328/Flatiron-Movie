
import React, { Fragment } from 'react'
import NavBar from './components/NavBar'
import './App.css';
import HomePage from './containers/HomePage'
import { BrowserRouter, Route } from 'react-router-dom';
import MoviesContainer from './containers/MoviesContainer';
import Login from './components/Login'
import SignUp from './components/SignUp'
class App extends React.Component {

  state = {
    loggedIn: false,
    user: null
  }

  signUp = (user) => {
      const options = {
        method: 'POST',
        headers: {
          'content-type':'application/json',
          'accepts':'application/json'
        },
        body: JSON.stringify({user: user})
      };

      fetch('http://localhost:3000/users', options)
      .then(resp => resp.json())
      .then(user => this.setState({user: user}))
    }

  render () {

    return (
      <BrowserRouter>
        <Fragment>

        <NavBar />
          <Route path='/movies' component={MoviesContainer} />
          <Route exact path='/' component={HomePage} />
          <Route path ='/login' component={Login} />
          <Route path ='/signup' render={ ()=> <SignUp signUp={this.signUp} /> } />
        </Fragment>
      </BrowserRouter>
    );
  }




}

export default App;
