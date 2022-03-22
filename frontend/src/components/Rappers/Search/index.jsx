import React, { useState, useEffect } from 'react'
import SearchList from '../SearchList/index'

function Search({ data, selectRapper }) {
  const [searchField, setSearchField] = useState('')

  const filteredRappers = data.filter((rapper) => {
    return rapper.nom.toLowerCase().includes(searchField.toLowerCase())
  })

  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  return (
    <SearchList
      filteredRapper={filteredRappers}
      selectRapper={selectRapper}
      search={handleChange}
    />
  )
}

export default Search
