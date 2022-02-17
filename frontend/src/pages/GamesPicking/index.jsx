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
`
const GamesPicked = styled.div`
  margin-top: 15px;
  width: 250px;
  background-color: #001c39;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
`
const GamesPickedTitleWrapper = styled.div`
  background-color: #db0a40;
  width: 240px;
  height: 50px;
  text-align: center;
`
const GamesPickedTitle = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`

const GamesPickedWrapper = styled.div`
  text-align: center;
  background-color: #ffd222;
  border-radius: 20px;
  width: 200px;
  height: 40px;
  padding: 5px;
  margin-top: 25px;
`

const PlayButton = styled(Link)`
  width: 240px;
  height: 50px;
  background-color: #db0a40;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
`

const RemoveButton = styled.button`
  width: 30px;
  background-color: #db0a40;
  border-radius: 70px;
  text-align: center;
  color: white;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`

function Games() {
  const { games, selectGames, startGame } = useContext(GameContext)
  function removeGame(label) {
    selectGames(label)
  }
  console.log(games)
  return (
    <Container>
      <GamesPicked has4Games={games.length === 4 ? true : false}>
        <GamesPickedTitleWrapper>
          <GamesPickedTitle>Jeux sélectionnés</GamesPickedTitle>
        </GamesPickedTitleWrapper>
        <div>
          <GamesPickedWrapper>
            {(games.length === 2 && games[2] !== '') ||
            (games.length > 2 && games[2] === '') ? (
              'Jeu n°1'
            ) : (
              <div>
                <span>{games[2]}</span>
                <RemoveButton onClick={() => removeGame(games[2])}>
                  -
                </RemoveButton>
              </div>
            )}
          </GamesPickedWrapper>
        </div>

        <GamesPickedWrapper>
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

        <GamesPickedWrapper>{games[0]}</GamesPickedWrapper>
        <GamesPickedWrapper>{games[1]}</GamesPickedWrapper>
        {games.length === 4 && !games.includes('') ? (
          <PlayButton to="/game" onClick={() => startGame()}>
            Commencer la partie
          </PlayButton>
        ) : null}
      </GamesPicked>
      <GameContainer>
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
