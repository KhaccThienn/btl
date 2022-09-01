import React from 'react'
import Infomation from './Components/Info'
import Navigation from './Components/Navigation';
import SearchBar from './Components/Searchbar/index';

function Headers() {
  return (
    <div className="sticky-top">
      <Infomation />
      <SearchBar />
      <Navigation />
    </div>
  )
}

export default Headers