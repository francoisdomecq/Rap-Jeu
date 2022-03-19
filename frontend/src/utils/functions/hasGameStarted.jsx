import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { GameContext } from '../context'

export default function HasGameStarted() {
  const { hasGameStarted } = useContext(GameContext)
  const history = useHistory()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (hasGameStarted === false) {
      history.push('/Error')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, hasGameStarted])
}
