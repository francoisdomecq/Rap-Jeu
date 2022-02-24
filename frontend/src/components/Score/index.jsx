import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { TeamContext } from '../../utils/context'


function Score({value,team}) {
  const { updateScore} = useContext(TeamContext)

  return (
    <button onClick={()=>updateScore(value,team)}/>
  )
}

export default Score
