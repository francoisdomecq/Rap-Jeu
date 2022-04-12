import { ContainerTeamSelection, ContainerTeam, ContainerRow } from './styles'
import { TextBlue, TextWhite } from '../../utils/styles/Text'

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
        Choisir l'équipe qui {game === 'Rolland Gamos' || game==='CrossFeaturing' ? 'a gagné' : 'répond'}
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
