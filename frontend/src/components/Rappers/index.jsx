import { useState, useEffect } from 'react'
import { ContainerColumn } from '../../utils/styles/Containers'
import Search from './Search/index'

function RapperArray({ selectRapper,chosenRapper }) {
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
      <Search data={rapper} selectRapper={selectRapper} chosenRapper={chosenRapper}/>
    </ContainerColumn>
  )
}

export default RapperArray
