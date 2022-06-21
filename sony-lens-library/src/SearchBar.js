import React from 'react';


const SearchBar = ( {searchChange} ) => {
  return(
    <div>
    <input type='search' 
    placeholder='Search for a lens'
    onChange={searchChange} />
    </div>
  )
}

export default SearchBar;