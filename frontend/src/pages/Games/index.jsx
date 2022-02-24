import { useHistory } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../utils/context/index'
import Score from '../../components/Score'

function Game() {
  const [locationKeys, setLocationKeys] = useState([])
  const history = useHistory()
  const { startGame } = useContext(GameContext)

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key])
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys)
        } else {
          setLocationKeys((keys) => [location.key, ...keys])
          startGame()
        }
      }
    })
  }, [locationKeys])

  return (
    <div>
      <Score value={1} team='team1'/>
      <Score value={1} team='team2'/>
    </div>
  )
}

export default Game
