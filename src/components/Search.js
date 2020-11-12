
import React from 'react'

const Search = props => {

  const handleSearch = (e) => {
    props.searchHandler(e)
  }

  return (
    <div className="search">
      <div className="input">
        <strong>Search Movie by Title: </strong>
        <input value={props.searchValue} onChange={handleSearch}className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
