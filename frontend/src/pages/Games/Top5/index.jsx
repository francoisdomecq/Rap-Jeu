import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import ScoreTeam1 from '../../../components/Score/index.scoreteam1'
import ScoreTeam2 from '../../../components/Score/index.scoreteam2'
import Theme from '../../../components/theme'
import HasGameStarted from '../../../utils/functions/hasGameStarted'

import { Container, SecondContainer } from './styles'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/balises'
import '../../../utils/animations/Bouncing/top5BouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

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
    <ContainerRow>
      <div className="bouncing-text">
        <div className="t-top5">t</div>
        <div className="o-top5">o</div>
        <div className="p-top5">p</div>
        <p style={{ color: 'transparent', lineHeight: 0 }}>''</p>
        <div className="five-top5">5</div>
      </div>
      <ContainerColumn>
        {/* Choisir le thème et choisir le nombre de points
      Valider, lance le chrono
      Chrono fini, l'équipe a t-elle réussi ?  */}
        <ContainerRow>
          <ScoreTeam1 value={15} />
          <ScoreTeam2 value={15} />

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
        </ContainerRow>
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
      </ContainerColumn>
    </ContainerRow>
  )
}
export default Top5
