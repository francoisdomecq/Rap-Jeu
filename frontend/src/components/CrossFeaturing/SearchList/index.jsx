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

function SearchList({ filteredCrossFeaturing, selectCrossFeaturing }) {
  const filteredData = filteredCrossFeaturing.map((crossFeaturing) => (
    <LineContainer>
      <Line>
        <RapperName
          key={crossFeaturing._id}
          onClick={() => selectCrossFeaturing(crossFeaturing)}
        >
          {crossFeaturing.rappeur1} - {crossFeaturing.rappeur2}
        </RapperName>
      </Line>
    </LineContainer>
  ))
  return (
    <Container>
      <TableHead>
        <th>Choisir un crossFeaturing</th>
      </TableHead>
      <TableContainer>
        <Table>
          <TableBody>{filteredData}</TableBody>
        </Table>
      </TableContainer>
      <TableBottom>
        <br />
      </TableBottom>
    </Container>
  )
}

export default SearchList
