import styled from 'styled-components'
import theme from '../../assets/enchere_top5/theme.svg'
import suggestions from '../../assets/enchere_top5/suggestions.svg'

export const ContainerColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
export const ContainerTheme = styled.div`
  display: flex;
  justify-content: center;
  width: 862px;
  height: 67px;
  background-size: contain;
  background-image: url(${theme});
  background-repeat: no-repeat;
`
export const ContainerSuggestions = styled.div`
  display: flex;
  text-align: center;
  width: 963px;
  height: 50px;
  background-size: contain;
  background-image: url(${suggestions});
  background-repeat: no-repeat;
`
export const SuggestionsTextDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  height: 50%;
`
