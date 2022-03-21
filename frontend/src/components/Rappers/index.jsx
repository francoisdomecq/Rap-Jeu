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

function RapperArray({ selectRapper }) {
  const [rapper, setRappers] = useState([])

  function displayrappers() {
    rapper.sort((a, b) => a.nom.localeCompare(b.nom))
    return rapper.map((rapper) => (
      <LineContainer>
        <Line>
          <RapperName key={rapper._id} onClick={() => selectRapper(rapper.nom)}>
            {rapper.nom}
          </RapperName>
        </Line>
      </LineContainer>
    ))
  }

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
      <TableHead>
        <th>Choisir un rappeur</th>
      </TableHead>
      <TableContainer>
        <Table>
          <TableBody>{displayrappers()}</TableBody>
        </Table>
      </TableContainer>
      <TableBottom>
        <br />
      </TableBottom>
    </Container>
  )
}

export default RapperArray
