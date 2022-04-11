import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { TeamContext } from '../../../utils/context'
import RappeurArray from '../../../components/Rappers'
import SearchFeaturing from '../../../components/SearchFeaturing'
import {
  RappeurContainer,
  SecondContainer,
  Text,
  RapperInput,
  ContainerTeamSelection,
  ContainerScore,
  ButtonScore,
  ContainerTeam,
} from './styles'
import { TextBlue } from '../../../utils/styles/Text'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/Containers'

import '../../../utils/animations/Bouncing/rollandGamosBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

import HasGameStarted from '../../../utils/functions/hasGameStarted'
import { ContinuerContainer } from '../CrossFeaturing/styles'

function RollandGamos() {
  const [rappeur, setRappeur] = useState('')
  const [count, setCount] = useState(0)
  const [points, setPoints] = useState()
  const [teamWinner, setTeamWinner] = useState('')
  const { scoreTeam1, scoreTeam2 } = useContext(TeamContext)
  const { team1, team2, updateScore } = useContext(TeamContext)

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

  // HasGameStarted()

  return count < 3 ? (
    <ContainerRow style={{ marginBottom: '2%' }}>
      <div className="bouncing-text">
        <div className="r-RG">R</div>
        <div className="o-RG">O</div>
        <div className="l-RG">L</div>
        <div className="l2-RG">L</div>
        <div className="a-RG">A</div>
        <div className="n-RG">N</div>
        <div className="d-RG">D</div>
        <div style={{ color: 'transparent' }}>..</div>
        <div className="g-RG">G</div>
        <div className="a2-RG">A</div>
        <div className="m-RG">M</div>
        <div className="o2-RG">O</div>
        <div className="s-RG">S</div>
      </div>
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
                <ContainerTeamSelection>
                  <TextBlue>Sélectionner l'équipe gagnante</TextBlue>
                  <ContainerRow>
                    <ContainerTeam
                      isSelected={teamWinner === team1}
                      onClick={() => setTeamWinner(team1)}
                    >
                      <Text style={{ color: 'white', fontSize: 18 }}>
                        {team1}
                      </Text>
                    </ContainerTeam>
                    <ContainerTeam
                      isSelected={teamWinner === team2}
                      onClick={() => setTeamWinner(team2)}
                    >
                      <Text style={{ color: 'white', fontSize: 18 }}>
                        {team2}
                      </Text>
                    </ContainerTeam>
                  </ContainerRow>
                </ContainerTeamSelection>
              </ContainerColumn>
              <ContainerRow style={{ marginTop: '2%' }}>
                <ContinuerContainer onClick={() => newRappeur()}>
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
                      <TextBlue>Combien de réponses ?</TextBlue>
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
      <p>Bien joué équipe {scoreTeam1 < scoreTeam2 ? '2' : '1'} </p>
      <Link to="/">Recommencer une partie</Link>
    </ContainerColumn>
  )
}

export default RollandGamos
