import {
  ContainerTeamAnswer,
  Header,
  TableContainer,
  RappersContainer,
  TableBottom,
  RapperInput,
  Line,
  RapperName,
  LineContainer,
  RemoveButton,
} from './styles'
import { TextBlue } from '../../utils/styles/Text'

//Ce composant correspond aux tableaux dans lequel sont stockés les réponses des équipes pour l'épreuve Crossfeaturing
function ContainerAnswerCrossFeaturing({
  rappersTeam,
  team,
  addRappers,
  setRappers,
}) {
  //Cette fonction permet de supprimer un rappeur du tableau
  function deleteRapper(rapper) {
    rappersTeam.splice(rappersTeam.indexOf(rapper), 1)
    let newRappersArray = [...rappersTeam]
    setRappers(newRappersArray)
  }
  return (
    <ContainerTeamAnswer>
      <TextBlue>{team}</TextBlue>
      <Header>Rappeurs cités</Header>
      <TableContainer>
        <RappersContainer>
          {rappersTeam.length > 0
            ? rappersTeam.map((rapper) => (
                <LineContainer>
                  <Line>
                    <RapperName>{rapper}</RapperName>
                    <RemoveButton onClick={() => deleteRapper(rapper)}>
                      &times;
                    </RemoveButton>
                  </Line>
                </LineContainer>
              ))
            : null}
        </RappersContainer>
      </TableContainer>
      <TableBottom />
      <TextBlue>Nouveau rappeur</TextBlue>
      <RapperInput type="search" onKeyPress={(e) => addRappers(e, team)} />
    </ContainerTeamAnswer>
  )
}
export default ContainerAnswerCrossFeaturing
