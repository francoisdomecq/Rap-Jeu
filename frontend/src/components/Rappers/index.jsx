import { useState, useEffect } from 'react'
import {
  Container,
  Table,
  TableHead,
  TableBody,
  Line,
  LineContainer,
  TableContainer,
  TableBottom,
  RapperName,
} from './styles'

import Search from '../Search/index'

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
    <Container>
      <Search data={rapper} selectRapper={selectRapper} type="rapper" />
    </Container>
  )
}

export default RapperArray
