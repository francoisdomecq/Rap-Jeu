import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'

function PetitsChats() {
  const [nombreReponses, updateNombreReponses] = useState(0)
  const [rappeur, setRappeurs] = useState([])
  const { updateGamesPlayed } = useContext(GameContext)

  useEffect(() => {
    fetch(`http://localhost:3001/api/rappeur`)
      .then((response) => response.json())
      .then((requestData) => {
        setRappeurs(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  const updateNombreAnswers = () => {
    updateNombreReponses(nombreReponses + 1)
    if (nombreReponses >= 4) {
      updateGamesPlayed('Les 3 petits chats')
    }
  }
  console.log(nombreReponses)
  return (
    <div>
      <h1>Les 3 petits chats</h1>
      <Score team="team1" value={10} />
      {rappeur.map((rappeur) => (
        <p key={rappeur._id}>{rappeur.nom}</p>
      ))}
      <button onClick={() => updateNombreAnswers()} />
      <Score team="team2" value={10} />
    </div>
  )
}

export default PetitsChats
