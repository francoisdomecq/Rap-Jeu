import { useContext } from 'react'
import { TeamContext } from '../../utils/context'
import { ContainerScoreTeam2, ButtonScore } from './styles'

function ScoreTeam2({ value, placeHolder }) {
  const { team2, updateScore } = useContext(TeamContext)

  const handleKeyPress = (e, team) => {
    if (e.key === 'Enter') {
      updateScore(e.target.value, team)
      e.target.value = value
    }
  }
  return (
    <ContainerScoreTeam2>
      <ButtonScore
        type="number"
        placeholder={placeHolder}
        defaultValue={value}
        onKeyPress={(event) => handleKeyPress(event, team2)}
      />
    </ContainerScoreTeam2>
  )
}

export default ScoreTeam2
