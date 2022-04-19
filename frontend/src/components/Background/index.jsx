import { ContainerRow, ContainerZIndex } from './styles'
import { useContext, useEffect, useState } from 'react'
import { GameContext, TeamContext } from '../../utils/context'

import comptoir_gauche from '../../assets/comptoir_gauche.svg'
import comptoir_droit from '../../assets/comptoir_droit.svg'
import comptoir_gauche_eclaire from '../../assets/comptoir_gauche_eclaire.svg'
import comptoir_droit_eclaire from '../../assets/comptoir_droit_eclaire.svg'
import mehdi from '../../assets/mehdi.svg'

//Ce composant correspond au fond avec le présentateur et les joueurs
function Background() {
  const { teamAnswering } = useContext(GameContext)
  const { team1 } = useContext(TeamContext)
  const [leftImage, setLeftImage] = useState(null)
  const [rightImage, setRightImage] = useState(null)

  //Cette fonction sert à changer l'image à afficher selon l'équipe qui répond
  useEffect(() => {
    //On vérifie l'existence de la variable teamAnswering d'abord
    if (teamAnswering) {
      //Si l'équipe 1 répond, l'image de gauche (équipe 1) aura un comptoir éclairé
      if (teamAnswering === team1) {
        setLeftImage(comptoir_gauche_eclaire)
        setRightImage(comptoir_droit)
      } //Sinon l'équipe 2 aura le comptoir éclairé
      else {
        setLeftImage(comptoir_gauche)
        setRightImage(comptoir_droit_eclaire)
      }
    } else {
      setLeftImage(comptoir_gauche)
      setRightImage(comptoir_droit)
    }
  }, [teamAnswering, team1])
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
