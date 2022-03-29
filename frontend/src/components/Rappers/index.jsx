import { useState, useEffect } from 'react'
import { ContainerColumn } from '../../utils/styles/balises'
import Search from './Search/index'

function RapperArray({ selectRapper }) {
  const [rapper, setRappers] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/rappeur`)
      .then((response) => response.json())
      .then((requestData) => {
        setRappers(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <ContainerColumn>
      <Search data={rapper} selectRapper={selectRapper} />
    </ContainerColumn>
  )
}

export default RapperArray
