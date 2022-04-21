import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import Theme from '../../../components/Theme'
import TeamSelection from '../../../components/TeamSelection'
import Timer from '../../../components/Timer'
import ContainerAnswer from '../../../components/ContainerAnswer'
import ContainerThemeSuggestion from '../../../components/ContainerThemeSuggestion'

import {
  Wrapper,
  ContainerRow,
  ContainerColumn,
  ContainerColumnWinScreen, 
  ContainerRowTheme,
  ContainerColumnTheme,
  ContainerTeam,
  NextRoundButton,
  Container,
  TextLink,
} from './styles'
import { TextBlue, TextWhite } from '../../../utils/styles/Text'

function Top5() {
  //Permet de sélectionenr un thème
  const [top5, setTop5] = useState()
  //Permet d'augmenter le nombre de réponses données
  const [answerGiven, setAnswerGiven] = useState(0)
  //Permet de compter le nombre d'essais
  const [trialNumber, setTrialNumber] = useState(0)
  //Booléen permettant de commencer le chrono
  const [startCounter, setStartCount] = useState(false)
  //Chronomètre de 20s
  const [counter, setCounter] = useState(20)
  //Compteur des manches
  const [round, updateRound] = useState(0)
  const { games, updateGamesPlayed, teamAnswering, setTeamAnswering } =
    useContext(GameContext)
  const { team1, team2, updateScore } = useContext(TeamContext)

  //Fonction qui permet de gérer la fin d'une manche
  function updateAnswersNumber() {
    //On supprime le thème top 5 sélectionné
    setTop5()
    //On modifie la prochaine équipe qui va répondre en fonction de celle qui vient de le faire
    if (trialNumber === 0)
      if (teamAnswering === team1) setTeamAnswering(team2)
      else setTeamAnswering(team1)
    setStartCount(false)
    setCounter(20)
    setAnswerGiven(0)
    setTrialNumber(0)
    //On rajoute une manche jouée à la variable gamesPlayed de GameContext
    updateGamesPlayed('Top 5', round, updateRound)
  }

  //Cette fonction permet de sélectionner/déselectionner un thème
  function selectTheme(theme) {
    if (theme === top5) setTop5()
    else setTop5(theme)
  }

  //Si un thème et une équipe ont été sélectionnés, le chrono est lancé
  function startGame() {
    if (top5 && teamAnswering) setStartCount(true)
  }

  //La variable teamAnswering étant globale à l'application, lors du premier chargement de la page, on la réinitialise pour qu'une
  //équipe ne soit pas sélectionnée en fonction des épreuves passées
  useEffect(() => {
    setTeamAnswering('')
  }, [setTeamAnswering])

  //Cette fonction permet de gérer le chrono et les actions associées
  useEffect(() => {
    if (startCounter === true) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
      //Si le compteur vaut 0, que le nombre de réponses données est inférieur à 5 et que le nombre de tentative est à 1
      if (counter === 0 && answerGiven < 5 && trialNumber === 0) {
        //On modifie l'équipe qui répond
        if (teamAnswering === team1) setTeamAnswering(team2)
        else setTeamAnswering(team1)
        //On augmente le chronomètre de 10 secondes
        setCounter(10)
        //On augmente la valeur du nombre de tentatives
        setTrialNumber(1)
      }
      return () => clearInterval(timer)
    }
  }, [
    startCounter,
    counter,
    answerGiven,
    trialNumber,
    teamAnswering,
    team1,
    team2,
    setTeamAnswering,
  ])

  return (
    <Wrapper>
        {/*Cette section ne s'affiche que si le chrono est lancé */}
        {startCounter ? (
          //Si le chronomètre est supérieur à 0 et que moins de 5 réponses ont été données, on affiche le timer, le containerAnswer et le containerThemeSuggestions
          counter > 0 && answerGiven < 5 ? (
            <ContainerColumn>
              <Timer counter={counter} />
              <ContainerRow style={{ width: '40%' }}>
                <ContainerAnswer
                  team1={team1}
                  team2={team2}
                  teamAnswering={teamAnswering}
                  counter={counter}
                  answerGiven={answerGiven}
                  setAnswerGiven={setAnswerGiven}
                  trialNumber={trialNumber}
                  answerNumberToGive={5}
                />
              </ContainerRow>
              <ContainerThemeSuggestion
                theme={top5.theme}
                suggestions={top5.suggestions}
              />
            </ContainerColumn>
          ) : (
            //Si le chronomètre est à 0 ou que 5 réponses ont été données, on affiche un message de victoire/défaite et le bouton pour continuer
            <ContainerColumnWinScreen>
              {answerGiven >= 5 ? (
                //5 réponses ont été données, alors on félicite et on donne la possibilité de donner 15points à l'équipe gagnante
                <Container style={{ width: '30%' }}>
                  <TextBlue>Félicitations {teamAnswering}</TextBlue>
                  <ContainerTeam
                    style={{ width: '60%' }}
                    className="Button"
                    onClick={() => updateScore(15, teamAnswering)}
                  >
                    <TextWhite size={16}>
                      +15 points pour {teamAnswering}
                    </TextWhite>
                  </ContainerTeam>
                </Container>
              ) : (
                //Aucune équipe n'a réussi l'épreuve, on affiche un message en conséquence
                <Container style={{ width: '30%' }}>
                  <TextBlue size={20}>
                    Aucune des deux équipes ne gagne de points..
                  </TextBlue>
                </Container>
              )}
              {round < 1 ? (
                //Si round vaut 0, alors on donne la possibilité aux joueurs de jouer une autre manche
                <NextRoundButton onClick={() => updateAnswersNumber()}>
                  <TextWhite size={20}>Manche suivante</TextWhite>
                </NextRoundButton>
              ) : (
                //Sinon, ils sont redirigés vers l'épreuve suivante
                <NextRoundButton>
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`/${games[games.indexOf('Top 5') + 1]}/?game=${
                      games[games.indexOf('Top 5') + 1]
                    }`}
                    onClick={() => updateAnswersNumber()}
                  >
                    <TextWhite size={20}>
                      Continuer vers <br /> {games[games.indexOf('Top 5') + 1]}
                    </TextWhite>
                  </Link>
                </NextRoundButton>
              )}
            </ContainerColumnWinScreen>
          )
        ) : (
          //Si le chrono n'est pas lancé, cela signifie que le maître de jeu doit sélectionner un thème et une équipe
          <ContainerRowTheme>
            <Theme page="top5" selectTheme={selectTheme} chosenTheme={top5} />
            <ContainerColumnTheme>
              <TeamSelection
                team1={team1}
                team2={team2}
                teamAnswering={teamAnswering}
                setTeamAnswering={setTeamAnswering}
                game={'Top 5'}
              />
              <NextRoundButton onClick={() => startGame()}>
                <TextLink>
                  Commencer une
                  <br /> nouvelle partie
                </TextLink>
              </NextRoundButton>
            </ContainerColumnTheme>
          </ContainerRowTheme>
        )}
    
    </Wrapper>
  )
}
export default Top5
