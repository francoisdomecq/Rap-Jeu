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
  const [teamAnswering, setTeamAnswering] = useState('')

  function resetGame() {
    setGames(['Jeu 1', 'Jeu 2', 'Les enchères', 'Rolland Gamos'])
    setGamesPlayed([])
    setStart(false)
  }
  const selectGames = (value) => {
    //On regarde si la valeur à ajouter est contenue ou non dans le tableau
    if (!games.includes(value)) {
      // Si la valeur n'est pas contenue dans le tableau, alors on regarde si la longueur du tableau est inférieure à 4
      // ou si elle est égale à 4 et qu'elle contient 'Jeu 1' et/ou 'Jeu 2
      if (
        games.length === 4 &&
        (games.includes('Jeu 1') || games.includes('Jeu 2'))
      ) {
        //Si le tableau contient bien 'Jeu 1', alors on remplace 'Jeu 1' par la valeur à ajouter
        if (games.includes('Jeu 1')) {
          const index = games.indexOf('Jeu 1') //position dans le tableau de 'Jeu 1'
          games.splice(index, 1, value) //Remplacement de 'Jeu 1' par la valeur à ajouter
          let newGame = [...games] //Création d'une nouvelle variable pour l'immutabilité du state
          setGames(newGame)
        } //Si le tableau contient encore 'Jeu 2'
        else if (games.includes('Jeu 2')) {
          const index = games.indexOf('Jeu 2') //position dans le tableau de 'Jeu 2'
          games.splice(index, 1, value) //Remplacement de 'Jeu 2' par la valeur à ajouter
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
      if (index === 0) {
        if (games[1] !== 'Jeu 2') {
          //On récupère le jeu en position jeu 2
          let game2 = games[1]
          //On remplace le jeu 1 par le jeu 2
          games.splice(index, 1, game2)
          //On remplace le jeu 2 par 'Jeu 2'
          games.splice(index + 1, 1, 'Jeu 2')
        } else games.splice(index, 1, 'Jeu 1')
      } else {
        games.splice(index, 1, `Jeu ${index + 1}`)
      }
      let newGame = [...games]
      setGames(newGame)
    }
    return games
  }

  //Cette fonction permet d'ajouter des jeux terminés à gamesPlayed
  const updateGamesPlayed = (game, value, updateRoundNumber) => {
    let newGamesPlayed = [...gamesPlayed]
    switch (game) {
      case 'Les 3 petits chats':
        updateRoundNumber(value + 1) //On augmente le nombre de manches jouées sur la page 3 petits chats
        if (value >= 1) {
          newGamesPlayed.push('Les 3 petits chats') //On ajoute les 3 petits chats au tableau des jeux joués
        }
        break
      case 'Le CrossFeaturing':
        updateRoundNumber(value + 1)
        if (value >= 2) {
          newGamesPlayed.push('Le CrossFeaturing')
        }
        break
      case 'Les enchères':
        updateRoundNumber(value + 1)
        if (value >= 0) {
          newGamesPlayed.push('Les enchères')
        }
        break
      case 'Le Mytho Pas Mytho':
        updateRoundNumber(value + 1)
        if (value >= 3) {
          newGamesPlayed.push('Le Mytho Pas Mytho')
        }
        break
      case 'Rap génie ou rap gênant':
        updateRoundNumber(value + 1)
        if (value >= 3) {
          newGamesPlayed.push('Rap génie ou rap gênant')
        }
        break
      case 'Top 5':
        updateRoundNumber(value + 1)
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
    localStorage.setItem('gamesPlayed', JSON.stringify(newGamesPlayed)) //On modifie également la variable contenant les jeux terminés stockée localement
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
        teamAnswering,
        setTeamAnswering,
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
  //soit lorsque l'utilisateur les modifie manuellement dans les input.
  function changeTeams(e, team, type) {
    //Cas où l'utilisateur modifie lui même le nom
    if (type === 'input') {
      if (team === 'team1') {
        let newTeam = { ...team1 }
        newTeam = e.target.value //On modifie la valeur de team1
        setTeam1(newTeam)
        localStorage.setItem('team1', JSON.stringify(newTeam)) //On modifie également la valeur stockée localement
      } else if (team === 'team2') {
        let newTeam = { ...team2 }
        newTeam = e.target.value
        setTeam2(newTeam)
        localStorage.setItem('team2', JSON.stringify(newTeam)) //On modifie également la valeur stockée localement
      }
    } //Cas où le nom des équipes est modifié lors du chargement de la page TeamCreations avec l'appel API
    else if (type === 'fetch') {
      if (team === 'team1') {
        let newTeam = { ...team1 } //Respect de l'immutabilité du state
        newTeam = e
        setTeam1(newTeam) //On modifie la valeur de team1
        localStorage.setItem('team1', JSON.stringify(newTeam)) //On modifie également la valeur stockée localement
      } else if (team === 'team2') {
        let newTeam = { ...team2 }
        newTeam = e
        setTeam2(newTeam)
        localStorage.setItem('team2', JSON.stringify(newTeam)) //On modifie également la valeur stockée localement
      }
    }
  }

  //Cette fonction permet de changer la valeur de la question à poser aux deux équipes
  function changeQuestionTeams(value) {
    let newQuestion = { ...questionTeam }
    newQuestion = value
    setQuestion(newQuestion)
  }

  //Cette fonction permet de changer le score des deux équipes
  function updateScore(value, team) {
    if (value) {
      if (team === team1) {
        let newScore = scoreTeam1 + parseInt(value)
        setScoreTeam1(newScore)
        localStorage.setItem('scoreTeam1', JSON.stringify(newScore)) //On modifie également la valeur stockée localement
      } else if (team === team2) {
        let newScore = scoreTeam2 + parseInt(value)
        setScoreTeam2(newScore)
        localStorage.setItem('scoreTeam2', JSON.stringify(newScore)) //On modifie également la valeur stockée localement
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
