import {
  ContainerColumn,
  ContainerTheme,
  ThemeTextDiv,
  TextWhite,
  ContainerSuggestions,
  SuggestionsTextDiv,
  TextBlack,
} from './styles'

//Ce composant est utilisé dans les épreuves TOP5 et les enchères pour afficher le thème choisi et les suggestions associées
function ContainerThemeSuggestion({ theme, suggestions }) {
  return (
    <ContainerColumn>
      <ContainerTheme style={{ marginTop: '4%' }} className="theme">
        <ThemeTextDiv>
          <TextWhite>{theme}</TextWhite>
        </ThemeTextDiv>
      </ContainerTheme>
      <ContainerSuggestions>
        <ContainerColumn>
          <SuggestionsTextDiv>
            <TextBlack>{suggestions}...</TextBlack>
          </SuggestionsTextDiv>
        </ContainerColumn>
      </ContainerSuggestions>
    </ContainerColumn>
  )
}
export default ContainerThemeSuggestion
