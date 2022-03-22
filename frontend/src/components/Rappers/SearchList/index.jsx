import React, { useState } from 'react'
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
  TableSearch,
} from './styles'

function SearchList({ filteredRapper, selectRapper, search }) {
  const [rapperInput, setRapperInput] = useState('')
  filteredRapper.sort((a, b) => a.nom.localeCompare(b.nom))

  const filteredData = filteredRapper.map((rapper) => (
    <LineContainer>
      <Line>
        <RapperName key={rapper._id} onClick={() => selectRapper(rapper.nom)}>
          {rapper.nom}
        </RapperName>
      </Line>
    </LineContainer>
  ))

  return (
    <Container>
      <TableHead>
        <p>Choisir un rappeur</p>
        <TableSearch
          type="search"
          placeholder="Chercher un rappeur"
          onChange={(e) => search(e)}
        />
      </TableHead>
      <TableContainer>
        <Table>
          <TableBody>{filteredData}</TableBody>
        </Table>
      </TableContainer>
      <TableBottom>
        {/* <input
          type="text"
          placeholder="Choisir un autre rappeur"
          onChange={(e) => setRapperInput(e.target.value)}
        />
        <button onClick={() => selectRapper(rapperInput)} /> */}
      </TableBottom>
    </Container>
  )
}

export default SearchList
