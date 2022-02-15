import { createContext, useState } from 'react'

export const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState(['Rolland Gamos', 'Les enchères'])
  const [hasGameStarted, setStart] = useState(false)
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')

  const selectGames = (value) => {
    if (!games.includes(value)) {
      if (games.length < 4) {
        let newGame = [...games, value]
        setGames(newGame)
      } else {
        console.log('4 jeux sélectionnés')
      }
    } else {
      const index = games.indexOf(value)
      let newGame = [...games.filter((item) => games.indexOf(item) !== index)]
      setGames(newGame)
    }
    return games
  }

  function startGame() {
    setStart(!hasGameStarted)
  }

  function changeTeams(e, team) {
    if (team === 'team1') {
      let newTeam = { ...team1 }
      newTeam = e.target.value
      setTeam1(newTeam)
    } else if (team === 'team2') {
      let newTeam = { ...team2 }
      newTeam = e.target.value
      setTeam2(newTeam)
    }
  }

  return (
    <GameContext.Provider
      value={{ games, hasGameStarted, team1, team2, selectGames, startGame, changeTeams }}
    >
      {children}
    </GameContext.Provider>
  )
}
