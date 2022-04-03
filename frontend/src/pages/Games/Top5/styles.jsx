import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import timer from '../../../assets/enchere_top5/timer.svg'
import theme from '../../../assets/enchere_top5/theme.svg'
import suggestions from '../../../assets/enchere_top5/suggestions.svg'
import button from '../../../assets/enchere_top5/button+1.svg'
import buttonTimer from '../../../assets/buttonTeam.svg'

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
export const ContainerTimer = styled.div`
  position: absolute;
  top: 10.3%;
  display: flex;
  justify-content: flex-start;
  width: 215px;
  height: 75px;
  background-size: contain;
  background-image: url(${timer});
  background-repeat: no-repeat;
`

export const Timer = styled.p`
  font-size: 40px;
  font-family: 'Orbitron';
  font-weight: 700;
  height: 75px;
  margin-top: 8px;
  margin-left: 40px;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 36%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  background-clip: text;
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
export const ContainerTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 325px;
  height: 56px;
  background-size: contain;
  background-image: url(${buttonTimer});
  background-repeat: no-repeat;
  opacity: ${({ isSelected }) => (isSelected ? '0.4' : '1')};
  &:hover {
    cursor: pointer;
  }
`
export const ContainerTeamSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  padding: 1%;
  width: 100%;
  border-radius: 20px;
  background-color: ${colors.yellow};
  opacity:1;
  
`
