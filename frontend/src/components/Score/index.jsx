import { useContext } from 'react'
import { TeamContext } from '../../utils/context'
import { ContainerScore, ButtonScore } from './styles'


function Score({ value, team, placeHolder}) {
  const { updateScore } = useContext(TeamContext)

  const handleKeyPress = (e, team) => {
    if (e.key === 'Enter') {
      updateScore(e.target.value, team)
      e.target.value = value
    }
  }
  return (
    <ContainerScore>
      <ButtonScore
        type="number"
        placeholder={placeHolder}
        defaultValue={value}
        onKeyPress={(event) => handleKeyPress(event, team)}
      />
    </ContainerScore>
  )
}

export default Score
