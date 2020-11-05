import React, { Component } from 'react'
import MovieCards from '../components/MovieCards'

class MoviesContainer extends Component {


  state = {
    movies: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(movies => {
      this.setState({ movies: movies })
    })
  }

  renderMovies =  () => {
    return this.state.movies.map(movie => <MovieCards key={movie.id} movie={movie} />)
  }

  render() {

    return (
      <div>
        <h1>HELLO THIS IS ALL MOVIES!</h1>
        {this.renderMovies()}
      </div>
    )

  }

}

export default MoviesContainer