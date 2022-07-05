import React from 'react';


const SearchBar = ( {searchChange} ) => {
  return(
    <div classname="">
    <input className="border-2 border-gray-600 w-96 tc h-8 m-auto block" type='search' 
    placeholder='Search for a lens or two'
    onChange={searchChange} />
    </div>
  )
}

export default SearchBar;