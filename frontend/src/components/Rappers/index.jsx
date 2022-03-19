import { useState, useEffect } from 'react'
import {
  Container,
  Table,
  TableHead,
  TableBody,
  Line,
  LineContainer,
} from './styles'

function RapperArray({ selectRapper }) {
  const [rapper, setRappers] = useState([])

  function displayrappers() {
    rapper.sort((a, b) => a.nom.localeCompare(b.nom))
    return rapper.map((rapper) => (
      <LineContainer>
        <Line>
          <p key={rapper._id} onClick={() => selectRapper(rapper.nom)}>
            {rapper.nom}
          </p>
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
      <Table>
        <TableHead>
          <th>Choisir un rappeur</th>
        </TableHead>
        <TableBody>{displayrappers()}</TableBody>
      </Table>
    </Container>
  )
}

export default RapperArray
