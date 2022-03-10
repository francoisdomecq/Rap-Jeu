import { useContext, useEffect } from 'react'
import GameCard from '../../components/GameCard'
import { GameContext } from '../../utils/context'
import {
  Container,
  GamesPicked,
  GamesPickedWrapper,
  GamesPickedTitleWrapper,
  GamesPickedTitle,
  GameContainer,
  RemoveButton,
  PlayButton,
  ExplainContainer,
} from './styles'

function Games() {
  const { games, selectGames, startGame } = useContext(GameContext)
  function removeGame(label) {
    selectGames(label)
  }

  useEffect(() => {
    startGame(false)
  })
  return (
    <Container>
      <GamesPicked has4Games={games.length === 4 ? true : false}>
        <GamesPickedTitleWrapper>
          <GamesPickedTitle>Jeux sélectionnés</GamesPickedTitle>
        </GamesPickedTitleWrapper>

        <GamesPickedWrapper
          isPicked={games.length === 2 && games[2] !== '' ? true : false}
        >
          {(games.length === 2 && games[2] !== '') ||
          (games.length > 2 && games[2] === '') ? (
            'Jeu n°1'
          ) : (
            <div style={{ justifyContent: 'space-around' }}>
              <span>{games[2]}</span>
              <RemoveButton onClick={() => removeGame(games[2])}>
                -
              </RemoveButton>
            </div>
          )}
        </GamesPickedWrapper>

        <GamesPickedWrapper
          isPicked={games.length === 2 && games[2] !== '' ? true : false}
        >
          {(games.length >= 3 && games[3] === '') ||
          (games.length < 4 && games[3] !== '') ? (
            'Jeu n°2'
          ) : (
            <div>
              <span>{games[3]}</span>
              <RemoveButton onClick={() => removeGame(games[3])}>
                -
              </RemoveButton>
            </div>
          )}
        </GamesPickedWrapper>

        <GamesPickedWrapper isPicked={true}>{games[0]}</GamesPickedWrapper>
        <GamesPickedWrapper isPicked={true}>{games[1]}</GamesPickedWrapper>

        <PlayButton
          has4games={
            games.length === 4 && !games.includes('') ? 'true' : 'false'
          }
          to={
            games.length === 4 && !games.includes('') ? `${games[2]}` : '/games'
          }
          onClick={() =>
            games.length === 4 && games.includes('') === false
              ? startGame(true)
              : null
          }
        >
          Commencer la partie
        </PlayButton>
      </GamesPicked>
      <GameContainer>
        <ExplainContainer>
          <h1 style={{ textAlign: 'center' }}>Choix des jeux</h1>
          <p>
            Maintenant que les équipes sont prêtes et que votre nom d'équipe
            vous convient ou non, il faut choisir les jeux. N'y passez pas trop
            de temps, le but c'est quand même de jouer ! Vous vous affronterez
            au cours de 4 épreuves, les deux dernières étant obligatoirement les
            fameeeeuses enchères et le classique Rolland Gamos!
          </p>
        </ExplainContainer>
        <GameCard
          label={'Top 5'}
          rules="4 cartes avec 4 à 8 thèmes par carte. Donne 5 (bonnes ?) réponses à un des thèmes de la carte en 20 secondes. Si tu échoues, l’équipe adversaire peut voler tes points en donnant les réponses manquantes en 10 secondes."
        />
        <GameCard
          label={'Les 3 petits chats'}
          rules="3 manches de 15 points chacune. Le maître de jeu tire une carte rappeur et lance un trois petits r(c)chats. L’équipe adverse doit reprendre la dernière syllabe du premier nom cité, et ainsi de suite en répétant tous les noms depuis le début, jusqu’à ce qu’une équipe se trompe."
        />
        <GameCard
          label={'Le CrossFeaturing'}
          rules="3 manches de 5 points chacune. Le maître du jeu tire une carte et choisit deux noms. Trouve le chemin le plus court qui lie les deux artistes en citant des featurings, et vole les points à l’autre équipe si tu trouves plus court."
        />
        <GameCard
          label={'Le Mytho Pas Mytho'}
          rules="20 cartes de 2 à 4 questions. Trouve si ces anecdotes sur le rap sont ou non des mythos."
        />
        <GameCard
          label={'Rap génie ou rap gênant'}
          rules="19 cartes de 2 à 4 questions. 2 points par bonne réponse. Un extrait de rap, ou pas.. à toi de deviner si c’est du génie ou si c’est juste gênant"
        />
      </GameContainer>
    </Container>
  )
}

export default Games
