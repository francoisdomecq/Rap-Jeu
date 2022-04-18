import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'
import { GameContext, TeamContext } from '../../../utils/context'

import RappeurArray from '../../../components/Rappers'
import SearchFeaturing from '../../../components/SearchFeaturing'
import TeamSelection from '../../../components/TeamSelection'
import Background from '../../../components/Background'

import {
  RappeurContainer,
  SecondContainer,
  Text,
  RapperInput,
  ContainerTeamSelection,
  ContainerScore,
  ButtonScore,
  ContinuerContainer,
} from './styles'
import { TextBlue } from '../../../utils/styles/Text'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/Containers'

import '../../../utils/animations/Bouncing/rollandGamosBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

import comptoir_gauche from '../../../assets/comptoir_gauche.svg'
import comptoir_droit from '../../../assets/comptoir_droit.svg'
import mehdi from '../../../assets/mehdi.svg'
function RollandGamos() {
  const [rappeur, setRappeur] = useState('')
  const [count, setCount] = useState(0)
  const [points, setPoints] = useState()
  const [teamWinner, setTeamWinner] = useState('')
  const { resetGame } = useContext(GameContext)
  const { team1, team2, updateScore, scoreTeam1, scoreTeam2, resetTeams } =
    useContext(TeamContext)

  function selectRappeur(rappeur) {
    setRappeur(rappeur)
  }
  const updatePoints = (e) => {
    if (e.key === 'Enter') {
      setPoints(e.target.value)
    }
  }

  function lastRapper(e) {
    if (
      e.nativeEvent.inputType === 'deleteContentBackward' &&
      rappeur.length === 1
    )
      setRappeur(' ')
    else setRappeur(e.target.value)
  }
  function newRappeur() {
    if (teamWinner === team1) updateScore(points, team1)
    else if (teamWinner === team2) updateScore(points, team2)
    setRappeur('')
    setCount(count + 1)
    setTeamWinner()
    setPoints()
  }
  function reset() {
    localStorage.clear()
    resetGame()
    resetTeams()
  }

  return count < 1 ? (
    <ContainerRow style={{ marginBottom: '2%' }}>
      <ContainerColumn>
        <ContainerRow>
          {rappeur && points ? (
            <ContainerColumn>
              <RappeurContainer style={{ marginTop: '2%' }}>
                <Text style={{ color: 'white' }}>Dernier rappeur cité</Text>
                <RapperInput
                  type="search"
                  placeholder={rappeur}
                  onChange={(e) => lastRapper(e)}
                />
              </RappeurContainer>
              <ContainerRow style={{ width: '40%' }}>
                <SearchFeaturing rappeur={rappeur} />
              </ContainerRow>

              <ContainerColumn style={{ width: '40%' }}>
                <TeamSelection
                  team1={team1}
                  team2={team2}
                  teamAnswering={teamWinner}
                  game="Rolland Gamos"
                  setTeamAnswering={setTeamWinner}
                />
              </ContainerColumn>
              <ContainerRow style={{ marginTop: '2%' }}>
                <ContinuerContainer
                  isTeamSelected={teamWinner ? true : false}
                  onClick={() => newRappeur()}
                >
                  {count < 2 ? 'Manche suivante' : 'Résultats'}
                </ContinuerContainer>
              </ContainerRow>
            </ContainerColumn>
          ) : (
            <ContainerColumn>
              <Text>Manche n°{count + 1}</Text>
              <ContainerRow>
                <SecondContainer>
                  <RappeurArray
                    page="rappeur"
                    selectRapper={selectRappeur}
                    chosenRapper={rappeur}
                  />
                </SecondContainer>
                <ContainerColumn style={{ width: '35%' }}>
                  <ContainerTeamSelection>
                    <ContainerColumn>
                      <TextBlue>Combien de points ?</TextBlue>
                      <ContainerScore style={{ marginTop: '1%' }}>
                        <ButtonScore
                          type="number"
                          onKeyPress={(e) => updatePoints(e)}
                        />
                      </ContainerScore>
                    </ContainerColumn>
                  </ContainerTeamSelection>
                </ContainerColumn>
              </ContainerRow>
            </ContainerColumn>
          )}
        </ContainerRow>
      </ContainerColumn>
    </ContainerRow>
  ) : (
    <ContainerColumn>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        colors={['#2704C4', '#ff003d', '#ffd222']}
      />
      <TextBlue style={{ marginTop: '3.5%' }}>
        Bien joué {scoreTeam1 < scoreTeam2 ? team2 : team1}{' '}
      </TextBlue>
      {/* <ContainerRow>
        <img src={comptoir_gauche} style={{ marginTop: '5%' }} alt="comptoir" />
        <img src={mehdi} alt="mehdi" style={{ width: '30%', height: '30%' }} />
        <img src={comptoir_droit} style={{ marginTop: '5%' }} alt="comptoir" />
      </ContainerRow> */}
      <ContinuerContainer
        style={{ marginTop: '15%', marginBottom: '5% ' }}
        isTeamSelected={true}
      >
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'white' }}
          onClick={() => reset()}
        >
          Recommencer
        </Link>
      </ContinuerContainer>
    </ContainerColumn>
  )
}

export default RollandGamos
