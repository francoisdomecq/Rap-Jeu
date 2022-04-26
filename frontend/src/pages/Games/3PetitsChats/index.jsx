import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import RapperArray from '../../../components/Rappers'

import {
  ContainerRow,
  ContainerColumn,
  ContainerColumn45,
  RappersContainer,
  Header,
  TableBottom,
  RapperInput,
  ContainerNewRapper,
  ContinueContainer,
  TableContainer,
  Wrapper,
  ContainerRappers,
  TextLink,
} from './styles'
import { TextBlue } from '../../../utils/styles/Text'

function PetitsChats() {
  //Permet de compter le nombre de rounds joués
  const [roundNumber, updateRoundNumber] = useState(0)
  //Variable qui contient le rappeur sélectionné
  const [rapper, setRapper] = useState('')
  //Permet d'ajouter des rappeurs qui ont été cités dans le tableau
  const [rappers, setRappers] = useState([])
  const { games, updateGamesPlayed, teamAnswering, setTeamAnswering } =
    useContext(GameContext)
  const { team1, team2, updateScore, scoreTeam1, scoreTeam2 } =
    useContext(TeamContext)

  //Permet d'ajouter un rappeur au tableau des rappeurs cités
  function addRappers(e) {
    //L'ajout ne se fait que si le maître de jeu valide avec entrée
    if (e.key === 'Enter') {
      rappers.push(e.target.value)
      const newRapper = [...rappers]
      setRappers(newRapper)
      e.target.value = ''
      //On change l'équipe qui répond
      if (teamAnswering === team1) setTeamAnswering(team2)
      else setTeamAnswering(team1)
    }
  }

  //Fonction permettant de changer le state 'rapper' et de sélectionner un rappeur pour lancer la partie
  function selectRapper(rapper) {
    setRapper(rapper)
  }

  //Fonction permettant de compter le nombre de manches jouées pour pouvoir passer au jeu suivant au bout de 3 manches
  function updateRound() {
    updateGamesPlayed('Les 3 petits chats', roundNumber, updateRoundNumber)
    setRapper('')
    setRappers([])
    //En fonction de l'équipe qui devait répondre, l'autre équipe est gagnante
    if (teamAnswering === team1) updateScore(10, team2)
    else updateScore(10, team1)
    setTeamAnswering(team2)
  }

  //Au lancement de la page, on change teamAnswering pour que l'équipe ayant le plus de points commence
  useEffect(() => {
    if (scoreTeam1 >= scoreTeam2) setTeamAnswering(team1)
    else setTeamAnswering(team2)
  }, [team1, team2, scoreTeam1, scoreTeam2, setTeamAnswering])

  return (
    <Wrapper>
      {/*La section ci-dessous ne s'affiche que si un rappeur a bien été sélectionné*/}
      {rapper ? (
        <ContainerColumn>
          <ContainerRow style={{ width: '65%' }}>
            <ContainerRappers>
              {/*Tableau contenant les rappeurs cités */}
              <Header>Rappeurs cités</Header>
              <TableContainer>
                <RappersContainer>
                  <p>{rapper}</p>
                  {rappers.map((rapper) => (
                    <p>{rapper}</p>
                  ))}
                </RappersContainer>
              </TableContainer>
              <TableBottom />
            </ContainerRappers>

            <ContainerNewRapper>
              <TextBlue>Nouveau rappeur</TextBlue>
              <RapperInput
                type="search"
                placeholder="ajouter un rappeur"
                onKeyPress={(e) => addRappers(e)}
              />
            </ContainerNewRapper>
          </ContainerRow>

          <ContainerColumn>
            {roundNumber < 1 ? (
              //Si une seule manche a été jouée, on met à jour le nombre de manches jouées et on en joue une autre
              <ContinueContainer onClick={() => updateRound()}>
                <TextLink>
                  Manche suivante
                  <br />
                  (Victoire de {teamAnswering === team1 ? team2 : team1})
                </TextLink>
              </ContinueContainer>
            ) : (
              <ContinueContainer>
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to={`/${
                    games[games.indexOf('Les 3 petits chats') + 1]
                  }/?game=${games[games.indexOf('Les 3 petits chats') + 1]}`}
                  onClick={() => updateRound()}
                >
                  <TextLink>
                    Continuer vers <br />
                    {games[games.indexOf('Les 3 petits chats') + 1]}
                    <br />
                    (Victoire de {teamAnswering === team1 ? team2 : team1})
                  </TextLink>
                </Link>
              </ContinueContainer>
            )}
          </ContainerColumn>
        </ContainerColumn>
      ) : (
        /*Si un rappeur n'est pas encore sélectionné, on propose au maître de jeu d'en choisir un */
        <ContainerColumn45>
          <RapperArray selectRapper={selectRapper} />
        </ContainerColumn45>
      )}
    </Wrapper>
  )
}

export default PetitsChats
