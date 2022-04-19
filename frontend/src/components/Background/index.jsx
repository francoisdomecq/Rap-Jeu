import comptoir_gauche from '../../assets/comptoir_gauche.svg'
import comptoir_droit from '../../assets/comptoir_droit.svg'
import comptoir_gauche_eclaire from '../../assets/comptoir_gauche_eclaire.svg'
import comptoir_droit_eclaire from '../../assets/comptoir_droit_eclaire.svg'
import mehdi from '../../assets/mehdi.svg'
import { ContainerRow, ContainerZIndex } from './styles'
import { useContext, useEffect, useState } from 'react'
import { GameContext, TeamContext } from '../../utils/context'

function Background() {
  const { teamAnswering } = useContext(GameContext)
  const { team1, team2 } = useContext(TeamContext)
  const [leftImage, setLeftImage] = useState(null)
  const [rightImage, setRightImage] = useState(null)

  useEffect(() => {
    if (teamAnswering) {
      if (teamAnswering === team1) {
        setLeftImage(comptoir_gauche_eclaire)
        setRightImage(comptoir_droit)
      } else {
        setLeftImage(comptoir_gauche)
        setRightImage(comptoir_droit_eclaire)
      }
    } else {
      setLeftImage(comptoir_gauche)
      setRightImage(comptoir_droit)
    }
  }, [teamAnswering])
  return (
    <ContainerZIndex>
      <ContainerRow>
        <img src={leftImage} style={{ marginTop: '5%' }} alt="comptoir" />
        <img src={mehdi} alt="mehdi" style={{ width: '45%', height: '100%' }} />
        <img src={rightImage} style={{ marginTop: '5%' }} alt="comptoir" />.
      </ContainerRow>
    </ContainerZIndex>
  )
}

export default Background
