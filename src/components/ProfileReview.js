import React from 'react'

class ProfileReview extends React.Component {

  state = {
    clicked: false,
    content: ""
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.editHandler(this.props.review.id, this.state.content)
    this.setState({ clicked: false, content: "" })
  }

  formStatus = () => {
    this.setState(previousState => {
      return { clicked: !previousState.clicked }
    })
  }

  render() {
    return(
      <div>
        {this.state.clicked ? <form onSubmit={this.handleSubmit}><input name="content" type="textarea" value={this.state.editContent} onChange={this.changeHandler}></input><button>Submit Change</button></form> : null}
        
        <span>{this.props.review.movie.title}:{this.props.review.content} created:{this.props.review.created_at}</span>
        <button onClick={this.formStatus}>Edit</button>
        <button onClick={() => {this.props.deleteHandler(this.props.review.id)} }>Delete</button>
      </div>
    )
  }

} 

export default ProfileReview