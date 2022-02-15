import { Link } from 'react-router-dom'
import { useContext } from 'react'
import styled from 'styled-components'

import GameCard from '../../components/GameCard'

import { GameContext } from '../../utils/context'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`
const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 1300px;
`

const GamesPicked = styled.div`
  width: 250px;
  background-color: #001c39;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
`
const GamesPickedTitleWrapper = styled.div`
  background-color: #db0a40;
  border-radius: 20px;
  width: 240px;
  height: 50px;
`
const GamesPickedTitle = styled.div`
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`

function Games() {
  const { games, startGame } = useContext(GameContext)

  return (
    <Container>
      <GamesPicked>
        <GamesPickedTitleWrapper>
          <GamesPickedTitle>Jeux sélectionnés</GamesPickedTitle>
        </GamesPickedTitleWrapper>

        {games
          .slice(0)
          .reverse()
          .map((item) => (
            <p key={item}>{item}</p>
          ))}
        {games.length === 4 ? (
          <Link to="/game" onClick={() => startGame()}>
            Commencer la partie
          </Link>
        ) : null}
      </GamesPicked>
      <GameContainer>
        <GameCard
          label={'Top 5'}
          title="4 cartes avec 4 à 8 thèmes par carte. Donne 5 (bonnes ?) réponses à un des thèmes de la carte en 20 secondes. Si tu échoues, l’équipe adversaire peut voler tes points en donnant les réponses manquantes en 10 secondes."
        />
        <GameCard
          label={'Les 3 petits chats'}
          title="3 manches de 15 points chacune. Le maître de jeu tire une carte rappeur et lance un trois petits r(c)chats. L’équipe adverse doit reprendre la dernière syllabe du premier nom cité, et ainsi de suite en répétant tous les noms depuis le début, jusqu’à ce qu’une équipe se trompe."
        />
        <GameCard
          label={'Le CrossFeaturing'}
          title="3 manches de 5 points chacune. Le maître du jeu tire une carte et choisit deux noms. Trouve le chemin le plus court qui lie les deux artistes en citant des featurings, et vole les points à l’autre équipe si tu trouves plus court."
        />
        <GameCard
          label={'Le Mytho Pas Mytho'}
          title="20 cartes de 2 à 4 questions. Trouve si ces anecdotes sur le rap sont ou non des mythos."
        />
        <GameCard
          label={'Rap génie ou rap gênant'}
          title="19 cartes de 2 à 4 questions. 2 points par bonne réponse. Un extrait de rap, ou pas.. à toi de deviner si c’est du génie ou si c’est juste gênant"
        />
      </GameContainer>
    </Container>
  )
}

export default Games
