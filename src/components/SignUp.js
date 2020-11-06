import React from 'react'

export default class SignUp extends React.Component {
  state = {
    name: '',
    username:'',
    password:''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp({name: this.state.name, username:this.state.username, password:this.state.password})
    this.setState({name: '', username: '', password: ''})
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Username:
          <input value={this.state.username} name="username" type="text" placeholder="username" onChange={this.handleChange}></input>
        </label><br/>
        <label>Password:
          <input value={this.state.password} name="password" type="password" placeholder="password" onChange={this.handleChange}></input>
        </label><br/>
        <label>Name:
          <input value={this.state.name} name="name" type="text" placeholder="Your Name Here" onChange={this.handleChange}></input>
        </label><br/>
        <button type="submit">Sign Up</button>
      </form>
    )
  }
}
