import React from 'react'
import Reviews from './Reviews'

export default class UserInfo extends React.Component {
  state = {
    reviews: []
  }
  componentDidMount(){
    fetch(`http://localhost:3000/users/${this.props.user.user.id}/reviews`, {
      method: 'GET',
      headers: {Authorization: `Bearer ${this.props.user.jwt}`}
    })
    .then(resp => resp.json())
    .then(reviews => this.setState({reviews: reviews}))
  }

  editHandler = () => {

  }

  deleteHandler = (id) => {
    console.log(id);
    this.setState(()=>{
      return {reviews: this.state.reviews.filter(review => review.id !== id)}
    })
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this.props.user.jwt}`
      }
    })
  }

  renderReviews = () => {
    return this.state.reviews.map( review => {
      return(
        <div>
          <span>{review.movie.title}:{review.content} created:{review.created_at}</span>
          <button onClick={this.editHandler}>Edit</button>
          <button onClick={() => {this.deleteHandler(review.id)} }>Delete</button>
        </div>
      )
    })
  }

  render(){
    console.log(this.state.reviews)
    console.log(this.props.user);
    return(
      <>
        <h1>UserInfo</h1>
        {this.renderReviews()}
      </>
    )
  }
}
