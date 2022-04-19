import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TeamContext } from '../../utils/context'

import {
  ContainerColumn,
  ContainerRow,
  ExplainContainer,
  QuestionWrapper,
  ContainerTeam,
  TeamWrapper,
  TeamName,
  PageTitle,
  Text,
  TextH1,
} from './styles'
import { LoaderWrapper, Loader } from '../../utils/styles/Atoms'
import '../../utils/animations/Bouncing/jouerBouncingLetters.css'
import '../../utils/animations/Bouncing/animationBouncing.css'

import Redbull from '../../assets/PNG/redbull.png'

//Cette fonction représente la page de création des équipes
function Teams() {
  const [isDataLoading, setDataLoading] = useState(true)
  const { team1, team2, changeTeams, questionTeam, changeQuestionTeams } =
    useContext(TeamContext)

  //Cette fonction effectue un call vers l'API pour récupérer une question à poser aux équipes, ainsi que les "débuts de nom d'équipes" associés
  useEffect(() => {
    fetch(`http://localhost:3001/api/nomequipe`)
      .then((response) => response.json())
      .then((requestData) => {
        //Le call API ne s'effectue que si les champs ci-dessous sont vides
        if (team1 === '' && team2 === '' && questionTeam === '') {
          //On génère un entier aléatoire pour récupérer une question au hasard
          let randomData = Math.floor(Math.random() * requestData.length)
          changeQuestionTeams(requestData[randomData].question)
          //On précise ici que le type de requête est 'fetch' (consulter utils/context pour + d'explications)
          changeTeams(requestData[randomData].debutNomE1, 'team1', 'fetch')
          changeTeams(requestData[randomData].debutNomE2, 'team2', 'fetch')
          setDataLoading(false)
          //On initialise un score de 0 stocké localement sur la machine pour les deux équipes
          localStorage.setItem('scoreTeam1', 0)
          localStorage.setItem('scoreTeam2', 0)
        }
      })
      .catch((error) => console.log(error))
  })

  return isDataLoading ? (
    //Si les données chargent, on affiche le loader
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
        <QuestionWrapper>{questionTeam}</QuestionWrapper>
        <ContainerTeam>
          <TeamWrapper>
            <p>EQUIPE 1</p>
            <TeamName
              type="text"
              value={team1}
              //Ici on précise que le type de modificatio est input (consulter utils/context pour + d'explications)
              onChange={(event) => changeTeams(event, 'team1', 'input')}
            />
          </TeamWrapper>
          <TeamWrapper>
            <p>EQUIPE 2</p>
            <TeamName
              type="text"
              value={team2}
              //Ici on précise que le type de modificatio est input (consulter utils/context pour + d'explications)
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
