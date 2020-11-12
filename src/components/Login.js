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

    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    return (

      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label for="username" >Username</label>
            <input value={this.state.username} name="username" type="text" placeholder="username" onChange={this.handleChange}></input>
            <br/>
          <label for="password" >Password</label>
            <input value={this.state.password} name="password" type="password" placeholder="password" onChange={this.handleChange}></input>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }

}

export default LoginForm
