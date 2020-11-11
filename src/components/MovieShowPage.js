import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import React from 'react';
import Reviews from './Reviews'
import PopUp from './PopUp'


const MovieShowPage = (props) => {
  const [input, setInput] = useState('')
  const [clicked, setClicked] = useState(false)
  const [message, setMessage] = useState('')
  const [reviews, setReviews] = useState([])
  const [formStatus, setFormStatus] = useState(false)
  const movie = props.movie
  const user = props.user

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${movie.id}/reviews`)
    .then(resp => resp.json())
    .then(review => setReviews(review))
    // eslint-disable-next-line
  },[])

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
      .then(movie => {
        setClicked(true)
        if(movie.message){
          setMessage("You already own this movie!")

        }else{
          setMessage("Thank you for your purchase! Enjoy!")
        }
      })
    }else{
      setClicked(true)
      setMessage("You must be logged in to buy this movie!")
    }
  }

  const closePopUp = () => {
    setClicked(false)
  }


  const handleReview = () => {
    setFormStatus(!formStatus)
  
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
    setInput('')
  }

  const renderReviews = () => {
    return reviews.map(review => <Reviews review={review} key={review.id} />)
  }

  return (
  <>
  {clicked ? <PopUp routerProps={props.routerProps} user={user} message={message} closePopUp={closePopUp}/> : null}
  <hr/>
    <div>
      <div className="left">
        <h3>{movie.title}</h3>
        <img alt="" src={movie.poster} />
      </div>
      <ul className="right margin-li">
        <li>Plot: <span className="detail">{movie.plot}</span></li>
        <li>Actor: <span className="detail">{movie.actors}</span></li>
        {
          movie.awards === 'N/A'? null :<li> award:<span className="detail">{movie.awards}</span> </li>
        }
        <li>Price: <span className="detail">${movie.price}</span></li>
        <li>Country: <span className="detail">{movie.country}</span></li>
        <li>Directors: <span className="detail">{movie.director}</span></li>
        <li>Writer: <span className="detail">{movie.writer}</span></li>
        <li>Runtime: <span className="detail">{movie.runtime}</span></li>
        <li>Released Date: <span className="detail">{movie.released}</span></li>
        <li>Genre: <span className="detail">{movie.genre}</span></li>
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
        <input type="textarea" value={input} name='content' onChange={changeHandler}/>
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
