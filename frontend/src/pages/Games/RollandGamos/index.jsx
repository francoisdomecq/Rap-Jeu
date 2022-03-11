import { useState } from 'react'
import RappeurArray from '../../../components/Rappers'
import Score from '../../../components/Score'
import { Container } from './styles'

function RollandGamos() {
  const [rappeur, setRappeur] = useState('')
  const [count, setCount] = useState(0)

  function selectRappeur(rappeur) {
    setRappeur(rappeur)
  }

  function newRappeur() {
    setRappeur('')
    setCount(count + 1)
  }

  return count < 3 ? (
    <Container>
      <Score team={'team1'} value="--" />
      {rappeur ? (
        <div>
          <p>{rappeur}</p>
          <button onClick={() => newRappeur()} />
        </div>
      ) : (
        <RappeurArray selectRappeur={selectRappeur} />
      )}
      <Score team={'team2'} value="--" />
    </Container>
  ) : (
    <Container>
      <p>Bien joué equipe 1 </p>
    </Container>
  )
}

export default RollandGamos
