import { useContext } from 'react'
import { TeamContext } from '../../utils/context'
import { ContainerScoreTeam1, ButtonScore } from './styles'


function ScoreTeam1({ value, placeHolder}) {
  const { team1,updateScore } = useContext(TeamContext)

  const handleKeyPress = (e, team) => {
    if (e.key === 'Enter') {
      updateScore(e.target.value, team)
      e.target.value = value
    }
  }
  return (
    <ContainerScoreTeam1>
      <ButtonScore
        type="number"
        placeholder={placeHolder}
        defaultValue={value}
        onKeyPress={(event) => handleKeyPress(event, team1)}
      />
    </ContainerScoreTeam1>
    
  )
}

export default ScoreTeam1
