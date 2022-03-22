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
  SearchDiv,
} from './styles'
import IconSearch from '../../../assets/ICON_Search.svg'

function SearchList({ filteredRapper, selectRapper, search }) {
  const [rapperInput, setRapperInput] = useState('')
  filteredRapper.sort((a, b) => a.nom.localeCompare(b.nom))

  const filteredData =
    filteredRapper.length > 0 ? (
      filteredRapper.map((rapper) => (
        <LineContainer>
          <Line>
            <RapperName
              key={rapper._id}
              onClick={() => selectRapper(rapper.nom)}
            >
              {rapper.nom}
            </RapperName>
          </Line>
        </LineContainer>
      ))
    ) : (
      <LineContainer>
        <Line>
          <RapperName>Aucun résultat trouvé</RapperName>
        </Line>
      </LineContainer>
    )

  return (
    <Container>
      <TableHead>
        <SearchDiv>
          <TableSearch
            type="search"
            placeholder="Chercher un rappeur"
            onChange={(e) => search(e)}
          />
        </SearchDiv>
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
