import {
  ContainerScoreSelection,
  ContainerColumn,
  ContainerScore,
  ButtonScore,
} from './styles'
import { TextBlue } from '../../utils/styles/Text'

//Ce composant est utilisé dans les épreuves Rolland Gamos et les enchères pour décider du nombre de points que rapport l'épreuve
function ContainerPoints({ updatePoints }) {
  return (
    <ContainerScoreSelection>
      <ContainerColumn>
        <TextBlue>Combien de points ?</TextBlue>
        <ContainerScore style={{ marginTop: '1%' }}>
          <ButtonScore type="number" onKeyPress={(e) => updatePoints(e)} />
        </ContainerScore>
      </ContainerColumn>
    </ContainerScoreSelection>
  )
}

export default ContainerPoints
