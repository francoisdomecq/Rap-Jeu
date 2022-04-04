import { useState, useEffect } from 'react'
import { ContainerColumn } from '../../utils/styles/Containers'
import Search from './Search/index'
import { LoaderWrapper, Loader } from '../../utils/styles/Atoms'
import Redbull from '../../assets/PNG/redbull.png'
function RapperArray({ selectRapper, chosenRapper }) {
  const [rapper, setRappers] = useState([])
  const [isDataLoading, setDataLoading] = useState(true)
  useEffect(() => {
    fetch(`http://localhost:3001/api/rappeur`)
      .then((response) => response.json())
      .then((requestData) => {
        setRappers(requestData)
        setDataLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return isDataLoading ? (
    <LoaderWrapper>
      <Loader src={Redbull} />
    </LoaderWrapper>
  ) : (
    <ContainerColumn>
      <Search
        data={rapper}
        selectRapper={selectRapper}
        chosenRapper={chosenRapper}
      />
    </ContainerColumn>
  )
}

export default RapperArray
