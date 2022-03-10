import { useState, useEffect } from 'react'
import RappeurArray from '../../../components/Rappers'
import Score from '../../../components/Score'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`


function RollandGamos() {
  const[rappeur,setRappeur]=useState('')
  const [count,setCount] = useState(0)
  
  function selectRappeur(rappeur){
    setRappeur(rappeur)
  }

  function newRappeur(){
    setRappeur('')
    setCount(count+1)
  }

  return (
    count < 3 ? (
    <Container>
      <Score value={1} team={"team1"}/>
      
      {rappeur ? <div><p>{rappeur}</p><button onClick={()=>newRappeur()}/></div>
       : <RappeurArray selectRappeur={selectRappeur}/>}
       <Score value={1} team={"team2"}/>
    </Container>):
    <Container>
     <p>Bien joué equipe 1 </p> 
    </Container>
  )
}

export default RollandGamos
