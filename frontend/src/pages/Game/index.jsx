import { useHistory } from 'react-router-dom'
import { useState,useEffect,useContext } from 'react'
import {GameContext} from '../../utils/context/index'

function Game() {
  const [locationKeys, setLocationKeys] = useState([])
  const history = useHistory()
  const {startGame} = useContext(GameContext)

  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([ location.key ])
      }
  
      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([ _, ...keys ]) => keys)
  
          // Handle forward event
  
        } else {
          setLocationKeys((keys) => [ location.key, ...keys ])
          startGame()
  
        }
      }
    })
  }, [ locationKeys, ])

  return (
    <div>
      <h1>Jeu n°1</h1>
      {/* <button
        name="top 5"
        onClick={() => selectGames("top 5")}
      />
      <button
        name="chien"
        onClick={() => selectGames("chien")}
      /> */}
    </div>
  )
}

export default Game
