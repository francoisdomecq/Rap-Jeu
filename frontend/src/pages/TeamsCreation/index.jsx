import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { TeamContext } from '../../utils/context'
import Loader from '../../utils/styles/Atoms'
import Redbull from '../../assets/redbull.png'
import Jouer from '../../assets/jouer.svg'
import {
  LoaderWrapper,
  Container,
  ExplainContainer,
  QuestionWrapper,
  ContainerTeam,
  TeamWrapper,
  TeamName,
  LogoJouer,
} from './styles'

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

  return isDataLoading ? (
    <LoaderWrapper>
      <Loader src={Redbull} />
    </LoaderWrapper>
  ) : (
    <Container>
      <h1>Création des équipes</h1>
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

      <QuestionWrapper>{questionTeam}</QuestionWrapper>
      <div>
        <button onClick={refreshPage}>Changer de question</button>
      </div>

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

      <Link to="/games">
        <LogoJouer src={Jouer} alt="jouer" />
      </Link>
    </Container>
  )
}

export default Teams
