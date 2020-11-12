import React from 'react'

const Reviews = ({review}) => {
  
  return (
    <div className="reviewContainer">
      <div className="reviewUser">By {review.user}:</div> <div className="reviewContent">{review.content}</div>
    </div>
  )
}

export default Reviews