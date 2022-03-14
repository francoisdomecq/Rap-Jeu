import { useContext, useEffect } from 'react'
import GameCard from '../../components/GameCard'
import { GameContext, TeamContext } from '../../utils/context'
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
  const { updateScore, scoreTeam1, scoreTeam2 } = useContext(TeamContext)
  function removeGame(label) {
    selectGames(label)
  }

  useEffect(() => {
    startGame(false)
    updateScore(-scoreTeam1, 'team1')
    updateScore(-scoreTeam2, 'team2')
  })
  return (
    <Container>
      {console.log(games)}
      <GamesPicked has4Games={games.length === 4 ? true : false}>
        <GamesPickedTitleWrapper>
          <GamesPickedTitle>Jeux sélectionnés</GamesPickedTitle>
        </GamesPickedTitleWrapper>
        {games.map((item) => (
          <GamesPickedWrapper key={item}>
            <div style={{ justifyContent: 'space-around' }}>
              <span>{item}</span>
              {(item !== 'Jeu 1' && games.indexOf(item) === 0) ||
              (item !== 'Jeu 2' && games.indexOf(item) === 1) ? (
                <RemoveButton onClick={() => removeGame(item)}>-</RemoveButton>
              ) : null}
            </div>
          </GamesPickedWrapper>
        ))}
        <PlayButton
          has4games={
            games.length === 4 && !games.includes('') ? 'true' : 'false'
          }
          to={
            games.length === 4 && !games.includes('') ? `${games[0]}` : '/games'
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
          manches="2 manches - 15 points par manche"
          rules="Donne 5 (bonnes ?) réponses au thème sélectionné en 20 secondes. Si tu échoues, l’équipe adversaire peut voler tes points en donnant les réponses manquantes en 10 secondes."
        />
        <GameCard
          label={'Les 3 petits chats'}
          manches="2 manches - 10 points par manche"
          rules="Le maître de jeu choisit un rappeur et lance un trois petits r(c)chats. L’équipe adverse doit reprendre la dernière syllabe du premier nom cité, et ainsi de suite en répétant tous les noms depuis le début, jusqu’à ce qu’une équipe se trompe."
        />
        <GameCard
          label={'Le CrossFeaturing'}
          manches="3 manches - 5 points par manche"
          rules="Le maître du jeu choisit deux rappeurs. Trouve le chemin le plus court qui lie les deux artistes en citant des featurings, et vole les points à l’autre équipe si tu trouves plus court."
        />
        <GameCard
          label={'Le Mytho Pas Mytho'}
          manches="4 manches - 5 points par manche"
          rules="Trouve si ces anecdotes sur le rap sont ou non des mythos."
        />
        <GameCard
          label={'Rap génie ou rap gênant'}
          manches="4 manches - 5 points par manche"
          rules="Un extrait de rap, ou pas.. à toi de deviner si c’est du génie ou si c’est juste gênant"
        />
      </GameContainer>
    </Container>
  )
}

export default Games
