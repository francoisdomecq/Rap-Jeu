import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GameContext } from '../../utils/context'

import {
  Wrapper,
  ContainerLogos,
  LinkImage,
  Logo,
  ExplainationContainer,
  Explaination,
  TextH1,
  Text,
  ContainerRow,
  ContinueContainer,
  TextLink,
} from './styles'

import RedBullLogo from '../../assets/PNG/redbull.png'
import RapJeuLogo from '../../assets/RapJeuLogo.svg'
import YoutubeLogo from '../../assets/rollandgamos/icons8-youtube.svg'

//Cette fonction représente la page d'accueil
function Home() {
  //On récupère les fonction startGame et resetGame dans le GameContext
  const { startGame, resetGame } = useContext(GameContext)

  //On récupère ici les données stockées localement sur la machine si elles existent pour que l'utilisateur puisse reprendre la partie
  //S'il l'a interrompue
  const localGames = JSON.parse(localStorage.getItem('games'))
  const localGamesPlayed = JSON.parse(localStorage.getItem('gamesPlayed'))
  const nextGame =
    localGames && localGamesPlayed ? localGames[localGamesPlayed.length] : null
  const localTeam1 = JSON.parse(localStorage.getItem('team1'))
  const localTeam2 = JSON.parse(localStorage.getItem('team2'))

  //Cette fonction permet de supprimer toutes les données stockées localement sur la machine et celles stockées pendant la session
  function newGame() {
    localStorage.clear()
    resetGame()
  }

  return (
    <Wrapper>
      <ContainerLogos>
        <LinkImage
          href="https://www.redbull.com/fr-fr/collections/redbinks"
          target="_blank"
        >
          <Logo src={RedBullLogo} alt="redbull" />
        </LinkImage>

        <Logo isRapJeuLogo={true} src={RapJeuLogo} alt="rapjeu" />

        <LinkImage
          href="https://www.youtube.com/playlist?list=PLLkvlAQ5R3l8zLZWcwcjkMQ1pU4BQlAcp"
          target="_blank"
        >
          <Logo src={YoutubeLogo} alt="youtube" />
        </LinkImage>
      </ContainerLogos>
      <ExplainationContainer>
        <Explaination>
          <TextH1>Bienvenue dans Rap Jeu</TextH1>
          <Text>
            Salut la famille, tu es sur le point de te lancer dans une partie de
            Rap Jeu. Si t'es là, je suppose que tu connais déjà l'émission
            présentée par Mehdi Maizi. Le principe de ce site est de permettre à
            tout le monde de jouer à Rap Jeu ! J'espère que t'es pas tout seul
            car tu risquerais de t'ennuyer.
          </Text>
          <TextH1>Instructions</TextH1>
          <Text>
            Dans un premier temps, vous allez devoir désigner un maître de jeu
            pour la suite de la partie. Il faut qu'il soit charismatique de
            préférence.
          </Text>
          <Text>
            Une fois le maître de jeu choisi, il prend le contrôle de
            l'ordinateur et clique sur le bouton jouer. Vous allez alors pouvoir
            choisir le nom de vos équipes. Attention, il sera définitif !
          </Text>
          <Text>
            Une fois les équipes définies, vous allez pouvoir choisir les deux
            premières épreuves auxquelles vous voulez jouer. Parmi les épreuves
            disponibles se trouvent{' '}
            <strong>
              le top 5, le crossfeaturing, le mytho pas mytho, le rap génie ou
              gênant et les 3 petits (r)chats.{' '}
            </strong>
            Bien entendu, la troisième épreuve est <strong>les enchères</strong>
            . Et pour la dernière épreuve, vous départagerez le gagnant au cours
            de 3 manches de <strong>Rolland Gamos</strong>.
          </Text>
          <Text>
            Concernant le maître de jeu, tu as tous les droits au cours de la
            partie, c'est à dire que tu peux récompenser une bonne blague en
            ajoutant des points ou en enlevant si c'est un flop.. Ce n'est qu'un
            exemple bien-sûr, libre à toi d'animer la partie !
          </Text>
        </Explaination>
      </ExplainationContainer>
      {/*Si l'utilisateur souhaite recommencer une nouvelle partie, il est redirigé vers l'écran Teams et on supprime les données de 
      la session actuelle et celles stockées localement */}
      <ContainerRow>
        <ContinueContainer>
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            onClick={() => newGame()}
            to={'/teams'}
          >
            {' '}
            <TextLink>
              Commencer une
              <br /> nouvelle partie
            </TextLink>
          </Link>
        </ContinueContainer>

        {/*Si l'utilisateur souhaite reprendre la dernière partie en cours, il est redirigé vers la prochaine épreuve à jouer
        Cette option ne s'affiche que si des données stockées localement sur la machine existent */}
        {localTeam1 && localTeam2 && localGames ? (
          <ContinueContainer>
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={`${nextGame}/?game=${nextGame}`}
              onClick={() => startGame(true)}
            >
              <TextLink>
                Reprendre la partie
                <br /> en cours
              </TextLink>
            </Link>
          </ContinueContainer>
        ) : null}
      </ContainerRow>
    </Wrapper>
  )
}

export default Home
