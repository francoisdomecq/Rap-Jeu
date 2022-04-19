import { useState, useContext, useEffect } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import CrossFeaturingArray from '../../../components/CrossFeaturing'
import SearchFeaturing from '../../../components/SearchFeaturing'
import ContainerAnswerCrossFeaturing from '../../../components/ContainerAnswerCrossFeaturing'

import {
  ContainerRow,
  ContainerColumn,
  ContainerColumn45,
  ContinuerContainer,
  ContainerCrossFeaturing,
} from './styles'
import { TextBlue } from '../../../utils/styles/Text'

function CrossFeaturing() {
  const [crossFeaturing, setCrossFeaturing] = useState()
  const [answerNumber, updateAnswerNumber] = useState(0)
  const [rappersTeam1, setRappersTeam1] = useState([])
  const [rappersTeam2, setRappersTeam2] = useState([])
  const { games, updateGamesPlayed, setTeamAnswering } = useContext(GameContext)
  const { team1, team2, updateScore } = useContext(TeamContext)

  function selectCrossFeaturing(crossFeaturing) {
    setCrossFeaturing(crossFeaturing)
  }
  function addRappers(e, team) {
    if (e.key === 'Enter') {
      if (team === team1) {
        rappersTeam1.push(e.target.value)
        const newRapper = [...rappersTeam1]
        setRappersTeam1(newRapper)
        e.target.value = ''
      } else {
        rappersTeam2.push(e.target.value)
        const newRapper = [...rappersTeam2]
        setRappersTeam2(newRapper)
        e.target.value = ''
      }
    }
  }

  const updateAnswer = () => {
    updateGamesPlayed('Le CrossFeaturing', answerNumber, updateAnswerNumber)
    setCrossFeaturing()
    setRappersTeam1([])
    setRappersTeam2([])
    if (rappersTeam1.length < rappersTeam2.length) updateScore(5, team1)
    else if (rappersTeam1.length > rappersTeam2.length) updateScore(5, team2)
  }
  
  useEffect(() => {
    setTeamAnswering()
  }, [setTeamAnswering])

  return (
    <ContainerRow>
      <ContainerColumn>
        {!crossFeaturing ? (
          <ContainerColumn45 style={{ marginTop: '5%' }}>
            <CrossFeaturingArray selectCrossFeaturing={selectCrossFeaturing} />
          </ContainerColumn45>
        ) : (
          <ContainerColumn style={{ marginTop: '1%' }}>
            <ContainerRow style={{ justifyContent: 'center' }}>
              <ContainerAnswerCrossFeaturing
                team={team1}
                addRappers={addRappers}
                rappersTeam={rappersTeam1}
                setRappers={setRappersTeam1}
              />
              <ContainerRow style={{ width: '40%' }}>
                <ContainerCrossFeaturing>
                  <TextBlue>
                    {crossFeaturing.rappeur1}-{crossFeaturing.rappeur2}
                  </TextBlue>
                </ContainerCrossFeaturing>
                <SearchFeaturing />
              </ContainerRow>
              <ContainerAnswerCrossFeaturing
                team={team2}
                addRappers={addRappers}
                rappersTeam={rappersTeam2}
                setRappers={setRappersTeam2}
              />
            </ContainerRow>
            <ContainerColumn>
              {answerNumber < 2 ? (
                <ContinuerContainer
                  isClickable={
                    rappersTeam1.length > 0 && rappersTeam2.length > 0
                      ? true
                      : false
                  }
                  onClick={() =>
                    rappersTeam1.length > 0 && rappersTeam2.length > 0
                      ? updateAnswer()
                      : null
                  }
                >
                  Manche suivante
                </ContinuerContainer>
              ) : (
                <ContinuerContainer>
                  <Link
                    style={{ textDecoration: 'none', color: 'white' }}
                    to={`/${
                      games[games.indexOf('Le CrossFeaturing') + 1]
                    }?game=${games[games.indexOf('Le CrossFeaturing') + 1]}`}
                    onClick={() =>
                      rappersTeam1.length > 0 && rappersTeam2.length > 0
                        ? updateAnswer()
                        : null
                    }
                  >
                    Continuer vers <br />{' '}
                    {games[games.indexOf('Le CrossFeaturing') + 1]}
                  </Link>
                </ContinuerContainer>
              )}
            </ContainerColumn>
          </ContainerColumn>
        )}
      </ContainerColumn>
    </ContainerRow>
  )
}

export default CrossFeaturing
