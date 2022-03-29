import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { TeamContext } from '../../utils/context'
import Loader from '../../utils/styles/Atoms'
import Redbull from '../../assets/PNG/redbull.png'

import { ContainerRow, ContainerColumn } from '../../utils/styles/Containers'
import {
  LoaderWrapper,
  ExplainContainer,
  QuestionWrapper,
  ContainerTeam,
  TeamWrapper,
  TeamName,
  PageTitle,
} from './styles'
import '../../utils/animations/Bouncing/jouerBouncingLetters.css'
import '../../utils/animations/Bouncing/animationBouncing.css'
function Teams() {
  const [isDataLoading, setDataLoading] = useState(true)
  const { team1, team2, changeTeams, questionTeam, changeQuestionTeams } =
    useContext(TeamContext)

  function refreshPage() {
    window.location.reload(false)
  }

  useEffect(() => {
    fetch(`http://localhost:3001/api/nomequipe`)
      .then((response) => response.json())
      .then((requestData) => {
        if (team1 === '' && team2 === '' && questionTeam === '') {
          let randomData = Math.floor(Math.random() * requestData.length)
          changeQuestionTeams(requestData[randomData].question)
          changeTeams(requestData[randomData].debutNomE1, 'team1', 'fetch')
          changeTeams(requestData[randomData].debutNomE2, 'team2', 'fetch')
          setDataLoading(false)
        }
      })
      .catch((error) => console.log(error))
  })
  function makeAlert() {
    setDataLoading(false)
  }
  return isDataLoading ? (
    <LoaderWrapper>
      <Loader src={Redbull} />
    </LoaderWrapper>
  ) : (
    <ContainerRow>
      <PageTitle>Création des équipes</PageTitle>
      <ExplainContainer>
        <p>
          Avant de commencer, il faut bien évidemment commencer par le choix du
          nom des équipes ! Pour ça, tu vas poser une petite question aux deux
          équipes. Si la question vous inspire pas, tu peux bien entendu en
          charger une autre. Et comme tu peux le voir les noms des deux équipes
          sont déjà pré-remplis comme dans l'émission ! T'as plus qu'à écrire
          leurs réponses avant ou après en fonction de ce qui sonne le mieux, ou
          le moins bien si tu préfères..
        </p>
      </ExplainContainer>
      <ContainerRow>
        <QuestionWrapper>{questionTeam}</QuestionWrapper>
        <ContainerColumn>
          <button onClick={refreshPage}>Changer de question</button>
        </ContainerColumn>

        <ContainerTeam>
          <TeamWrapper>
            <p>EQUIPE 1</p>
            <TeamName
              type="text"
              value={team1}
              onChange={(event) => changeTeams(event, 'team1', 'input')}
            />
          </TeamWrapper>
          <TeamWrapper>
            <p>EQUIPE 2</p>
            <TeamName
              type="text"
              value={team2}
              onChange={(event) => changeTeams(event, 'team2', 'input')}
            />
          </TeamWrapper>
        </ContainerTeam>
      </ContainerRow>
      <Link style={{ textDecoration: 'none' }} to="/games">
        <ContainerColumn>
          <div class="bouncing-text">
            <div class="j">J</div>
            <div class="o">O</div>
            <div class="u">U</div>
            <div class="e">E</div>
            <div class="r">R</div>
          </div>
        </ContainerColumn>
      </Link>
    </ContainerRow>
  )
}

export default Teams
