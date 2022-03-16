import { useState, useEffect } from 'react'
import { Container, Table, TableHead } from './styles'


function RappeurArray({ selectRappeur }) {
  const [rappeur, setRappeurs] = useState([])
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
      <Table>
        <TableHead>
          <tr>
            <th>Choisir un rappeur</th>
          </tr>
        </TableHead>
        <tbody>
          {rappeur.map((rappeur) => (
            <tr>
              <p key={rappeur.nom} onClick={() => selectRappeur(rappeur.nom)}>
                {rappeur.nom}
              </p>
              <hr />
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default RappeurArray
