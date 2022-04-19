import { ContainerTeamSelection, ContainerTeam, ContainerRow } from './styles'
import { TextBlue, TextWhite } from '../../utils/styles/Text'

//Ce composant est utilisé dans diverses épreuves pour sélectionner une équipe qui va répondre ou qui a gagné
function TeamSelection({
  team1,
  team2,
  teamAnswering,
  setTeamAnswering,
  game,
}) {
  return (
    <ContainerTeamSelection>
      <TextBlue>
        {/*Dans le cas où le jeu est le Rolland Gamos ou le CrossFeaturing, on affiche le texte "a gagné" */}
        Choisir l'équipe qui{' '}
        {game === 'Rolland Gamos' || game === 'CrossFeaturing'
          ? 'a gagné'
          : 'répond'}
      </TextBlue>
      <ContainerRow>
        <ContainerTeam
          isSelected={teamAnswering === team1}
          onClick={() => setTeamAnswering(team1)}
        >
          <TextWhite size={18}>{team1}</TextWhite>
        </ContainerTeam>
        <ContainerTeam
          isSelected={teamAnswering === team2}
          onClick={() => setTeamAnswering(team2)}
        >
          <TextWhite size={18}>{team2}</TextWhite>
        </ContainerTeam>
      </ContainerRow>
    </ContainerTeamSelection>
  )
}

export default TeamSelection
