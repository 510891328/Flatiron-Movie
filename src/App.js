
import React, { Fragment } from 'react'
import NavBar from './components/NavBar'
import './App.css';
import HomePage from './containers/HomePage'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
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

  logOutHandler = () => {
    this.setState({user: null})
  }


  render () {
    console.log(window.history.push);
    return (
      <BrowserRouter>
        <Fragment>

        <NavBar user={this.state.user} logOutHandler={this.logOutHandler}/>
          <Route path='/movies' component={MoviesContainer} />
          <Route exact path='/' component={HomePage} />
          <Route path ='/login' component={Login} />
          <Route path ='/signup' render={ routerProps => <SignUp signUp={this.signUp} routerProps={routerProps}/> } />
        </Fragment>
      </BrowserRouter>
    );
  }




}

export default App;
