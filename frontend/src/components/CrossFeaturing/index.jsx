import { useState, useEffect } from 'react'
import { ContainerColumn } from '../../utils/styles/Containers'
import Search from './Search/index'
import { LoaderWrapper, Loader } from '../../utils/styles/Atoms'
import Redbull from '../../assets/PNG/redbull.png'
function CrossFeaturingArray({ selectCrossFeaturing }) {
  const [isDataLoading, setDataLoading] = useState(true)
  const [crossFeaturing, setCrossFeaturing] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/crossfeaturing`)
      .then((response) => response.json())
      .then((requestData) => {
        setCrossFeaturing(requestData)
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
        data={crossFeaturing}
        selectCrossFeaturing={selectCrossFeaturing}
      />
    </ContainerColumn>
  )
}

export default CrossFeaturingArray
