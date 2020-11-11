
import React, { Fragment } from 'react'
import NavBar from './components/NavBar'
import './App.css';
import HomePage from './containers/HomePage'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import MoviesContainer from './containers/MoviesContainer';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './containers/Profile'

class App extends React.Component {

  state = {
        user: null
      }

  signUp = (user) => {
    const options = {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({user: user})
    };

      fetch('http://localhost:3000/users', options)
      .then(resp => resp.json())
      .then(user => this.setState({ user: user }))
  }

  logIn = (user, routerProps) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({user: user})
    })
    .then(resp => resp.json())
    .then(user => {
      if(user.message){
        console.log('invalid');
      }else{
        this.setState({ user: user })
        routerProps.history.push('/')
      }

    })
  }

  logOutHandler = () => {
    this.setState({ user: null })
  }

  render () {
    return (
      <BrowserRouter>
        <Fragment>
          <NavBar user={this.state.user} logOutHandler={this.logOutHandler}/>
          <Switch>
            <Route path='/movies' render={ routerProps => <MoviesContainer user={this.state.user} routerProps={routerProps} />} />
            <Route path='/login' render={ routerProps => <Login routerProps={routerProps} logIn={this.logIn} /> }/>
            <Route path='/signup' render={ routerProps => <SignUp signUp={this.signUp} routerProps={routerProps}/> } />
            <Route exact path='/' render={ routerProps => <HomePage user={this.state.user} />} />
            {this.state.user? <Route path='/profile' render={ routerProps => <Profile user={this.state.user} routerProps={routerProps} /> } />: <Redirect to="/login" />}
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }

}

export default App;
