import { createContext, useState } from 'react'

export const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([
    'Jeu 1',
    'Jeu 2',
    'Les enchères',
    'Rolland Gamos',
  ])
  const [gamesPlayed, setGamesPlayed] = useState([])
  const [hasGameStarted, setStart] = useState(false)

  function resetGame() {
    setGames(['Jeu 1', 'Jeu 2', 'Les enchères', 'Rolland Gamos'])
    setGamesPlayed([])
    setStart(false)
  }
  const selectGames = (value) => {
    //On regarde si la valeur à ajouter est contenue ou non dans le tableau
    if (!games.includes(value)) {
      // Si la valeur n'est pas contenu dans le tableau, alors on regarde si la longueur du tableau est inférieure à 4
      // ou si elle est égale à 4 et qu'elle contient des ''
      if (
        games.length === 4 &&
        (games.includes('Jeu 1') || games.includes('Jeu 2'))
      ) {
        //Si le tableau contient bien des '', alors on remplace les '' par la valeur à ajouter
        if (games.includes('Jeu 1')) {
          const index = games.indexOf('Jeu 1') //position dans le tableau des ''
          games.splice(index, 1, value) //Remplacement des '' par la valeur à ajouter
          let newGame = [...games] //Création d'une nouvelle variable pour l'immutabilité du state
          setGames(newGame)
        } //Si le tableau ne contient pas de ''
        else if (games.includes('Jeu 2')) {
          const index = games.indexOf('Jeu 2') //position dans le tableau des ''
          games.splice(index, 1, value) //Remplacement des '' par la valeur à ajouter
          let newGame = [...games] //Création d'une nouvelle variable pour l'immutabilité du state
          setGames(newGame)
        } else {
          let newGame = [...games, value]
          setGames(newGame)
        }
      }
    } //Si la valeur est contenue dans la tableau on la supprime
    else {
      const index = games.indexOf(value)
      //Si le jeu à supprimer est en position jeu 1
      if (index === 0 && games[1] !== 'Jeu 2') {
        //On récupère le jeu en position jeu 2
        let game2 = games[1]
        //On remplace le jeu 1 par le jeu 2
        games.splice(index, 1, game2)
        //On remplace le jeu 2 par 'Jeu 2'
        games.splice(index + 1, 1, 'Jeu 2')
      } else {
        games.splice(index, 1, `Jeu ${index + 1}`)
      }
      let newGame = [...games]
      setGames(newGame)
    }
    return games
  }

  const updateGamesPlayed = (game, value, updateNombreReponses) => {
    let newGamesPlayed = [...gamesPlayed]
    switch (game) {
      case 'Les 3 petits chats':
        updateNombreReponses(value + 1)
        if (value >= 1) {
          newGamesPlayed.push('Les 3 petits chats')
        }
        break
      case 'Le CrossFeaturing':
        updateNombreReponses(value + 1)
        if (value >= 2) {
          newGamesPlayed.push('Le CrossFeaturing')
        }
        break
      case 'Les enchères':
        updateNombreReponses(value + 1)
        if (value >= 0) {
          newGamesPlayed.push('Les enchères')
        }
        break
      case 'Le Mytho Pas Mytho':
        updateNombreReponses(value + 1)
        if (value >= 3) {
          newGamesPlayed.push('Le Mytho Pas Mytho')
        }
        break
      case 'Rap génie ou rap gênant':
        updateNombreReponses(value + 1)
        if (value >= 3) {
          newGamesPlayed.push('Rap génie ou rap gênant')
        }
        break
      case 'Top 5':
        updateNombreReponses(value + 1)
        if (value >= 1) {
          newGamesPlayed.push('Top 5')
        }
        break
      case 'Rolland Gamos':
        if (value >= 2) newGamesPlayed.push('Rolland Gamos')
        break
      default:
        return gamesPlayed
    }
    setGamesPlayed(newGamesPlayed)
    localStorage.setItem('gamesPlayed', JSON.stringify(newGamesPlayed))
  }

  function startGame(value) {
    setStart(value)
  }

  return (
    <GameContext.Provider
      value={{
        games,
        hasGameStarted,
        gamesPlayed,
        selectGames,
        startGame,
        updateGamesPlayed,
        setGames,
        setGamesPlayed,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const TeamContext = createContext()

export const TeamProvider = ({ children }) => {
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [questionTeam, setQuestion] = useState('')
  const [scoreTeam1, setScoreTeam1] = useState(0)
  const [scoreTeam2, setScoreTeam2] = useState(0)

  //Il y a deux manières de changer le nom des équipes. Soit lors de la requête à l'api,
  //soit lorsque l'utilisateur les modifie manuellement dans les input
  function changeTeams(e, team, type) {
    if (type === 'input') {
      if (team === 'team1') {
        let newTeam = { ...team1 }
        newTeam = e.target.value
        setTeam1(newTeam)
        localStorage.setItem('team1', JSON.stringify(newTeam))
      } else if (team === 'team2') {
        let newTeam = { ...team2 }
        newTeam = e.target.value
        setTeam2(newTeam)
        localStorage.setItem('team2', JSON.stringify(newTeam))
      }
    } else if (type === 'fetch') {
      if (team === 'team1') {
        let newTeam = { ...team1 }
        newTeam = e
        setTeam1(newTeam)
        localStorage.setItem('team1', JSON.stringify(newTeam))
      } else if (team === 'team2') {
        let newTeam = { ...team2 }
        newTeam = e
        setTeam2(newTeam)
        localStorage.setItem('team2', JSON.stringify(newTeam))
      }
    }
  }

  function changeQuestionTeams(value) {
    let newQuestion = { ...questionTeam }
    newQuestion = value
    setQuestion(newQuestion)
  }

  function updateScore(value, team) {
    if (value) {
      if (team === team1) {
        let newScore = scoreTeam1 + parseInt(value)
        setScoreTeam1(newScore)
        localStorage.setItem('scoreTeam1', JSON.stringify(newScore))
      } else if (team === team2) {
        let newScore = scoreTeam2 + parseInt(value)
        setScoreTeam2(newScore)
        localStorage.setItem('scoreTeam2', JSON.stringify(newScore))
      }
    }
  }

  function resetTeams() {
    setScoreTeam1(0)
    setScoreTeam2(0)
    setTeam1('')
    setTeam2('')
    setQuestion('')
  }
  return (
    <TeamContext.Provider
      value={{
        team1,
        team2,
        questionTeam,
        scoreTeam1,
        scoreTeam2,
        changeTeams,
        changeQuestionTeams,
        updateScore,
        setTeam1,
        setTeam2,
        setScoreTeam1,
        setScoreTeam2,
        resetTeams,
      }}
    >
      {children}
    </TeamContext.Provider>
  )
}
