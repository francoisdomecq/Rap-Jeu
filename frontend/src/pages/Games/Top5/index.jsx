import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'
import { Link } from 'react-router-dom'
import { Container, SecondContainer } from './styles'
import Theme from '../../../components/theme'
import HasGameStarted from '../../../utils/functions/hasGameStarted'

function Top5() {
  const [top5, setTop5] = useState()
  const [nombreReponses, updateNombreReponses] = useState(0)
  const { games, gamesPlayed, updateGamesPlayed } = useContext(GameContext)

  const updateNombreAnswers = () => {
    setTop5()
    updateGamesPlayed('Top 5', nombreReponses, updateNombreReponses)
  }

  function selectTheme(theme) {
    setTop5(theme)
  }

  HasGameStarted()
  return (
    <Container>
      {/* Choisir le thème et choisir le nombre de points
      Valider, lance le chrono
      Chrono fini, l'équipe a t-elle réussi ?  */}

      <Score team={'team1'} value="--" />

      {top5 ? (
        <div>
          <p>{top5.theme}</p>
          <p>{top5.suggestions}</p>
        </div>
      ) : (
        <SecondContainer>
          <Theme page="top5" selectTheme={selectTheme} />
        </SecondContainer>
      )}

      <Score team={'team2'} value="--" />
      <div style={{ width: 50, height: 50 }}>
        {nombreReponses < 1 ? (
          <button onClick={() => updateNombreAnswers()}>Valider</button>
        ) : (
          <Link
            to={`/${games[games.indexOf('Top 5') + 1]}`}
            onClick={() => updateNombreAnswers()}
          >
            Valider
          </Link>
        )}
      </div>
    </Container>
  )
}
export default Top5
