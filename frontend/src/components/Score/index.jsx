import styled from 'styled-components'
import { useContext } from 'react'
import { TeamContext } from '../../utils/context'
import colors from '../../utils/styles/colors'

const ButtonScore = styled.input`
  width: 100%;
  background-color: ${colors.blue};
`
function Score({ value, team }) {
  const { updateScore } = useContext(TeamContext)

  const handleKeyPress = (e,team)=>{
    if(e.key==='Enter'){
      updateScore(e.target.value,team)
    }
  }
  return (
    <div>
      <ButtonScore type="text" onKeyPress={(event) => handleKeyPress(event,team)}/>
    </div>
  )
}

export default Score
