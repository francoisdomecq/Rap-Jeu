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
  TableSearch,
  SearchDiv,
} from './styles'
import IconSearch from '../../../assets/icons8-chercher.svg'

function SearchList({ filteredCrossFeaturing, selectCrossFeaturing, search }) {
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
        <SearchDiv>
          <TableSearch
            type="search"
            placeholder="Chercher un featuring"
            onChange={(e) => search(e)}
          />
          <img
            style={{ marginTop: '2%' }}
            src={IconSearch}
            width="50"
            height="50"
            alt="search"
          />
        </SearchDiv>
      </TableHead>
      <TableContainer>
        <Table>
          <TableBody>{filteredData}</TableBody>
        </Table>
      </TableContainer>
      <TableBottom></TableBottom>
    </Container>
  )
}

export default SearchList
