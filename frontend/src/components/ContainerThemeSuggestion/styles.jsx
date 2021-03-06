import styled from 'styled-components'
import theme from '../../assets/enchere_top5/theme.svg'
import suggestions from '../../assets/enchere_top5/suggestions.svg'

export const ContainerColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`
export const ContainerTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 862px;
  height: 67px;
  background-size: contain;
  background-image: url(${theme});
  background-repeat: no-repeat;
  @media screen and (min-width: 350px) and (max-width: 500px) {
    width: 300px;
    height: 22px;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    width: 420px;
    height: 32px;
  }
  @media screen and (min-width: 800px) and (max-width: 1000px) {
    width: 720px;
    height: 56px;
  }
`
export const ThemeTextDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  width: 80%;
  @media screen and (min-width: 500px) and (max-width: 800px) {
    width: 90%;
  }
`
export const TextWhite = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 18px;
  color: white;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 0.2em;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    font-size: 0.5em;
  }
  @media screen and (min-width: 800px) and (max-width: 1000px) {
    font-size: 0.8em;
  }
`

export const ContainerSuggestions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 963px;
  height: 50px;
  background-size: contain;
  background-image: url(${suggestions});
  background-repeat: no-repeat;
  @media screen and (min-width: 350px) and (max-width: 500px) {
    width: 320px;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    width: 450px;
  }
  @media screen and (min-width: 800px) and (max-width: 1000px) {
    width: 780px;
  }
`
export const SuggestionsTextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;

  @media screen and (min-width: 500px) and (max-width: 800px) {
    width: 90%;
  }
`
export const TextBlack = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 0.8em;

  @media screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 0.2%;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    font-size: 0.5em;
  }
  @media screen and (min-width: 800px) and (max-width: 1000px) {
    font-size: 0.7em;
  }
`
