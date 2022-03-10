import { useContext } from 'react'
import { TeamContext } from '../../utils/context'
import { ContainerScore, ButtonScore } from './styles'

function Score({ value, team }) {
  const { updateScore } = useContext(TeamContext)

  const handleKeyPress = (e, team) => {
    if (e.key === 'Enter') {
      updateScore(e.target.value, team)
      e.target.value = 0
    }
  }
  return (
    <ContainerScore>
      <ButtonScore
        type="text"
        onKeyPress={(event) => handleKeyPress(event, team)}
      />
    </ContainerScore>
  )
}

export default Score
