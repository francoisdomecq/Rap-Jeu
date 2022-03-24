import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import theme from '../../../assets/encheres/theme.svg'
import suggestions from '../../../assets/encheres/suggestions.svg'
import button from '../../../assets/encheres/button+1.svg'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100%;
`

export const RappeurContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
  border-radius: 20px;
  background-color: ${colors.red};
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10%;
  width: 100%;
`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10%;
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

export const ThemeText = styled.p`
  font-size: 20px;
  color: white;
  font-family: 'Montserrat';
  font-weight: 700;
  height: 67px;
`
export const ContainerSuggestions = styled.div`
  display: flex;
  justify-content: center;
  width: 963px;
  height: 50px;
  background-size: contain;
  background-image: url(${suggestions});
  background-repeat: no-repeat;
`

export const SuggestionsText = styled.p`
  font-size: 14px;
  color: black;
  font-family: 'Montserrat';
  font-weight: 700;
  height: 50px;
`
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 60px;
  background-size: contain;
  background-image: url(${button});
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`

export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
`
