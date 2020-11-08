import React, { Component } from 'react'
import MovieCards from '../components/MovieCards'
import { Route, Switch } from 'react-router-dom'
import MovieShowPage from '../components/MovieShowPage'

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
    return this.state.movies.map(movie => {
        return <MovieCards key={movie.id} movie={movie} clickHandler={this.clickHandler}/>
    })
  }

  render() {
    return (

    <Switch>
      <Route path="/movies/:id" render={(routerProps) => {
        let id = parseInt(routerProps.match.params.id)
        let foundMovie
        if (this.state.movies.length > 0) {
            foundMovie = this.state.movies.find(el => el.id === id)
        }
        return (
          <>
            {
              this.state.movies.length > 0 ? <MovieShowPage movie={foundMovie}  />
                :
                <h1>Loading</h1>
            }
          </>
        )
      }} />

      <Route path="/" render={() => {
          return (
              <div>
                  {this.state.movies.length > 0 ? this.renderMovies() : <h1>LOADING</h1>}
              </div>
          )
      }} />

      </Switch>
    )
  }
}

export default MoviesContainer
