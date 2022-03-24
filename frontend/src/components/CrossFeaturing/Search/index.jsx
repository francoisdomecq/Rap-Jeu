import React, { useState } from 'react'
import SearchList from '../SearchList/index'

function Search({ data, selectCrossFeaturing }) {
  const [searchField, setSearchField] = useState('')

  const filteredCrossFeaturings = data.filter((crossFeaturing) => {
    return (
      crossFeaturing.rappeur1
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
      crossFeaturing.rappeur2.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  return (
    <SearchList
      filteredCrossFeaturing={filteredCrossFeaturings}
      selectCrossFeaturing={selectCrossFeaturing}
      search={handleChange}
    />
  )
}

export default Search
