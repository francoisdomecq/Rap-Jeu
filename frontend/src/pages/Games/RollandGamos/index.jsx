import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'
import { GameContext, TeamContext } from '../../../utils/context'

import RappeurArray from '../../../components/Rappers'
import SearchFeaturing from '../../../components/SearchFeaturing'
import TeamSelection from '../../../components/TeamSelection'
import ContainerPoints from '../../../components/ContainerPoints'

import {
  ContainerRapper,
  SecondContainer,
  ContainerRow,
  ContainerColumn,
  Text,
  RapperInput,
  ContinuerContainer,
  TextLink,
} from './styles'

import { TextBlue } from '../../../utils/styles/Text'

function RollandGamos() {
  //Rappeur sélectionné
  const [rappeur, setRappeur] = useState('')
  //Compteur de manche
  const [count, setCount] = useState(0)
  //Points que remporte une manche
  const [points, setPoints] = useState()
  const [teamWinner, setTeamWinner] = useState('')
  const { resetGame, setTeamAnswering } = useContext(GameContext)
  const { team1, team2, updateScore, scoreTeam1, scoreTeam2, resetTeams } =
    useContext(TeamContext)

  function selectRappeur(rappeur) {
    setRappeur(rappeur)
  }
  function updatePoints(e) {
    if (e.key === 'Enter') {
      setPoints(e.target.value)
    }
  }

  //Cette fonction permet de s'assurer que la variable rappeur ne soit jamais 'vide' une fois une manche commencée
  //Sinon, lorsque le maître de jeu supprimerait un rappeur de l'input, il serait redirigé vers l'écran de choix d'un rappeur
  function lastRapper(e) {
    if (
      //Si le type d'évènement est 'supprimer' et que la longueur de rappeur est de 1, alors on remplace rappeur par un espace
      e.nativeEvent.inputType === 'deleteContentBackward' &&
      rappeur.length === 1
    )
      setRappeur(' ')
    else setRappeur(e.target.value)
  }

  //Cette fonction permet de passer à une nouvelle manche
  function nextRound() {
    //On ajoute les points au gagnant
    if (teamWinner === team1) updateScore(points, team1)
    else if (teamWinner === team2) updateScore(points, team2)
    //On réinitialise la variable rappeur
    setRappeur('')
    //On augmente le nombre de manches
    setCount(count + 1)
    //On réinitialise l'équipe gagnante
    setTeamWinner()
    //On réinitialise le nombre de points que rapporte la manche
    setPoints()
  }

  //Cette fonction est utilisée lorsque l'utilisateur souhaite recommencer une nouvelle partie.
  function reset() {
    localStorage.clear()
    resetGame()
    resetTeams()
  }

  //La variable teamAnswering étant globale à l'application, lors du premier chargement de la page, on la réinitialise pour qu'une
  //équipe ne soit pas sélectionnée en fonction des épreuves passées
  useEffect(() => {
    setTeamAnswering()
  }, [setTeamAnswering])

  return count < 3 ? (
    //Si moins de 3 manches ont été jouées, on affiche tout ce qui permet au maître de jeu d'animer la partie. Sinon, on affiche l'écran de victoire
    <ContainerRow style={{ marginBottom: '2%' }}>
      {
        //Si un rappeur a été sélectionné et un nombre de points définis, alors on affiche l'écran de jeu
        rappeur && points ? (
          <ContainerColumn>
            <ContainerRapper style={{ marginTop: '2%' }}>
              <Text style={{ color: 'white' }}>Dernier rappeur cité</Text>
              <RapperInput
                type="search"
                placeholder={rappeur}
                onChange={(e) => lastRapper(e)}
              />
            </ContainerRapper>
            <ContainerRow style={{ width: '50%' }}>
              <SearchFeaturing rapper={rappeur} />
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
                onClick={() => (teamWinner ? nextRound() : null)}
              >
                <TextLink>
                  {count < 2 ? 'Manche suivante' : 'Résultats'}
                </TextLink>
              </ContinuerContainer>
            </ContainerRow>
          </ContainerColumn>
        ) : (
          //Sinon, on affiche l'écran de sélection d'un rappeur et du nombre de points
          <ContainerRow>
            <SecondContainer>
              <Text>Manche n°{count + 1}</Text>
              <RappeurArray
                page="rappeur"
                selectRapper={selectRappeur}
                chosenRapper={rappeur}
              />
            </SecondContainer>
            <ContainerColumn style={{ width: '35%' }}>
              <ContainerPoints
                game="Rolland Gamos"
                updatePoints={updatePoints}
              />
            </ContainerColumn>
          </ContainerRow>
        )
      }
    </ContainerRow>
  ) : (
    //Ecran de fin de partie
    <ContainerColumn>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        colors={['#2704C4', '#ff003d', '#ffd222']}
      />
      <TextBlue style={{ marginTop: '3.5%' }}>
        {scoreTeam1 < scoreTeam2
          ? `Bien joué ${team2}`
          : scoreTeam1 === scoreTeam2
          ? 'Egalité, vous allez devoir rejouer !'
          : `Bien joué ${team1}`}
      </TextBlue>

      <ContinuerContainer
        style={{ marginTop: '15%', marginBottom: '5% ' }}
        isTeamSelected={true}
      >
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'white' }}
          onClick={() => reset()}
        >
          <TextLink>Recommencer</TextLink>
        </Link>
      </ContinuerContainer>
    </ContainerColumn>
  )
}

export default RollandGamos
