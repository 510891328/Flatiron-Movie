import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Reviews from './Reviews'
import React from 'react'


const MovieShowPage = (props) => {

  const [input, setInput] = useState('')
  const [reviews, setReviews] = useState([])
  const [formStatus, setFormStatus] = useState(false)
  const movie = props.movie
  const user = props.user

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${movie.id}/reviews`)
    .then(resp => resp.json())
    .then(review => setReviews(review))
  }, [])

  const handlePurchase = () => {
    if(user){
      fetch('http://localhost:3000/purchase', {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
          Authorization: `Bearer ${user.jwt}`
        },
        body: JSON.stringify( { movie: movie.id, token: user.jwt } )
      })
      .then(resp => resp.json())
      .then(console.log)
    }else{
      console.log('not signin');
    }
  }

  const handleReview = () => {
    setFormStatus(!formStatus)
    console.log(formStatus)

  }

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  const reviewSubmitHandler = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${user.jwt}`
      },
      body: JSON.stringify({ content: input, movie: movie.id, token: user.jwt })
    })
    .then(resp => resp.json())
    .then(review => {
      setReviews(previousReviews => [...previousReviews, review])
    })
    
  }
  
  const renderReviews = () => {
    return reviews.map(review => <Reviews review={review} key={review.id} />)
  }
  
  return (
  <>
  <h1>Hello! Here are details for {movie.title}</h1>
  <hr/>
    <div>
      <div className="left">
        <h3>{movie.title}</h3>
        <img alt="" src={movie.poster} />
      </div>
      <ul className="right">
        <li>Plot: {movie.plot}</li>
        <li>Actor: {movie.actors}</li>
        {
          movie.awards === 'N/A'? null :<li> award:{movie.awards} </li>
        }
        <li>Country: {movie.country}</li>
        <li>Directors: {movie.director}</li>
        <li>Writer: {movie.writer}</li>
        <li>Runtime: {movie.runtime}</li>
        <li>Released Date: {movie.released}</li>
        <li>Genre: {movie.genre}</li>
        {
          movie.metascore === 'N/A' ? null : <li>Metascore: {movie.metascore}/100</li>
        }
      </ul>
      <h1>Reviews</h1>
      <ol>{renderReviews()}</ol>
      {useLocation().state.purchased ? null : <button onClick={handlePurchase}>Buy Movie</button>}
      {useLocation().state.purchased ? <button onClick={handleReview}>Write Review</button> : null}
    {formStatus ?         
      <form onSubmit={reviewSubmitHandler}>
        <input type="text-area" value={input} name='content' onChange={changeHandler}/>
        <button type="submit">Submit Review</button>
      </form> 
      : 
      null
    }
    </div>
    
  </>
  )
}

export default MovieShowPage;