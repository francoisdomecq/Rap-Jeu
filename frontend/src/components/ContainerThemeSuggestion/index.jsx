import {
  ContainerColumn,
  ContainerTheme,
  ContainerSuggestions,
  SuggestionsTextDiv,
} from './styles'
import { TextWhite, TextBlack } from '../../utils/styles/Text'

//Ce composant est utilisé dans les épreuves TOP5 et les enchères pour afficher le thème choisi et les suggestions associées
function ContainerThemeSuggestion({ theme, suggestions }) {
  return (
    <ContainerColumn>
      <ContainerTheme style={{ marginTop: '4%' }}>
        <TextWhite size={20}>{theme}</TextWhite>
      </ContainerTheme>
      <ContainerSuggestions>
        <ContainerColumn>
          <SuggestionsTextDiv>
            <TextBlack size={14}>{suggestions}...</TextBlack>
          </SuggestionsTextDiv>
        </ContainerColumn>
      </ContainerSuggestions>
    </ContainerColumn>
  )
}
export default ContainerThemeSuggestion
