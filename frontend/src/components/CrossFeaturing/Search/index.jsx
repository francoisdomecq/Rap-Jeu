import React, { useState } from 'react'
import SearchList from '../SearchList/index'

function Search({ data, selectCrossFeaturing }) {
  const [searchField, setSearchField] = useState('')

  const filteredCrossFeaturings= data.filter((crossFeaturing) => {
    return (
      crossFeaturing.rappeur1.toLowerCase().includes(searchField.toLowerCase()) ||
      crossFeaturing.rappeur2.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  function searchList() {
    return (
      <SearchList
        filteredCrossFeaturing={filteredCrossFeaturings}
        selectCrossFeaturing={selectCrossFeaturing}
      />
    )
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your course</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search People"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  )
}

export default Search
