import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { TeamContext } from '../../utils/context'
import { LoaderWrapper, Loader } from '../../utils/styles/Atoms'
import Redbull from '../../assets/PNG/redbull.png'
import { ContainerRow, ContainerColumn } from '../../utils/styles/Containers'
import {
  ExplainContainer,
  QuestionWrapper,
  ContainerTeam,
  TeamWrapper,
  TeamName,
  PageTitle,
  Text,
  TextH1,
} from './styles'
import '../../utils/animations/Bouncing/jouerBouncingLetters.css'
import '../../utils/animations/Bouncing/animationBouncing.css'
function Teams() {
  const [isDataLoading, setDataLoading] = useState(true)
  const { team1, team2, changeTeams, questionTeam, changeQuestionTeams } =
    useContext(TeamContext)

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

  return isDataLoading ? (
    <LoaderWrapper>
      <Loader src={Redbull} />
    </LoaderWrapper>
  ) : (
    <ContainerRow style={{ marginBottom: '3%' }}>
      <PageTitle>Création des équipes</PageTitle>
      <ExplainContainer>
        <TextH1>Instructions</TextH1>
        <Text>
          Le maître de jeu doit lire la question aux deux équipes. Comme tu peux
          le voir les noms des deux équipes sont déjà pré-remplis comme dans
          l'émission ! T'as plus qu'à compléter le nom des deux équipes en
          ajoutant, avant (ou après) le texte déjà rempli, la réponse donnée par
          chaque équipe !
        </Text>
      </ExplainContainer>
      <ContainerRow>
        <ContainerColumn>
          <QuestionWrapper>{questionTeam}</QuestionWrapper>
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
