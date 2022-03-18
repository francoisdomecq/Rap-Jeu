import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'
import { Link } from 'react-router-dom'
import Theme from '../../../components/theme'
import { Container, SecondContainer } from './styles'

function Enchere() {
  const [enchere, setEncheres] = useState()
  const [nombreReponses, updateNombreReponses] = useState(0)
  const { updateGamesPlayed, games } = useContext(GameContext)

  function selectTheme(theme) {
    setEncheres(theme)
  }

  const updateNombreAnswers = () => {
    updateGamesPlayed('Les enchères', nombreReponses, updateNombreReponses)
  }



  return (
    <Container>
      {/* Choisir le thème et choisir le nombre de points
      Valider, lance le chrono
      Chrono fini, l'équipe a t-elle réussi ?  */}

      <Score team={'team1'} value="--" />

      {enchere ? (
        <div>
          <p>{enchere.theme}</p>
          <p>{enchere.suggestions}</p>
        </div>
      ) : (
        <SecondContainer>
          <Theme page="enchere" selectTheme={selectTheme} />
        </SecondContainer>
      )}

      <Score team={'team2'} value="--" />
      <div style={{ width: 50, height: 50 }}>
        <Link
          to={`/${games[games.indexOf('Les enchères') + 1]}`}
          onClick={() => updateNombreAnswers()}
        >
          Valider
        </Link>
      </div>
    </Container>
  )
}

export default Enchere
