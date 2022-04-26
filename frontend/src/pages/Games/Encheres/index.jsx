import { useState, useContext, useEffect } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import Theme from '../../../components/theme'
import Timer from '../../../components/Timer'
import ContainerAnswer from '../../../components/ContainerAnswer'
import ContainerThemeSuggestion from '../../../components/ContainerThemeSuggestion'

import {
  ContainerRowAnswer,
  ContainerRowStart,
  ContainerColumn,
  ContainerColumnStart,
  Text,
  ContainerTeam,
  ContainerTeamSelection,
  ContinueContainer,
  TextLink,
  Wrapper,
} from './styles'
import { TextBlue } from '../../../utils/styles/Text'

import TeamSelection from '../../../components/TeamSelection'
import ContainerPoints from '../../../components/ContainerPoints'

function Enchere() {
  //Cette variable contient le theme selectionné
  const [enchere, setEncheres] = useState()
  //Cette variable contient le nombre de points pour lequel les joueurs jouent
  const [points, setPoints] = useState()
  //Ce booléen permet de lancer la manche. Tant que celui-ci vaut false, on reste sur l'écran de sélection de thème.
  const [startCounter, setStartCount] = useState(false)
  //Chronomètre de 60 secondes
  const [counter, setCounter] = useState(60)
  //Compteur du nombre de réponses données par l'équipe qui répond
  const [answerGiven, setAnswerGiven] = useState(0)
  const [roundNumber, updateRoundNumber] = useState(0)
  const { updateGamesPlayed, games, teamAnswering, setTeamAnswering } =
    useContext(GameContext)
  const { team1, team2, updateScore } = useContext(TeamContext)

  useEffect(() => {
    //Si startCounter vaut true, cela signifique qu'un theme, une équipe et un nombre de points ont été déterminés. Alors on commence le chrono
    if (startCounter === true) {
      //Syntaxe permettant de décrémenter d'une seconde le chrono chaque seconde
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
      return () => clearInterval(timer)
    }
  }, [counter, startCounter])

  //Au premier chargement de la page, on réinitialise la variable teamAnswering 
  useEffect(() => {
    setTeamAnswering()
  }, [setTeamAnswering])
  
  //Cette fonction permet de sélectionner/désélectionner un thème. Elle est passée en props au composant Theme.
  function selectTheme(theme) {
    if (theme === enchere) setEncheres()
    else setEncheres(theme)
  }

  //Cette fonction est appelée à la fin de la manche pour ajouter 'les enchères' au tableau des jeux terminés
  const updateRound = () => {
    updateGamesPlayed('Les enchères', roundNumber, updateRoundNumber)
  }

  //Fonction qui vérifie si les conditions sont réunies pour lancer le chronomètre et quitter l'écran de sélection du thème
  function startGame() {
    if (enchere && teamAnswering && points) setStartCount(true)
  }

  return (
    <Wrapper>
      {enchere && points && teamAnswering && startCounter ? (
        counter > 0 && answerGiven < points ? (
          <ContainerColumn>
            <Timer counter={counter} />
            <ContainerRowAnswer>
              <ContainerAnswer
                teamAnswering={teamAnswering}
                answerGiven={answerGiven}
                setAnswerGiven={setAnswerGiven}
                answerNumberToGive={points}
              />
            </ContainerRowAnswer>
            <ContainerThemeSuggestion
              theme={enchere.theme}
              suggestions={enchere.suggestions}
            />
          </ContainerColumn>
        ) : (
          <ContainerColumn>
            {answerGiven >= points ? (
              <ContainerTeamSelection>
                <TextBlue>Félicitations {teamAnswering}</TextBlue>
                <ContainerTeam
                  style={{ width: '80%' }}
                  onClick={() => updateScore(points, teamAnswering)}
                >
                  <Text style={{ color: 'white', fontSize: 16 }}>
                    +{points} points pour {teamAnswering}
                  </Text>
                </ContainerTeam>
              </ContainerTeamSelection>
            ) : (
              <ContainerTeamSelection>
                <TextBlue>Dommage {teamAnswering}</TextBlue>
                <ContainerTeam
                  style={{ width: '80%' }}
                  onClick={() =>
                    updateScore(points, teamAnswering === team1 ? team2 : team1)
                  }
                >
                  <Text style={{ color: 'white', fontSize: 16 }}>
                    +{points} points pour{' '}
                    {teamAnswering === team1 ? team2 : team1}
                  </Text>
                </ContainerTeam>
              </ContainerTeamSelection>
            )}

            <ContinueContainer style={{ marginTop: '10%' }}>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to={`/${games[games.indexOf('Les enchères') + 1]}?game=${
                  games[games.indexOf('Les enchères') + 1]
                }`}
                onClick={() => updateRound()}
              >
                <TextLink>
                  Continuer vers
                  <br /> le Rolland Gamos
                </TextLink>
              </Link>
            </ContinueContainer>
          </ContainerColumn>
        )
      ) : (
        <ContainerRowStart>
          <Theme
            page="enchere"
            selectTheme={selectTheme}
            chosenTheme={enchere}
          />
          <ContainerColumnStart>
            <TeamSelection
              team1={team1}
              team2={team2}
              teamAnswering={teamAnswering}
              setTeamAnswering={setTeamAnswering}
              game={'Enchères'}
            />
            <ContainerPoints game={'Les enchères'} updatePoints={setPoints} />
            <ContinueContainer onClick={() => startGame()}>
              <TextLink>Commencer</TextLink>
            </ContinueContainer>
          </ContainerColumnStart>
        </ContainerRowStart>
      )}
    </Wrapper>
  )
}

export default Enchere
