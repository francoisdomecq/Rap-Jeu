import comptoir_gauche from '../../assets/comptoir_gauche.svg'
import comptoir_droit from '../../assets/comptoir_droit.svg'
import mehdi from '../../assets/mehdi.svg'
import { ContainerRow, ContainerZIndex } from './styles'

function Background() {
  return (
    <ContainerZIndex>
      <ContainerRow>
        <img src={comptoir_gauche} style={{ marginTop: '5%' }} alt="comptoir" />
        <img src={mehdi} alt="mehdi" style={{ width: '40%', height: '100%' }} />
        <img src={comptoir_droit} style={{ marginTop: '5%' }} alt="comptoir" />.
      </ContainerRow>
    </ContainerZIndex>
  )
}

export default Background
