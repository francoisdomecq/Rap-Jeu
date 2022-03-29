import React, { useState } from 'react'
import {
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
} from '../../../utils/styles/Tables'
import { ContainerColumn } from '../../../utils/styles/Containers'
import IconSearch from '../../../assets/icons8-chercher.svg'

function SearchList({ filteredRapper, selectRapper, search }) {
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
    <ContainerColumn>
      <TableHead>
        <SearchDiv>
          <TableSearch
            type="search"
            placeholder="Chercher un rappeur"
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
      <TableBottom>
        {/* <input
          type="text"
          placeholder="Choisir un autre rappeur"
          onChange={(e) => setRapperInput(e.target.value)}
        />
        <button onClick={() => selectRapper(rapperInput)} /> */}
      </TableBottom>
    </ContainerColumn>
  )
}

export default SearchList
