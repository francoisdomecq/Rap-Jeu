import { useState, useEffect } from 'react'
import styled from 'styled-components'

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
  background-color: #001c39;
  width: 100%;
  heigth: 100%;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  scrollbar-color:red;
`

const TableHead = styled.thead`
  display: flex;
  justify-content: center;
  width: 100%;&
  height: 10%;
  background-color: #db0a40;
  color:white;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
`

function RappeurArray() {
  const [rappeur, setRappeurs] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/rappeur`)
      .then((response) => response.json())
      .then((requestData) => {
        console.log(requestData)
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
              <p key={rappeur._id}>{rappeur.nom}</p>
              <hr />
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default RappeurArray
