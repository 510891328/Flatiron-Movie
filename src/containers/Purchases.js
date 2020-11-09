import React from 'react'
import MovieCards from '../components/MovieCards'

class Purchases extends React.Component {
  state = {
    user: this.props.user,
    allPurchase: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/profile', {method: 'GET', headers:{ Authorization: `Bearer ${this.state.user.jwt}`}})
    .then(resp => resp.json())
    .then(data => this.setState({allPurchase: data.user.purchases}))
  }
  renderMovies = () => {
    return this.state.allPurchase.map(purchase => <MovieCards key={purchase.id} movie={purchase} purchased />)
  }
  render(){
    console.log(this.state.allPurchase);
    return(this.renderMovies())
  }
}

export default Purchases
