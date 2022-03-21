import React, { useState, useEffect } from 'react'
import SearchList from '../SearchList/index'

function Search({ data, selectRapper, type }) {
  const [searchField, setSearchField] = useState('')

  const filteredRappers =
    type === 'rapper'
      ? data.filter((rapper) => {
          return rapper.nom.toLowerCase().includes(searchField.toLowerCase())
        })
      : data.filter((featurings) => {
          return (
            featurings.rappeur1
              .toLowerCase()
              .includes(searchField.toLowerCase()) ||
            featurings.rappeur2
              .toLowerCase()
              .includes(searchField.toLowerCase())
          )
        })

  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  function searchList() {
    return (
      <SearchList
        filteredRapper={filteredRappers}
        selectRapper={selectRapper}
        type={type}
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
