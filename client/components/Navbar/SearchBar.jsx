import React, { Component } from 'react'
import { Search }  from 'semantic-ui-react'

// this component will handle all the search including results

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <Search placeholder="Search" />
      </div>
    )
  }
}

export default SearchBar
