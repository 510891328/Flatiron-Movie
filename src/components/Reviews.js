import React from 'react'

const Reviews = ({review}) => {
  
  return (
    <li>
      By {review.user}: {review.content}
    </li>
  )
}

export default Reviews