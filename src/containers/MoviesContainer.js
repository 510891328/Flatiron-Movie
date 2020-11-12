import React, { Component } from 'react'
import MovieCards from '../components/MovieCards'
import { Route, Switch } from 'react-router-dom'
import MovieShowPage from '../components/MovieShowPage'
import Search from '../components/Search'

class MoviesContainer extends Component {

  state = {
    movies: [],
    searchValue: "",
    sort: "All"
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

  renderTopRated = () => {
    let filteredBySearch = [...this.state.movies]
    let fiveRated = filteredBySearch.sort((a,b) => a.imdb_rating < b.imdb_rating ? 1 : -1).slice(0, 5)
    return fiveRated.map(movie => {
      return <MovieCards key={movie.id} movie={movie} clickHandler={this.clickHandler}/>
    })
  }

  renderNewest = () => {
    let filteredBySearch = [...this.state.movies]

    let fiveNewest = filteredBySearch.sort((a,b) => {
        let aDate = new Date(a.released)
        let bDate = new Date(b.released)
        return aDate < bDate ? 1 : -1
      }).slice(0, 5)
    return fiveNewest.map(movie => {
      return <MovieCards key={movie.id} movie={movie} clickHandler={this.clickHandler}/>
    })
  }

  renderLowestPrice = () => {
    let filteredBySearch = [...this.state.movies]
    let fiveLowest = filteredBySearch.sort((a,b) => a.price > b.price ? 1 : -1).slice(0, 5)
    return fiveLowest.map(movie => {
      return <MovieCards key={movie.id} movie={movie} clickHandler={this.clickHandler}/>
    })
  }

  displayMovies = () => {
    let filteredBySearch = [...this.state.movies]

    if (this.state.searchValue !== "") {
      return filteredBySearch.filter(el => el.title.toLowerCase().includes(this.state.searchValue.toLowerCase())).map(movie => {
        return <MovieCards key={movie.id} movie={movie} clickHandler={this.clickHandler}/>
      })
    }

    switch(this.state.sort){
      case "Alphabetically":
        let alpha = filteredBySearch.sort((a,b) => a.title > b.title ? 1 : -1)
        return alpha.map(movie => {
          return <MovieCards key={movie.id} movie={movie} clickHandler={this.clickHandler}/>
        })

      case "Top Rated":
        let rated = filteredBySearch.sort((a,b) => a.imdb_rating < b.imdb_rating ? 1 : -1)
        return rated.map(movie => {
          return <MovieCards key={movie.id} movie={movie} clickHandler={this.clickHandler}/>
        })

      case "Newest":
        let fiveNewest = filteredBySearch.sort((a,b) => {
          let aDate = new Date(a.released)
          let bDate = new Date(b.released)
          return aDate < bDate ? 1 : -1
        })
      return fiveNewest.map(movie => {
        return <MovieCards key={movie.id} movie={movie} clickHandler={this.clickHandler}/>
      })

        case "Price":
          let price = filteredBySearch.sort((a,b) => a.price < b.price ? 1 : -1)
          return price.map(movie => {
            return <MovieCards key={movie.id} movie={movie} clickHandler={this.clickHandler}/>
          })

      default:
        return filteredBySearch.map(movie => {
          return <MovieCards key={movie.id} movie={movie} clickHandler={this.clickHandler}/>
        })
    }
  }

  searchHandler = (e) => {
    let searchStuff = e.target.value
    this.setState(() => ({
      searchValue: searchStuff
    }))
  }

  updateSort = type  => {
    this.setState({ sort: type })
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
                  this.state.movies.length > 0 ? <MovieShowPage routerProps={this.props.routerProps} movie={foundMovie} user={this.props.user} />
                    :
                  <h1>Loading</h1>
                }
              </>
            )
          }} />

          <Route path="/movies" render={() => {
            return (
              <div>
                <hr />
                <Search searchHandler={this.searchHandler} searchValue={this.state.searchValue}/>
                <hr />
                <div class="search">
                  <label>
                    <strong>Sort Movies By: </strong>
                    <select value={this.state.sort} onChange={(e)=>this.updateSort(e.target.value)}>
                      <option value="All">All</option>
                      <option value="Top Rated">Top Rated</option>
                      <option value="Newest">Newest</option>
                      <option value="Alphabetically">Alphabetically</option>
                      <option value="Price">Price</option>
                    </select>
                  </label>
                </div>
                <hr />
                <div class="cardContainer">
                {this.state.movies.length > 0 ? this.displayMovies() : <h1>LOADING</h1>}
                </div>
              </div>
            )
          }}/>

          <Route path="/" render={() => {
            return (
              <div>
                <h2>Top Rated</h2>
                <div class="cardContainer">
                  {this.state.movies.length > 0 ? this.renderTopRated() : <h1>LOADING</h1>}
                </div>
                  <hr/>
                  <h2>Newest Releases</h2>
                <div class="cardContainer">
                  {this.state.movies.length > 0 ? this.renderNewest() : <h1>LOADING</h1>}
                </div>
                  <h2>Best Deals</h2>
                <div class="cardContainer">
                  {this.state.movies.length > 0 ? this.renderLowestPrice() : <h1>LOADING</h1>}
                </div>
              </div>
            )
          }}/>
        </Switch>
    )
  }
}

export default MoviesContainer
