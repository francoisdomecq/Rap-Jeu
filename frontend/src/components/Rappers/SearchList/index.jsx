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
  Container,
} from '../../../utils/styles/Tables'

import IconSearch from '../../../assets/icons8-chercher.svg'

//Ce composant affiche le tableau contenant les rappeurs
function SearchList({ filteredRapper, selectRapper, search, chosenRapper }) {
  filteredRapper.sort((a, b) => a.nom.localeCompare(b.nom))

  //Cette variable permet d'afficher, en fonction du champ de recherche, les rapppeurs ayant un lien avec ce dernier
  const filteredData =
    filteredRapper.length > 0 ? (
      filteredRapper.map((rapper) => (
        <LineContainer>
          <Line isChosen={rapper.nom === chosenRapper ? true : false}>
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
      <TableBottom />
    </Container>
  )
}

export default SearchList
