import React from 'react'
import ProfileReview from '../components/ProfileReview'

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

  editHandler = (id, content) => {

    fetch(`http://localhost:3000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${this.props.user.jwt}`
      },
      body: JSON.stringify( {content: content} )
    })
    .then(resp => resp.json())
    .then(editedReview =>  {
      let newArray = [...this.state.reviews]
      let foundReview = newArray.find(review => review.id === id)
      newArray[newArray.indexOf(foundReview)] = editedReview
      this.setState({ reviews: newArray })
    })
  }

  deleteHandler = (id) => {
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
    return this.state.reviews.map(review => <ProfileReview key={review.id} review={review} deleteHandler={this.deleteHandler} editHandler={this.editHandler}/>)
  }

  render(){
    return(
      <>
        <h2>Your Authored Reviews</h2>
        {this.renderReviews()}
      </>
    )
  }
}
