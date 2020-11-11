  
import React from 'react'

const Search = props => {

  const handleSearch = (e) => {
    props.searchHandler(e)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={props.searchValue} onChange={handleSearch}className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search