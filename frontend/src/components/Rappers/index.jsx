import { useState, useEffect } from 'react'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const Container = styled.div`
  width: 30%;
  max-height: 300px;
  overflow-y: scroll;
`
const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  heigth: 100%;
  background-color: ${colors.blue};
  color:${colors.yellow};
  border-radius:20px;

`

const TableHead = styled.thead`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 20%;
  background-color: ${colors.red};
  color:white;
  text-transform:uppercase;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
`

function RappeurArray({selectRappeur}) {
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
              <p key={rappeur.nom} onClick={()=>selectRappeur(rappeur.nom)}>{rappeur.nom}</p>
              <hr />
            </tr>
          ))}
        </tbody>
        
      </Table>
    </Container>
  )
}

export default RappeurArray
