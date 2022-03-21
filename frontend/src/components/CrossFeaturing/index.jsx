import { useState, useEffect } from 'react'
import { Container } from './styles'
import Search from './Search/index'

function CrossFeaturingArray({ selectCrossFeaturing }) {
  const [crossFeaturing, setCrossFeaturing] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/crossfeaturing`)
      .then((response) => response.json())
      .then((requestData) => {
        setCrossFeaturing(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Container>
      <Search data={crossFeaturing} selectCrossFeaturing={selectCrossFeaturing} />
    </Container>
  )
}

export default CrossFeaturingArray
