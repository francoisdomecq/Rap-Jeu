import { useState, useEffect } from 'react'
import {
  Container,
  Table,
  TableHead,
  TableBody,
  Line,
  LineSeparator,
  LineContainer,
} from './styles'

function RappeurArray({ selectRappeur }) {
  const [rappeur, setRappeurs] = useState([])

  function displayRappeurs() {
    rappeur.sort((a, b) => a.nom.localeCompare(b.nom))
    return rappeur.map((rappeur) => (
      <LineContainer>
        <Line>
          <p key={rappeur._id} onClick={() => selectRappeur(rappeur.nom)}>
            {rappeur.nom}
          </p>
        </Line>
      </LineContainer>
      
    ))
  }

  useEffect(() => {
    fetch(`http://localhost:3001/api/rappeur`)
      .then((response) => response.json())
      .then((requestData) => {
        setRappeurs(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Container>
      {console.log(rappeur)}
      <Table>
        <TableHead>
          <th>Choisir un rappeur</th>
        </TableHead>
        <TableBody>{displayRappeurs()}</TableBody>
      </Table>
    </Container>
  )
}

export default RappeurArray
