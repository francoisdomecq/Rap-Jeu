import { TextWhite, TextBlack } from '../../utils/styles/Text'
import {
  ContainerTheme,
  ContainerColumn,
  ContainerSuggestions,
  SuggestionsTextDiv,
} from './styles'

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
