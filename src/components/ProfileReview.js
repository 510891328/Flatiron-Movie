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
      <div className="reviewContainer">
        {this.state.clicked ? <form className="editForm" onSubmit={this.handleSubmit}><input name="content" type="textarea" value={this.state.editContent} onChange={this.changeHandler}></input><button>Submit Change</button></form> : null}
        <div className='singleReview reviewTitle'>{this.props.review.movie.title}:</div>
        <div className='singleReview reviewContent'>{this.props.review.content}</div>
        <div className='singleReview reviewCreated'>created:{this.props.review.created_at}</div>
        <div className='singleReview reviewButtons'>
          <button onClick={this.formStatus}>Edit</button>
          <button onClick={() => {this.props.deleteHandler(this.props.review.id)} }>Delete</button>
        </div>
      </div>
    )
  }

} 

export default ProfileReview