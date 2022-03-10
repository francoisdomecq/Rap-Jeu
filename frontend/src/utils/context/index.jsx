import { createContext, useState } from 'react'

export const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState(['Rolland Gamos', 'Les enchères'])
  const [gamesPlayed,setGamesPlayed] = useState([])
  const [hasGameStarted, setStart] = useState(false)

  const selectGames = (value) => {
    //On regarde si la valeur à ajouter est contenue ou non dans le tableau
    if (!games.includes(value)) {
      // Si la valeur n'est pas contenu dans le tableau, alors on regarde si la longueur du tableau est inférieure à 4
      // ou si elle est égale à 4 et qu'elle contient des ''
      if (games.length < 4 || (games.length === 4 && games.includes(''))) {
        //Si le tableau contient bien des '', alors on remplace les '' par la valeur à ajouter
        if (games.includes('')) {
          const index = games.indexOf('') //position dans le tableau des ''
          games.splice(index, 1, value) //Remplacement des '' par la valeur à ajouter
          let newGame = [...games] //Création d'une nouvelle variable pour l'immutabilité du state
          setGames(newGame)
        } //Si le tableau ne contient pas de ''
        else {
          let newGame = [...games, value]
          setGames(newGame)
        }
      }
    } //Si la valeur est contenue dans la tableau on la supprime
    else {
      const index = games.indexOf(value)
      games.splice(index, 1, '')
      let newGame = [...games]
      setGames(newGame)
    }
    return games
  }
  const updateGamesPlayed = (value)=>{
    let newGamesPlayed = [...gamesPlayed,value]
    setGamesPlayed(newGamesPlayed)
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
        updateGamesPlayed
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
      } else if (team === 'team2') {
        let newTeam = { ...team2 }
        newTeam = e.target.value
        setTeam2(newTeam)
      }
    } else if (type === 'fetch') {
      if (team === 'team1') {
        let newTeam = { ...team1 }
        newTeam = e
        setTeam1(newTeam)
      } else if (team === 'team2') {
        let newTeam = { ...team2 }
        newTeam = e
        setTeam2(newTeam)
      }
    }
  }

  function changeQuestionTeams(value) {
    let newQuestion = { ...questionTeam }
    newQuestion = value
    setQuestion(newQuestion)
  }

  function updateScore(value, team) {
    if (team === 'team1') {
      let newScore = scoreTeam1 + parseInt(value)
      setScoreTeam1(newScore)
    } else if (team === 'team2') {
      let newScore = scoreTeam2 +parseInt(value)
      setScoreTeam2(newScore)
    }
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
        updateScore
      }}
    >
      {children}
    </TeamContext.Provider>
  )
}