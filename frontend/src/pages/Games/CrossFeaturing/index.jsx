import { useState, useContext, useEffect } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import CrossFeaturingArray from '../../../components/CrossFeaturing'
import SearchFeaturing from '../../../components/SearchFeaturing'
import ContainerAnswerCrossFeaturing from '../../../components/ContainerAnswerCrossFeaturing'
import TeamSelection from '../../../components/TeamSelection'

import {
  ContainerRow,
  ContainerRowMiddle,
  ContainerColumn,
  ContainerColumn45,
  ContinuerContainer,
  ContainerCrossFeaturing,
  Wrapper,
  TextLink,
  ContainerColumnNextRound,
} from './styles'
import { TextBlue } from '../../../utils/styles/Text'

function CrossFeaturing() {
  //Variable qui contient le crossfeaturing sélectionné
  const [crossFeaturing, setCrossFeaturing] = useState()
  //Permet de compter le nombre de manches jouées
  const [roundNumber, updateRoundNumber] = useState(0)
  //Variable qui contient les rapppeurs cités par l'équipe 1
  const [rappersTeam1, setRappersTeam1] = useState([])
  //Variable qui contient les rappeurs cités par l'équipe 2
  const [rappersTeam2, setRappersTeam2] = useState([])
  //Permet au maître de jeu de sélectionner l'équipe gagnante
  const [teamWinner, setTeamWinner] = useState('')
  const { games, updateGamesPlayed, setTeamAnswering } = useContext(GameContext)
  const { team1, team2, updateScore } = useContext(TeamContext)

  //Fonction utilisée pour sélectionner un crossfeaturing. On la fait passer en props au composant CrossFeaturingArray
  function selectCrossFeaturing(crossFeaturing) {
    setCrossFeaturing(crossFeaturing)
  }

  //Permet d'ajouter un rappeur aux tableaux rappersTeam1 et rappersTeam2
  //Cette fonction est passée en props au composant ContainerAnswerCrossFeaturing pour l'équipe 1 et l'équipe 2
  function addRappers(e, team) {
    //L'ajout ne se fait que si le maître de jeu valide avec entrée
    if (e.key === 'Enter') {
      if (team === team1) {
        rappersTeam1.push(e.target.value)
        const newRapper = [...rappersTeam1]
        setRappersTeam1(newRapper)
        //On supprime le champ écrit dans l'input
        e.target.value = ''
      } else {
        rappersTeam2.push(e.target.value)
        const newRapper = [...rappersTeam2]
        setRappersTeam2(newRapper)
        e.target.value = ''
      }
    }
  }

  //Fonction utilisée à la fin de chaque manche
  const updateRound = () => {
    if (teamWinner === team1) updateScore(5, team1)
    else if (teamWinner === team2) updateScore(5, team2)
    setTeamWinner()
    //On augmente le nombre de manches jouées pour gérer la navigation
    updateGamesPlayed('Le CrossFeaturing', roundNumber, updateRoundNumber)
    //On réinitialise le crossfeaturing et les rappeurs cités par les deux équipes
    setCrossFeaturing()
    setRappersTeam1([])
    setRappersTeam2([])
    //Les points sont attribués à l'équipe ayant cité le moins de rappeur
  }

  //Dans cette épreuve, les deux équipes jouent en même tempsn on supprime alors teamAnswering
  useEffect(() => {
    setTeamAnswering()
  }, [setTeamAnswering])

  return (
    <Wrapper>
      {!crossFeaturing ? (
        <ContainerColumn45>
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
            <ContainerRowMiddle style={{ width: '40%' }}>
              <ContainerCrossFeaturing>
                <TextBlue>
                  {crossFeaturing.rappeur1}-{crossFeaturing.rappeur2}
                </TextBlue>
              </ContainerCrossFeaturing>
              <SearchFeaturing />
              <TeamSelection
                team1={team1}
                team2={team2}
                teamAnswering={teamWinner}
                game="Rolland Gamos"
                setTeamAnswering={setTeamWinner}
              />
            </ContainerRowMiddle>
            <ContainerAnswerCrossFeaturing
              team={team2}
              addRappers={addRappers}
              rappersTeam={rappersTeam2}
              setRappers={setRappersTeam2}
            />
          </ContainerRow>
          <ContainerColumnNextRound>
            {roundNumber < 2 ? (
              <ContinuerContainer
                isClickable={teamWinner ? true : false}
                onClick={() => (teamWinner ? updateRound() : null)}
              >
                <TextLink>Manche suivante</TextLink>
              </ContinuerContainer>
            ) : (
              <ContinuerContainer isClickable={teamWinner ? true : false}>
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to={`/${games[games.indexOf('Le CrossFeaturing') + 1]}?game=${
                    games[games.indexOf('Le CrossFeaturing') + 1]
                  }`}
                  onClick={() => (teamWinner ? updateRound() : null)}
                >
                  <TextLink>
                    Continuer vers <br />{' '}
                    {games[games.indexOf('Le CrossFeaturing') + 1]}
                  </TextLink>
                </Link>
              </ContinuerContainer>
            )}
          </ContainerColumnNextRound>
        </ContainerColumn>
      )}
    </Wrapper>
  )
}

export default CrossFeaturing
