import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import timer from '../../../assets/enchere_top5/timer.svg'
import theme from '../../../assets/enchere_top5/theme.svg'
import suggestions from '../../../assets/enchere_top5/suggestions.svg'
import Continuer from '../../../assets/continuer.svg'

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`
export const ContainerColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
export const ContainerTimer = styled.div`
  position: absolute;
  top: 9.2%;
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
  height: 100%;
  margin-top: 3%;
  margin-left: 19%;
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
export const ContainerSuggestions = styled.div`
  display: flex;
  text-align: center;
  width: 963px;
  height: 50px;
  background-size: contain;
  background-image: url(${suggestions});
  background-repeat: no-repeat;
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  max-height: 55px;
  border-radius: 10px;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
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
  padding: 2% 2% 4% 2%;
  width: 100%;
  border-radius: 20px;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  opacity: 1;
  box-shadow: 1px 1px 1px ${colors.blue};
`

export const ContainerTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 45%;
  opacity: ${({ isSelected }) => (isSelected ? 0.5 : 1)};
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  &:hover {
    cursor: pointer;
  }
`
export const NextRoundButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${Continuer});
  background-repeat: no-repeat;
  background-size: contain;
  width: 326px;
  height: 105px;
  &:hover {
    cursor: pointer;
  }
  padding-right: 1%;
`
export const ContainerAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 35%;

  border-radius: 20px;
  padding: 0% 0% 1% 0%;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  opacity: 1;
  box-shadow: 1px 1px 1px ${colors.blue};
`
