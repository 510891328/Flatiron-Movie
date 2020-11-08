import React from 'react'

class  LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.logIn(this.state, this.props.routerProps)
    console.log(this.props.routerProps);
    // this.state.login ? this.props.routerProps.history.push('/') : console.log('invalid')
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    return (

      <>
        <form onSubmit={this.handleSubmit}>
          <label for="username" >Username</label>
            <input value={this.state.username} name="username" type="text" placeholder="username" onChange={this.handleChange}></input>
            <br/>
          <label for="password" >Password</label>
            <input value={this.state.password} name="password" type="password" placeholder="password" onChange={this.handleChange}></input>
          <button type="submit">Login</button>
        </form>
      </>
    )
  }

}

export default LoginForm
