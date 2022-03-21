import React from 'react'
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

function SearchList({ filteredRapper, selectRapper, type }) {
  filteredRapper.sort((a, b) => a.nom.localeCompare(b.nom))
  const filtered = filteredRapper.map((rapper) => (
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
        <th>Choisir un rappeur</th>
      </TableHead>
      <TableContainer>
        <Table>
          <TableBody>{filtered}</TableBody>
        </Table>
      </TableContainer>
      <TableBottom>
        <br />
      </TableBottom>
    </Container>
  )
}

export default SearchList
